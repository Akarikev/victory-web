import { BlogDetails } from "@/lib/types/data";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";
import MarkdownPreview from "./markdown/markdown-preview";
import CopyButton from "./copy-button";

type BlogD = {
  created_at: string;
  id: string;
  image_url: string;
  is_premium: boolean;
  is_published: boolean;
  title: string;
  blog_content: {
    blog_id: string;
    content: string;
    created_at: string;
  };
};

function BlogDetailsPage({ data }: { data: BlogD }) {
  // const id = Math.floor(Math.random() * 100 + 1).toString();
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Link
          href="/blogs"
          className="bg-slate-400/10 inline-flex px-2 hover:opacity-75 rounded-md gap-2 items-center"
        >
          <ArrowLeft className="w-4 h-4" />
          back to blog lists
        </Link>
      </div>

      <div className="mt-6">
        <h1 className="text-xl font-extrabold md:text-2xl lg:text-3xl">
          {data?.title}
        </h1>

        <small className="text-blue-600 font-bold">
          {new Date(data?.created_at).toDateString()}
        </small>

        <small className="ml-3 underline-offset-4 font-semibold bg-blue-600 px-1 py-1 rounded-md text-gray-200">
          Author: Victory Ahiaku Kwashigah
        </small>

        <div className="mt-6">
          <h1 className="font-bold underline-offset-2 underline">
            {data?.title}
          </h1>
          <Image
            width={400}
            height={300}
            alt="blog_image"
            src={data?.image_url!}
            className="rounded-md mt-4 object-contain object-center"
          />
        </div>

        <div className="mt-4">
          {/* <CopyButton id={id} /> */}
          {data?.blog_content?.content ? (
            <MarkdownPreview content={data?.blog_content?.content} />
          ) : (
            <p>No content available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogDetailsPage;
