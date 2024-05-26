import BlogDetailsPage from "@/components/blog-details";
import { ReadBlogsContent } from "@/lib/actions/blog";
import React from "react";
import { PostgrestSingleResponse } from "@supabase/supabase-js"; // Adjust import based on your setup
import Image from "next/image";
import Markdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

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

async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const response: PostgrestSingleResponse<BlogD> = await ReadBlogsContent(
    params.id
  );

  if (response.error) {
    console.error("Error fetching blog content:", response.error);
    return <div>Error loading blog content</div>; // Render an error component or message
  }

  const data = response.data;

  if (!data) {
    console.error("No data returned");
    return <div>No blog content found</div>; // Render an appropriate message if no data is returned
  }

  console.log(data.blog_content.content); // Log data to verify it's correct in production
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
          {data.blog_content.content ? (
            <Markdown>{data.blog_content?.content!}</Markdown>
          ) : (
            <p>No content available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
