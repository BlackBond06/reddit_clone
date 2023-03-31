import { Community, communityState } from "../../../atoms/communitiesAtom";
import { firestore } from "@/src/firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import React, { useEffect } from "react";
import safeJsonStringify from "safe-json-stringify";
import NotFound from "@/src/components/Community/NotFound";
import Header from "../../../components/Community/Header";
import PageContent from "../../../components/layouts/PageContent";
import CreatPostLink from "@/src/components/Community/CreatPostLink";
import Post from "@/src/components/Post/Post";
import { useSetRecoilState } from "recoil";
import About from "@/src/components/Community/About";

type Props = {
  communityData: Community;
};

const CommunityPage = ({ communityData }: Props) => {
  const setCommunityStateValue = useSetRecoilState(communityState);

  if (!communityData) {
    return <NotFound />
  
  }

  useEffect(()=>{
    setCommunityStateValue(prev => ({
      ...prev,
      currentCommunity: communityData,
    }))
  }, [communityData])

  return (
    <>
      <Header communityData={communityData} />
      <PageContent>
        <>
          <CreatPostLink />
          <Post communityData={communityData} />
        </>
        <>
        <About communityData={communityData}/>
        </>
      </PageContent>
    </>
  );
};
export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const communityDocRef = doc(
      firestore,
      "communities",
      context.query.communityId as string
    );
    const communityDoc = await getDoc(communityDocRef);

    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })
            )
          : "",
      },
    };
  } catch (error) {
    console.log("getServerSideProps error", error);
  }
}
export default CommunityPage;
