"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "../../hooks/use-toast";
import { Button } from "../../components/ui/button";
import { ToastAction } from "../../components/ui/toast";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; 

export default function BlogPostFormDialog() {
  const { toast } = useToast();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {

    if (title && author && content) {

      toast({
        title: "Blog submitted",
        description: `Title: ${title}, Author: ${author}`,
        action: <ToastAction altText="Undo">Undo</ToastAction>,
      });

      setTitle("");
      setAuthor("");
      setContent("");
    } else {

      toast({
        title: "Submission failed",
        description: "All fields are required.",
      });
    }
  };

  return (
    <AlertDialog >
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-black hover:bg-[#8A0303] text-white"
        >
          Post a Blog
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-black text-white">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-lg">Create a New Blog Post</AlertDialogTitle>
          <AlertDialogDescription className="text-lg">
            Please fill out the details of the blog post you want to submit.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block font-medium text-lg">
              Blog Title
            </label>
            <Input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the blog title"
              className="mt-1 block w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="author" className="block text-lg font-medium">
              Author Name
            </label>
            <Input
              id="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter the author's name"
              className="mt-1 block w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-lg font-medium">
              Blog Content
            </label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your blog here..."
              className="mt-1 block w-full"
              required
            />
          </div>
        </div>
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel className="text-lg">Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit} className="text-lg">
            Submit Blog
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
