import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ProfilePhoto from "./shared/ProfilePhoto";
import { Textarea } from "./ui/textarea";
import { Images } from "lucide-react";
import { useRef, useState } from "react";
import { readfileasdataUrl } from "@/lib/utils";
import Image from "next/image";
import { postcreateAction } from "@/lib/Serveraction";

export function Postdialouge({
  setopen,
  open,
  src,
}: {
  setopen: any;
  open: boolean;
  src: string;
}) {
  const inputref = useRef<HTMLInputElement>(null);
  const [selectedfile, setselectedfile] = useState("");
  const [inputtext, setinputtext] = useState("");

  const inputhandle = (e: any) => {
    setinputtext(e.target.value);
  };
  const filechangehandle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const dataUrl = await readfileasdataUrl(file);
      setselectedfile(dataUrl);
    }
  };

  const postAction = async (formData: FormData) => {
    const inputtext = formData.get("inputText") as string;
    // console.log(inputtext)
    try {
      await postcreateAction(inputtext, selectedfile);
    } catch (error) {
      // console.log(error);
    }
    setinputtext("")
    setopen(false)
  };

  return (
    <Dialog open={open}>
      <DialogContent
        onInteractOutside={() => setopen(false)}
        className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle className="flex gap-2">
            <ProfilePhoto src={src} />
            <div>
              <h1>pawan suthar</h1>
              <p className="text-xs">Post to anyone</p>
            </div>
          </DialogTitle>
        </DialogHeader>
        <form action={postAction}>
          <div className="flex flex-col">
            <Textarea
              onChange={inputhandle}
              id="name"
              name="inputText"
              value={inputtext}
              className="border-none text-lg focus-visible:ring-0"
              placeholder="Type your message here."
            />
            <div className="my-4">
              {selectedfile && (
                <Image
                  src={selectedfile}
                  alt="image"
                  height={100}
                  width={100}
                />
              )}
            </div>
          </div>

          <DialogFooter>
            <div className="flex items-center gap-4">
              <input
                ref={inputref}
                onChange={filechangehandle}
                type="file"
                name="image"
                className="hidden"
                accept="image/*"
              />

              <Button type="submit">Post</Button>
            </div>
          </DialogFooter>
        </form>
        <Button
          className="gap-4"
          onClick={() => inputref?.current?.click()}
          variant={"ghost"}
        >
          <Images className="text-blue-500" />
          <p className="text-[14px]">Media</p>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
