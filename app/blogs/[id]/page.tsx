//import BlogDetailsPage from "@/components/blog-details";
import { ReadBlogsContent } from "@/lib/actions/blog";
import React from "react";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import Image from "next/image";
import Markdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import BlogDetailsPage from "@/components/blog-details";

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

export async function generateStaticParams({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const response: PostgrestSingleResponse<BlogD> = await ReadBlogsContent(
    params.id
  );

  return response?.data;
}

export async function generateMetadata({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const response: PostgrestSingleResponse<BlogD> = await ReadBlogsContent(
    params.id
  );

  return {
    title: response.data?.title,
    authors: {
      name: "Victory Kwashigah Ahiaku",
    },
    openGraph: {
      title: response.data?.title,
      url: `https://www.victoryahiaku.site/blogs/${response.data?.id}`,
      siteName: "Victory Ahiaku's Personal Website",
      images: response.data?.image_url,
      type: "website",
    },

    keywords: [
      "Victory Ahiaku",
      "blogging",
      "Ghanaian Bloggers",
      `${response.data?.title}`,
    ],
  };
}

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
    return (
      <div className="flex justify-center items-center bg-red-400 p-3 font-bold">
        Error loading blog content or it might be that this blog is deleted
      </div>
    );
  }

  const data = response.data;

  if (!data) {
    console.error("No data returned");
    return <div>No blog content found</div>;
  }

  console.log(data.blog_content.content);
  return <BlogDetailsPage data={data} />;
}

export default Page;
