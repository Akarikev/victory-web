import { Loader2 } from "lucide-react";
import React from "react";

function Loading() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <Loader2 className="w-6 h-6 animate-spin" />
    </div>
  );
}

export default Loading;
