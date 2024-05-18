import React, { useState } from "react";
import { Button } from "./ui/button";
import { MessageCircleMore, Repeat, Send, ThumbsUp } from "lucide-react";
import { IPostDoc } from "@/models/postmodel";
import { useUser } from "@clerk/nextjs";
import CommentInput from "./CommentInput";
import Comments from "./Comments";

const SocialOptions = ({ post }: { post: IPostDoc }) => {
  const { user } = useUser();
  const [liked, setliked] = useState(false);
  const [likes, setlikes] = useState(post.likes);
  const [commentopen, setcommentopen] = useState(false);
  const likedislikehandle = async () => {
    if (!user) throw new Error("User not found");
    const templiked = liked;
    const templikes = likes;
    const dislike = likes?.filter((userId: string) => userId !== user.id);
    const like = [...(likes ?? []), user.id];

    const newlike = liked ? dislike : like;

    setliked(!liked);
    setlikes(newlike);

    const res = await fetch(
      `/api/posts/${post._id}/${liked ? "/dislike" : "/like"}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user.id),
      }
    );
    if (!res.ok) {
      setliked(templiked);
      throw new Error("Error liking post");
    }

    const fetchalllikes = await fetch(`/api/posts/${post._id}/like`);
    if (!fetchalllikes.ok) {
      setlikes(templikes);
      throw new Error(" failed to fetch like ");
    }
    const likedata = await fetchalllikes.json();
    setlikes(likedata);
  };
  return (
    <div>
      <div className="text-sm mx-2 p-2 flex items-center justify-between border-b border-gray-300 ">
        {(likes && likes.length > 0) && (
          <p className="text-xm text-gray-500 hover:text-blue-500 hover:underline hover:cursor-pointer">
            {likes.length} likes
          </p>
        )}
        { (post.comments && post.comments.length > 0) && (
          <p onClick={()=>setcommentopen(!commentopen)} className="text-xm text-gray-500 hover:text-blue-500 hover:underline hover:cursor-pointer">
            {post.comments.length} comments
          </p>
        )}
      </div>
      <div className="flex items-center m-1 justify-between">
        <Button
          onClick={likedislikehandle}
          className="flex items-center gap-1 rounded-lg text-gray-600 hover:text-black"
          variant={"ghost"}
        >
          <ThumbsUp className={`${liked && "fill-[#378FE9]"}`} />
          <p className={`${liked && "text-[#378FE9]"}`}>Likes</p>
        </Button>
        <Button
          onClick={() => setcommentopen(!commentopen)}
          className="flex items-center gap-1 rounded-lg text-gray-600 hover:text-black"
          variant={"ghost"}
        >
          <MessageCircleMore />
          <p>Comments</p>
        </Button>
        <Button
          className="flex items-center gap-1 rounded-lg text-gray-600 hover:text-black"
          variant={"ghost"}
        >
          <Repeat />
          <p>Repost</p>
        </Button>
        <Button
          className="flex items-center gap-1 rounded-lg text-gray-600 hover:text-black"
          variant={"ghost"}
        >
          <Send />
          <p>Send</p>
        </Button>
      </div>
      {commentopen && 
      <div className="p-4">
        <CommentInput postId={post._id} />
        <Comments post={post}/>
        </div>}
    </div>
  );
};

export default SocialOptions;
