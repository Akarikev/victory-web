import BlogDetailsPage from "@/components/blog-details";
import { ReadBlogsContent } from "@/lib/actions/blog";
import React from "react";
import { BlogDetails } from "@/lib/types/data";

type BlogD = BlogDetails;

async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { data } = await ReadBlogsContent(params.id);
  console.log(data?.blog_content);
  return <BlogDetailsPage data={data} />;
}

export default Page;
