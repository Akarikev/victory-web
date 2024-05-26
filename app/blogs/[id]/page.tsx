import BlogDetailsPage from "@/components/blog-details";
import { ReadBlogsContent } from "@/lib/actions/blog";
import React from "react";
import { PostgrestSingleResponse } from "@supabase/supabase-js"; // Adjust import based on your setup

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
  return <BlogDetailsPage data={data} />;
}

export default Page;
