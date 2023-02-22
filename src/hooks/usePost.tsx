import React from "react";
import { useRecoilState } from "recoil";
import { PostState } from "../atoms/postsAtom";

const usePost = () => {
  const [postStateValue, setPostStateValue] = useRecoilState(PostState);

  const onVote = async ()=>{};
  const onSelectPost = ()=>{};
  const onDeletePost = async ()=>{};
  return {
    postStateValue,
    setPostStateValue,
    onVote,
    onSelectPost,
    onDeletePost
  }
};

export default usePost;
