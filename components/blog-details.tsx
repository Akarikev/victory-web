import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MarkdownPreview from "./markdown/markdown-preview";

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

function BlogDetailsPage({ data }: { data: BlogD }) {
  return (
    <div className="flex flex-col min-h-screen px-2 md:px-0 items-center bg-background text-foreground py-8">
      <div className="w-full max-w-2xl flex flex-col gap-8">
        <div>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog list
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
            {data?.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="font-semibold">
              {new Date(data?.created_at).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="hidden md:inline">&middot;</span>
            <span className="bg-primary/80 text-primary-foreground rounded px-2 py-0.5 font-medium">
              Author: Victory Ahiaku Kwashigah
            </span>
          </div>
          {data?.image_url && (
            <div className="w-full flex justify-center my-4">
              <div className="relative w-full aspect-[16/9] bg-muted rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
                <Image
                  src={data.image_url}
                  alt="blog_image"
                  fill
                  className="object-contain object-center rounded-2xl"
                  priority
                />
              </div>
            </div>
          )}
          <div className="prose prose-base md:prose-lg max-w-none dark:prose-invert mt-4">
            {data?.blog_content?.content ? (
              <MarkdownPreview content={data?.blog_content?.content} />
            ) : (
              <p>No content available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailsPage;
