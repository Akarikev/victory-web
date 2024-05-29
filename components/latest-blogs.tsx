import { ReadBlogs, ReadBlogsLatest } from "@/lib/actions/blog";
import Link from "next/link";
import React from "react";

async function LatestBlogs() {
  const { data: blogs } = await ReadBlogsLatest();
  return (
    <div className="mt-2 space-y-2">
      <div className="divide-y ">
        {blogs?.map((blog) => {
          return (
            <Link
              href={`/blogs/${blog.id}`}
              key={blog.id}
              className="divide-y flex flex-col space-y-2 gap-4"
            >
              <div className="flex items-center gap-3  justify-between">
                <p className="font-semibold tracking-tighter"> {blog.title}</p>
                <p className="text-xs font-bold ">
                  {new Date(blog.created_at).toLocaleDateString()}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default LatestBlogs;
