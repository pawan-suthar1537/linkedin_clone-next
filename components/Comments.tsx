import { IPostDoc } from '@/models/postmodel'
import React from 'react'
import Comment from './Comment'
import { IComment, ICommentDoc } from '@/models/commentmodel'

const Comments = ({post}: {post: IPostDoc}) => {
  return (
    <div>
      {
        post.comments.map((comment:any,index) => (
          <Comment key={index} comment={comment}/>
         ))
      }
      
    </div>
  )
}

export default Comments