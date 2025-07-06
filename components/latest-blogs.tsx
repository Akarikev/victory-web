import { ReadBlogsLatest } from "@/lib/actions/blog";
import Link from "next/link";
import React from "react";

async function LatestBlogs() {
  try {
    const { data: blogs, error } = await ReadBlogsLatest();

    if (error) {
      console.error("Error fetching blogs:", error);
      return (
        <div className="text-center py-8">
          <p className="text-muted-foreground">
            Unable to load latest posts at the moment.
          </p>
        </div>
      );
    }

    if (!blogs || blogs.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No posts available yet.</p>
        </div>
      );
    }

    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link
            href={`/blogs/${blog.id}`}
            key={blog.id}
            className="group block p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-border hover:border-primary"
          >
            <div className="space-y-3">
              <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                {blog.title}
              </h3>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  {new Date(blog.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span className="group-hover:translate-x-1 transition-transform text-primary">
                  →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error in LatestBlogs component:", error);
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">
          Something went wrong while loading posts.
        </p>
      </div>
    );
  }
}

export default LatestBlogs;
