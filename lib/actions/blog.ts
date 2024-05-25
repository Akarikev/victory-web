"use server";

import { createClient } from "@/utils/supabase/server";

export async function ReadBlogs() {
  const server = createClient();
  return server
    .from("blogs")
    .select("*")
    .eq("is_published", true)
    .order("created_at", {
      ascending: true,
    });
}

export async function ReadBlogsContent(blogId: string) {
  const server = createClient();
  const blog = await server
    .from("blogs")
    .select("*, blog_content(*)")
    .eq("id", blogId)
    .single();
  if (!blog) {
    throw new Error(`Blog post with id ${blogId} not found`);
  }
  return blog;
}
