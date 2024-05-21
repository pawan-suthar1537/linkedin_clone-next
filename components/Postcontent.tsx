import { IPost, IPostDoc } from "@/models/postmodel";
import Image from "next/image";
import React from "react";

const Postcontent = ({ post }: { post: IPostDoc }) => {
  return (
    <div className="my-2">
      <p className="my-3 px-4">{post?.description}</p>
      {post?.imageUrl && (
        <Image
          src={post?.imageUrl}
          width={100}
          height={100}
          alt="postimage"
          unoptimized
          quality={100}
          className="w-full mx-auto  "
        />
      )}
    </div>
  );
};

export default Postcontent;
