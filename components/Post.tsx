"use client";
import React from "react";
import ProfilePhoto from "./shared/ProfilePhoto";
import { useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { Badge } from "./ui/badge";
import Postcontent from "./Postcontent";
import SocialOptions from "./SocialOptions";
import { IPostDoc } from "@/models/postmodel";
import ReactTimeago from "react-timeago";
import { deletepost } from "@/lib/Serveraction";

const Post = ({ post }: { post: IPostDoc }) => {
  const user = useUser();
  // console.log("-----",user)
  const fullName = post.user.firstname + " " + post.user.lastname;
  const loginuser = user?.user?.id === post?.user?.userId
  return (
    <div className="bg-white my-2 mx-2 md:mx-0 rounded-lg border border-gray-300">
      <div className="flex gap-2 p-4">
        <ProfilePhoto src={post.user.profilephoto!} />
        <div className="flex items-center justify-between w-full">
          <div>
            <h1 className="text-sm font-bold">
              {fullName}
              <Badge variant={"secondary"} className="ml-2">
                You
              </Badge>
            </h1>
            <p className="text-xs text-gray-500">
              @{user && user.user ? user.user.username : "username"}
            </p>

            <p className="text-xs text-gray-500">
              <ReactTimeago date={new Date(post.createdAt)} />
            </p>
          </div>
        </div>
        <div>
          
        {loginuser && (
          <div>
            <Button
              onClick={async () => {
                try {
                  await deletepost(post._id);
                } catch (error) {
                  console.error("Error deleting post:", error);
                }
              }}
              className="rounded-full mr-[6px] md:mr-0"
              size={"icon"}
              variant={"outline"}
            >
              <Trash2 />
            </Button>
          </div>
        )}
        </div>
      </div>
      <Postcontent post={post} />
      <div>
      <SocialOptions post={post} />
      </div>
    </div>
  );
};

export default Post;
