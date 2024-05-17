import mongoose, { Document } from "mongoose";
import { Model } from "mongoose";
import { IUser } from "./usermodel";
import { IComment } from "./commentmodel";

export interface IPost {
  description: string;
  user: IUser;
  imageUrl?: string;
  likes?: string[];
  comments: IComment[];
}

export interface IPostDoc extends IPost, Document {
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new mongoose.Schema<IPostDoc>(
  {
    description: {
      type: String,
      required: true,
    },
    user: {
      userId: {
        type: String,
        required: true,
      },
      profilephoto: {
        type: String,
        required: true,
      },
      firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
    },
    imageUrl: {
      type: String,
      default: "",
    },
    likes: {
      type: [String],
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Post: Model<IPostDoc> =
  mongoose.models?.Post || mongoose.model<IPostDoc>("Post", postSchema);
