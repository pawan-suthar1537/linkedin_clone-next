"use server";

import { Post } from "@/models/postmodel";
import { IUser } from "@/models/usermodel";
import { currentUser } from "@clerk/nextjs/server";
import { v2 as cloudinary } from "cloudinary";
import connectDB from "./DB";
import { revalidatePath } from "next/cache";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const postcreateAction = async (
  inputtext: string,
  selectedfile: string
) => {
  await connectDB();
  // check for user auth using clerk
  const user = await currentUser();
  if (!user) {
    throw new Error("User not authenticated");
  }
  if (!inputtext) {
    throw new Error("Input text is required");
  }

  const image = selectedfile;
  // console.log(image);

  const userdetails: IUser = {
    firstname: user.firstName || "Pawan",
    lastname: user.lastName || "Suthar",
    userId: user.id,
    profilephoto: user.imageUrl,
  };

  let uploadresponse;

  try {
    if (image) {
      // create post with text and image
      uploadresponse = await cloudinary.uploader.upload(image, {
        public_id: `posts/${user.id}`,
      });
      console.log("image");
      await Post.create({
        description: inputtext,
        user: userdetails,
        imageUrl: uploadresponse?.secure_url,
      });
    } else {
      // create post with text
      await Post.create({
        description: inputtext,
        user: userdetails,
      });
    }
    revalidatePath("/")
  } catch (error) {
    console.log(error);
    throw new Error("Error occurred while creating post");
  }
};

export const getpost = async () => {
  await connectDB();
  try {
    const posts = await Post.find().sort({createdAt:-1});
    // console.log(posts);\
    return JSON.parse(JSON.stringify(posts));
    
  } catch (error) {
    console.log(error)
    
  }
}
