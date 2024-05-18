import { ICommentDoc } from '@/models/commentmodel'
import React from 'react'
import ProfilePhoto from './shared/ProfilePhoto'
import ReactTimeago from 'react-timeago'

const Comment = ({comment}:{comment:ICommentDoc}) => {
  return (
    <div className='flex my-4 gap-2'>
        <div className='mt-2'>
            <ProfilePhoto src={comment?.user?.profilephoto!}/>

        </div>
        <div className='flex flex-1 justify-between p-3 bg-[#F2F2F2]'>
            <div>
                <h1 className='text-sm font-medium'>{`${comment.user.firstname} ${comment.user.lastname}`}</h1>
                <p className='text-xm text-gray-500'>@{comment.user.firstname}</p>
                <p className='my-2'>{comment.textmessage}</p>
            </div>
            <div>
                <p className='text-xm text-gray-500'>
                    <ReactTimeago date={new Date(comment.createdAt)}/>
                </p>
            </div>

        </div>


    </div>
  )
}

export default Comment