import BlogDetailsPage from "@/components/blog-details";

import { ReadBlogsContent } from "@/lib/actions/blog";

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
  return <BlogDetailsPage blogs={blogs} />;
}

export default Page;
