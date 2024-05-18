import React, { useState } from "react";
import ProfilePhoto from "./shared/ProfilePhoto";
import { useUser } from "@clerk/nextjs";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createcommentaction } from "@/lib/Serveraction";

const CommentInput = ({ postId }: { postId: string }) => {
  const { user } = useUser();
  const [inputText, setInputText] = useState("");

  const commentserveractionhandler = async (formData: FormData) => {
    try {
      if (!user) {
        throw new Error("User not found");
      }
      const commentData = {
        textmessage: formData.get("inputText") as string,
        user: {
          userId: user.id,
          profilephoto: user.imageUrl,
          firstname: user.firstName,
          lastname: user.lastName,
        },
      };
      createcommentaction(postId, formData);
      setInputText(""); // Clear the input field after submitting the comment
    } catch (error) {
      console.log("Error posting comment:", error);
      throw new Error("Error posting comment");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        commentserveractionhandler(formData);
      }}
    >
      <div className="flex items-center gap-2">
        <ProfilePhoto src={user?.imageUrl!} />
        <Input
          placeholder="Add a comment"
          className="rounded-full"
          type="text"
          name="inputText"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button variant={"outline"} className="rouned-full" type="submit">
          Post
        </Button>
      </div>
    </form>
  );
};

export default CommentInput;
