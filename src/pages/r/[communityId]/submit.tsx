import PageContent from '@/src/components/layouts/PageContent'
import NewPostForm from '@/src/components/Post/NewPostForm'
import { Box, Text } from '@chakra-ui/react'
import React from 'react'


const SubmitPostPage = () => {
  return (
    <PageContent>
      <>
      <Box p="14px 0px" borderBottom="1px solid" borderColor="white">
        <Text>Create a post</Text>
      </Box>
      <NewPostForm/>
      </>
      <>
      </>
    </PageContent>
  )
}

export default SubmitPostPage 