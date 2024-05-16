import Image from 'next/image'
import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'

const ProfilePhoto = ({src}:{src:string}) => {
  return (
    <div className="cursor-pointer h-9 w-9" >
        {/* <Image src={src} alt="profile" width={35} height={35} className="rounded-full object-cover"/> */}
        <Avatar>
      <AvatarImage src={src} alt="banner" />
    </Avatar>
    </div>
  )
}

export default ProfilePhoto