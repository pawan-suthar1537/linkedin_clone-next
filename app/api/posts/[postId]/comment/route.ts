import connectDB from "@/lib/DB";
import { Post } from "@/models/postmodel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { postId: string } }
) => {
  try {
    await connectDB();
    const post = await Post.findById(params.postId);
    if (!post) return NextResponse.json({ error: "no post found" });
    const comments = await post.populate("comments", {
      sort: { createdAt: -1 },
    });
    return NextResponse.json(comments);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};
