import { ReadBlogsContent } from "@/lib/actions/blog";
import { BlogDetails } from "@/lib/types/data";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  //   console.log(params.id);

  const { data: blogs } = await ReadBlogsContent(params.id);
  console.log(blogs.blog_content);
  return (
    <div className="flex flex-col min-h-screen ">
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
        <h1 className="text-xl font-extrabold md:text-2xl lg:text-3xl ">
          {blogs.title}
        </h1>

        <small className="text-blue-600 font-bold">
          {new Date(blogs.created_at).toDateString()}
        </small>

        <small className="ml-3  underline-offset-4 font-semibold bg-blue-600 px-1 py-1 rounded-md text-gray-200">
          Author : Victory Ahiaku Kwashigah
        </small>

        <div className="mt-6">
          <h1 className="font-bold underline-offset-2 underline">
            {blogs.title}
          </h1>
          <Image
            width={400}
            height={300}
            alt="blog_image"
            src={blogs.image_url}
            className="rounded-md mt-4 object-contain object-center"
          />
        </div>

        <p className=" mt-4">{blogs?.blog_content?.content!!}</p>
        {/* 
        {JSON.stringify(blogs, null, 2)} */}
      </div>
    </div>
  );
}

export default Page;
