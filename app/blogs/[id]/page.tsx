//import BlogDetailsPage from "@/components/blog-details";
import { ReadBlogsContent } from "@/lib/actions/blog";
import React from "react";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import Image from "next/image";
import Markdown from "react-markdown";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import BlogDetailsPage from "@/components/blog-details";

export const dynamic = "force-dynamic";

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
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blogs = await fetch(
    "https://admin.victoryahiaku.online/api/blog?id=" + id
  ).then((res) => res.json());
  return [blogs];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: blogs } = (await fetch(
    "https://admin.victoryahiaku.online/api/blog?id=" + id
  ).then((res) => res.json())) as { data: BlogD };

  return {
    title: blogs?.title,
    authors: {
      name: "Victory Kwashigah Ahiaku",
    },
    openGraph: {
      title: blogs?.title,
      url: `https://www.victoryahiaku.online/blogs/${blogs?.id}`,
      siteName: `${blogs.title} | Victory's blogs`,
      images: blogs?.image_url,
      type: "website",
    },
    keywords: [
      "Victory Ahiaku",
      "blogging",
      "Ghanaian Bloggers",
      `${blogs?.title}`,
    ],
  };
}

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response: PostgrestSingleResponse<BlogD> = await ReadBlogsContent(id);

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
