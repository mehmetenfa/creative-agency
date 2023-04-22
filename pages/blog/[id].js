import React from 'react'
import { blogdata } from '@/assets/data/dummydata'
import Banner from '@/components/Banner'
import { Title, TitleSm } from '@/components/common/Title'
import Head from 'next/head'
import { useRouter } from 'next/router'

const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = blogdata.find((post) => post.id === parseInt(id))

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
    </>
  )
}

export default SinglePost