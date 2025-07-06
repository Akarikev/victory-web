"use server";

import { createClient } from "@/utils/supabase/server";

export async function ReadBlogs() {
  const server = await createClient();
  return server
    .from("blogs")
    .select("*")
    .eq("is_published", true)
    .order("created_at", {
      ascending: false,
    });
}

export async function ReadBlogsLatest() {
  const server = await createClient();
  return server
    .from("blogs")
    .select("*")
    .eq("is_published", true)
    .order("created_at", {
      ascending: false,
    })
    .limit(5);
}

export async function ReadBlogsContent(blogId: string) {
  const server = await createClient();
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
