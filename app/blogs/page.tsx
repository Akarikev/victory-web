import { ReadBlogs } from "@/lib/actions/blog";
import { Loader } from "lucide-react";
import React from "react";
import Link from "next/link";

async function BlogsPage() {
  const { data: blogs } = await ReadBlogs();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center py-12 px-4 sm:px-8 lg:px-0">
      <div className="w-full max-w-3xl flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center">
            Blogs
          </h1>
          <p className="text-muted-foreground text-center max-w-xl">
            Explore my latest posts on language, entrepreneurship, and life in
            Ghana.
          </p>
        </div>
        {/* Blog List */}
        <div className="flex flex-col divide-y divide-border">
          {blogs?.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader className="animate-spin w-6 h-6 text-primary mb-2" />
              <p className="text-muted-foreground">
                No blog posts yet. Check back soon!
              </p>
            </div>
          )}
          {blogs?.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.id}`}
              className="group flex flex-col md:flex-row md:items-center md:justify-between gap-2 py-6 hover:bg-muted/50 transition-colors duration-200"
            >
              <h2 className="font-semibold text-lg md:text-xl group-hover:text-primary transition-colors line-clamp-2">
                {blog.title}
              </h2>
              <span className="text-xs bg-primary/80 text-primary-foreground rounded-md px-2 py-0.5 font-medium w-fit">
                {new Date(blog.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogsPage;
