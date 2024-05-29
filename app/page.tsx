import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Loader,
  Loader2,
  Mail,
  Twitter,
} from "lucide-react";

import { FaXTwitter } from "react-icons/fa6";
import LatestBlogs from "@/components/latest-blogs";

const fat_face = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});
export default function Home() {
  return (
    <div className={cn("flex flex-col")}>
      <div className="flex flex-col md:flex-row md:space-x-10">
        <div className="order-2 md:order-1 flex flex-col items-center md:items-start md:w-1/3 mt-5 md:mt-0">
          {/* Image */}
          <div className="ring-8 w-fit rounded-md ring-zinc-500">
            <Image
              alt="profile"
              width={400}
              height={400}
              src="/profile.jpg"
              className="rounded-md"
            />
          </div>
        </div>

        <div className="order-1 md:order-2 flex flex-col md:w-2/3">
          {/* Name and Summary */}
          <h1
            className={cn(
              "font-extrabold text-2xl md:text-4xl lg:text-6xl  mt-5 md:mt-0 ",
              fat_face.className
            )}
          >
            VICTORY{" "}
            <span className="underline md:underline-offset-4 decoration-wavy decoration-blue-600 ">
              KWASHIGAH
            </span>{" "}
            AHIAKU
          </h1>
          <div className="mt-5 md:mt-0">
            <p className="md:mt-8  md:text-[17px]">
              Hello,{" "}
              <span className="font-extrabold tracking-tight text-yellow-400">
                I&apos;m Victory Ahiaku.
              </span>{" "}
              I am a Ghanaian blogger, entrepreneur, and language enthusiast. A
              language graduate from the{" "}
              <span className="underline text-blue-600 font-bold">
                University Of Education - Winneba
              </span>
              <br />
            </p>
            <p className=" mt-2 md:text-[17px]">
              CEO of{" "}
              <span className="italic font-bold ">Trendy Bell Hub {""}</span>
              <span className="underline font-bold">
                under Avenue Hub Media,
              </span>{" "}
              {""}
              a company specializing in content creation, event organization,
              and publicity services.
              <br />
              On this site you&apos;ll find some of my works and more
              <span>
                {" "}
                {""}
                <Link
                  href={"/about"}
                  className="underline text-blue-800 font-bold"
                >
                  about me.
                </Link>
              </span>
            </p>
          </div>

          {/* links */}
          <div className="mt-4 flex gap-3 md:space-x-2">
            <Link
              href="mailto:victorykwashigahahiaku@gmail.com"
              className="text-sm  inline-flex gap-2 bg-blue-400/10 p-1 items-center rounded-md"
            >
              <Mail className="w-4 h-4 text-red-600" />
              e-mail
            </Link>
            <Link
              href="https://web.facebook.com/ahiaku.victory.5"
              className="text-sm  inline-flex gap-2 bg-blue-400/10 p-1 items-center rounded-md"
            >
              <Facebook className="w-4 h-4 text-blue-600" />
              facebook
            </Link>
            <Link
              href="https://x.com/VKwashigah"
              className="text-sm  inline-flex gap-2 bg-blue-400/10 p-1 items-center rounded-md"
            >
              <FaXTwitter className="w-4 h-4 " />X
            </Link>
            <Link
              href="https://www.instagram.com/victoryahiaku/"
              className="text-sm  inline-flex gap-2 bg-blue-400/10 p-1 items-center rounded-md"
            >
              <Instagram className="w-4 h-4 text-pink-600" />
              Instagram
            </Link>
          </div>
        </div>
      </div>

      {/* Latest Blog */}
      <div className="mt-8">
        <h1 className="font-extrabold text-xl tracking-tighter md:text-2xl lg:text-3xl">
          Latest Posts
        </h1>

        <div className="">
          <LatestBlogs />
        </div>
      </div>
    </div>
  );
}
