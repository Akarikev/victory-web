"use client";

import { cn } from "@/lib/utils";
import { BookAIcon, HomeIcon, UserCheck } from "lucide-react";
import { Abril_Fatface } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import { ModeToggle } from "./mood-toggler";

const fat_face = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});

function Navbar() {
  const pathname = usePathname();
  const links = [
    {
      linkName: "Home",
      path: "/",
      Icon: HomeIcon,
    },

    {
      linkName: "About",
      path: "/about",
      Icon: UserCheck,
    },
    {
      linkName: "Blogs",
      path: "/blogs",
      Icon: BookAIcon,
    },
  ];
  return (
    <nav>
      <div className="flex justify-between">
        <Link
          href={"/"}
          className="inline-flex gap-2 items-center justify-center"
        >
          <Image
            width={40}
            height={40}
            alt="victory"
            src={"/head.jpg"}
            className="rounded-full ring-2 "
          />
          <h1 className=" font-extrabold  underline-offset-2 uppercase  md:text-2xl ">
            Victory Ahiaku
          </h1>
        </Link>

        <ModeToggle />
      </div>

      <div className="flex gap-2 space-x-12  mt-10 justify-center items-center font-extrabold tracking-tighter">
        {links.map(({ linkName, path, Icon }, i) => {
          return (
            <Link
              href={path}
              key={i}
              className={cn(
                "inline-flex gap-1 items-center transition-all  md:text-xl text-sm rounded-xl   bg-gray-600/10 px-2",
                {
                  "bg-blue-600 ": pathname === path,
                }
              )}
            >
              <Icon className="w-4 h-4 " />

              {linkName}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
