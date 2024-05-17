import React from 'react'
import Post from './Post'
import { IPost, IPostDoc } from '@/models/postmodel'

const Posts = ({posts}:{posts:IPostDoc[]}) => {
  return (
    <div>
      {
        posts.map((post)=>{
          return (
            <Post key={post._id} post={post} />
          )
        })
      }
    </div>
  )
}

export default Posts