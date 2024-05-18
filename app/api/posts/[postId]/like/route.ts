import connectDB from "@/lib/DB";
import { NextRequest, NextResponse } from "next/server";
import { Post } from "@/models/postmodel";

// get likes
export const GET = async (
  req: NextRequest,
  { params }: { params: { postId: string } }
) => {
  try {
    await connectDB();
    const post = await Post.findById({ _id: params.postId });
    if (!post) return NextResponse.json({ error: "no post found" });

    return NextResponse.json(post.likes);
  } catch (error) {
    return NextResponse.json({ error: "error in like post" });
  }
};

export const POST = async (
  req: NextRequest,
  { params }: { params: { postId: string } }
) => {
  try {
    await connectDB();
    const userId = await req.json();
    const post = await Post.findById({ _id: params.postId });
    if (!post) return NextResponse.json({ error: "no post found" });

    await post.updateOne({ $addToSet: { likes: userId } });

    return NextResponse.json({ message: "post liked" });
  } catch (error: any) {
    return NextResponse.json({ error: "error in like post" });
  }
};
