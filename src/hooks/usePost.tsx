import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { useRecoilState } from "recoil";
import { Post, PostState } from "../atoms/postsAtom";
import { firestore, storage } from "../firebase/clientApp";

const usePost = () => {
  const [postStateValue, setPostStateValue] = useRecoilState(PostState);

  const onVote = async ()=>{};
  const onSelectPost = ()=>{};
  const onDeletePost = async (post:Post):Promise<boolean> =>{

    try {
      if(post.imageURL){
        const imageRef = ref(storage, `posts/${post.id}.image`);
        await deleteObject(imageRef);
      }
      const postDocRef = doc(firestore, "posts", post.id!);
      await deleteDoc(postDocRef);

      // update recoil state
      setPostStateValue(prev =>({
        ...prev,
        posts:prev.posts.filter(item => item.id !== post.id)
      }));
      
      return true;
    } catch (error) {
      console.log(error);
      return false
      
    }
  };

  return {
    postStateValue,
    setPostStateValue,
    onVote,
    onSelectPost,
    onDeletePost
  }
};

export default usePost;
