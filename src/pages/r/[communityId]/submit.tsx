import { communityState } from '@/src/atoms/communitiesAtom'
import About from '@/src/components/Community/About'
import PageContent from '@/src/components/layouts/PageContent'
import NewPostForm from '@/src/components/Post/NewPostForm'
import { auth } from '@/src/firebase/clientApp'
import useCommunityData from '@/src/hooks/useCommunityData'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRecoilValue } from 'recoil'


const SubmitPostPage = () => {
  const [user] = useAuthState(auth);
  // const communityStateValue = useRecoilValue(communityState);
  const {communityStateValue} = useCommunityData();
  console.log("COMMUNITY", communityStateValue);
  
  return (
    <PageContent>
      <>
      <Box p="14px 0px" borderBottom="1px solid" borderColor="white">
        <Text>Create a post</Text>
      </Box>
     {user && <NewPostForm user={user} communityImageURL={communityStateValue.currentCommunity?.imageURL}/>}
      </>
      <>
      {communityStateValue.currentCommunity && <About communityData= {communityStateValue.currentCommunity}/>}
      </>
    </PageContent>
  )
}

export default SubmitPostPage 