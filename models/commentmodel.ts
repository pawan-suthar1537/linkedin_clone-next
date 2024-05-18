import mongoose, { Document } from "mongoose";
import { Model } from "mongoose";
import { IUser } from "./usermodel";

export interface IComment {
  textmessage: string;
  user: {
    userId: string;
    profilephoto: string;
    firstname: string;
    lastname: string;
  };
}

export interface ICommentDoc extends IComment, Document {
  createdAt: Date;
  updatedAt: Date;
}

const commentSchema = new mongoose.Schema<ICommentDoc>(
  {
    textmessage: {
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
        requried: true,
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
  },
  {
    timestamps: true,
  }
);

export const Comment: Model<ICommentDoc> =
  mongoose.models?.Comment ||
  mongoose.model<ICommentDoc>("Comment", commentSchema);
