'use client';
import React, { useState } from "react";
import ProfilePhoto from "./shared/ProfilePhoto";
import { Input } from "./ui/input";
import { Postdialouge } from "./Postdialouge";
import { toast } from "react-toastify";

const PostInput = ({ user }: { user: any }) => {
    const [open,setopen] = useState<boolean>(false)
    const inputhandle = () => {
    if (user) {
      setopen(true);
    } else {
      toast.error("You need to be logged in to start a post!");
    }
  };
  return (
    <div className="bg-white p-4 m-2 md:m-0 border border-gray-300 rounded-lg">
      <div className="flex items-center gap-3">
        <ProfilePhoto src={user?.imageUrl} />
        <Input
          type="text"
          placeholder="Start a post"
          className="rounded-full hover:bg-gray-100"
          onClick={inputhandle}
        />
        <Postdialouge setopen={setopen} open={open} src={user?.imageUrl}/>
      </div>
    </div>
  );
};

export default PostInput;
