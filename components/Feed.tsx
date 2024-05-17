import React from 'react'
import PostInput from './PostInput'
import Posts from './Posts'
import { getpost } from '@/lib/Serveraction'

const Feed = async ({user}:{user:any}) => {
    const userData = JSON.parse(JSON.stringify(user))
    // console.log("efrewr",userData)
    const posts = await getpost()
  return (
    <div className='flex-1'>
        <PostInput user={userData}/>
        <Posts posts={posts!}/>
    </div>
  )
}

export default Feed