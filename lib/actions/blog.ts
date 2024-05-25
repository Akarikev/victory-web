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
    return server
      .from("blogs")
      .select("*, blog_content(*)")
      .eq("id", blogId)
      .single();
  }
