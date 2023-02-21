import { Community } from "../../../atoms/communitiesAtom";
import { firestore } from '@/src/firebase/clientApp';
import { doc, getDoc } from 'firebase/firestore';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import safeJsonStringify from "safe-json-stringify"
import NotFound from "@/src/components/Community/NotFound";
import Header from "../../../components/Community/Header"
import PageContent from "../../../components/layouts/PageContent";
import CreatPostLink from "@/src/components/Community/CreatPostLink";
import Post from "@/src/components/Post/Post";

type Props = {
    communityData:Community;
}

const CommunityPage = ({communityData}:Props) => {
    
    if(!communityData){
        return (
         <>
         <NotFound/>
         </>
        )
    }


  return (
    <>
    <Header communityData={communityData}/>
    <PageContent>
      <>
      <CreatPostLink/>
      <Post communityData={communityData}/>
      </>
      <>RHS</>
    </PageContent>
    </>
  )
}
export async function getServerSideProps (context:GetServerSidePropsContext){
    try {
      const communityDocRef = doc(firestore, "communities", context.query.communityId as string) ;
      const communityDoc = await getDoc(communityDocRef);

      return {
        props:{
            communityData:communityDoc.exists()? JSON.parse(safeJsonStringify({id:communityDoc.id, ...communityDoc.data()})
            ) : "",
        },
      }
    } catch (error) {
        console.log("getServerSideProps error", error)
    }
}
export default CommunityPage