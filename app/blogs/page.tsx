import { Loader } from "lucide-react";
import React from "react";

function BlogsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="mb-3">
        <p className="text-center text-xl md:text-3xl tracking-tighter font-extrabold">
          BLOGS
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-blue-400/10 w-full rounded-md md:w-fit p-4">
          <p className="inline-flex gap-2 items-center">
            <Loader className="animate-spin w-4 h-4" />
            Coming soon...
          </p>

          <p className="text-sm italic">This is where I write my story</p>
        </div>
      </div>
    </div>
  );
}

export default BlogsPage;
