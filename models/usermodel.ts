import mongoose, { Document } from "mongoose";
import { Model } from "mongoose";

export interface IUser {
  firstname: string;
  lastname: string;
  userId: string;
  profilephoto?: string;
  // bio: string;
}

export interface IUserDoc extends IUser, Document {
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUserDoc>(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    profilephoto: {
      type: String,
      default: "",
    },
    // bio: {
    //   type: String,
    //   default: "",
    // },
  },
  {
    timestamps: true,
  }
);

export const User: Model<IUserDoc> =
  mongoose.models?.User || mongoose.model<IUserDoc>("User", userSchema);
