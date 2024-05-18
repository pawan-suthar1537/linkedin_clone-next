import connectDB from "@/lib/DB";
import { Post } from "@/models/postmodel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  req: NextRequest,
  { params }: { params: { postId: string } }
) => {
  try {
    await connectDB();
    const userId = await req.json();
    const post = await Post.findById({ _id: params.postId });
    if (!post) return NextResponse.json({ error: "no post found" });

    await post.updateOne({ $pull: { likes: userId } });

    return NextResponse.json({ message: "post disliked" });
  } catch (error: any) {
    return NextResponse.json({ error: "error in dislike post" });
  }
};
