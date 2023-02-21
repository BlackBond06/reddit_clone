import { Community } from '@/src/atoms/communitiesAtom'
import { firestore } from '@/src/firebase/clientApp';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

type Props = {
    communityData:Community;
}

const Post = ({communityData}:Props) => {
    const [loading, setLoading] = useState(false); 
   
    const getPost = async ()=>{
        try {
            // get post from community
            const postQuery = query(collection(firestore, "posts"),
            where("communityId", "==", communityData.id),
            orderBy("createdAt", "desc")
            );
            const postDocs = await getDocs(postQuery);
            const posts = postDocs.docs.map(doc => ({id:doc.id, ...doc.data()}))
            
        } catch (error:any) {
           console.log("getPost Error", error.message);
            
        }
    }

    useEffect(()=>{
        getPost();
    },[])


  return (
    <div>Post</div>
  )
}

export default Post