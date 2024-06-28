import { ReadBlogs } from "@/lib/actions/blog";
import { Loader } from "lucide-react";
import React from "react";

import { BlogDetails } from "@/lib/types/data";
import Link from "next/link";

async function BlogsPage() {
  const { data: blogs } = await ReadBlogs();

  console.log(blogs);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="mb-3">
        <p className=" text-xl md:text-3xl tracking-tighter font-extrabold">
          BLOGS
        </p>
      </div>
      <div>
        {/* <div className="bg-blue-400/10 w-full rounded-md md:w-fit p-4">
          <p className="inline-flex gap-2 items-center">
            <Loader className="animate-spin w-4 h-4" />
            Coming soon...
          </p>

          <p className="text-sm italic">This is where I write my story</p>
        </div> */}
        <div className="divide-y">
          {blogs?.map((blog) => {
            return (
              <div
                key={blog.id}
                className="flex  justify-between  mb-2 gap-4 items-center "
              >
                <Link href={"/blogs/" + blog.id} className=" ">
                  {blog.title}
                </Link>

                <p className="text-xs bg-blue-500 rounded-md px-0.5 text-white">
                  {new Date(blog.created_at).toLocaleDateString()}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BlogsPage;
