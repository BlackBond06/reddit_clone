import { Community } from "@/src/atoms/communitiesAtom";
import { Post, PostState, PostVote } from "@/src/atoms/postsAtom";
import { auth, firestore } from "@/src/firebase/clientApp";
import usePost from "@/src/hooks/usePost";
import { Stack } from "@chakra-ui/react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import PostItem from "./PostItem";
import PostLoader from "./PostLoader";

type Props = {
  communityData: Community;
};

const Post = ({ communityData }: Props) => {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const {
    postStateValue,
    setPostStateValue,
    onVote,
    onSelectPost,
    onDeletePost,
  } = usePost();

  const getPost = async () => {
    try {
      setLoading(true);
      // get post from community
      const postQuery = query(
        collection(firestore, "posts"),
        where("communityId", "==", communityData.id),
        orderBy("createdAt", "desc")
      );
      const postDocs = await getDocs(postQuery);
      const posts = postDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPostStateValue((prev) => ({
        ...prev,
        posts: posts as Post[],
      }));
    } catch (error: any) {
      console.log("getPost Error", error.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    getPost();
  }, [communityData]);

  return (
    <>
      {loading ? (<PostLoader/>):(
    <Stack>
      {postStateValue.posts.map((item) => (
        <PostItem
        key={item.id}
          post={item}
          userIsCreator={user?.uid === item.creatorId}
          userVoteValue={postStateValue.postVotes.find(vote => vote.id === item.id)?.voteValue}
          onVote={onVote}
          onSelectPost={onSelectPost}
          onDeletePost={onDeletePost}
        />
      ))}
    </Stack>
      )}
    </>
  );
};

export default Post;
