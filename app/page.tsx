import Image from "next/image";
import { Inter, DM_Serif_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  BookOpen,
} from "lucide-react";

import { FaXTwitter } from "react-icons/fa6";
import LatestBlogs from "@/components/latest-blogs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fat_face = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
  variable: "--font-display",
});

export default function Home() {
  return (
    <div
      className={cn(
        "min-h-screen bg-background text-foreground",
        "bg-gradient-to-br from-background via-muted to-primary/10 dark:from-background dark:via-muted dark:to-primary/20",
        inter.variable
      )}
    >
      {/* Hero Section */}
      <section className="relative overflow-visible py-20 bg-background">
        <div className="w-full px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <MapPin className="w-4 h-4" />
                Ghana
              </div>
              <h1
                className={cn(
                  "text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter",
                  fat_face.variable
                )}
              >
                <span>Victory</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-purple-500 dark:from-primary dark:to-purple-400 bg-clip-text text-transparent">
                  Kwashigah
                </span>
                <br />
                <span>Ahiaku</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Ghanaian blogger, entrepreneur, and language enthusiast. CEO of{" "}
              <span className="font-semibold">Trendy Bell Hub</span> under
              Avenue Hub Media, specializing in content creation and event
              organization.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium transition-colors duration-200"
              >
                Read My Story
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/blogs"
                className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground hover:bg-muted rounded-full font-medium transition-colors duration-200"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                View Blog
              </Link>
            </div>
          </div>
          {/* Profile Image with modern, tilted gradient card effect */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 flex items-center justify-center">
              {/* Blurred/offset layer for extra depth */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-30 z-0
                bg-gradient-to-br from-primary/40 to-purple-400/40
                dark:from-primary/30 dark:to-purple-900/30
                scale-105 -rotate-6"
              />
              {/* Main tilted gradient card */}
              <div
                className="absolute inset-0 rounded-3xl shadow-2xl z-0
                bg-gradient-to-br from-primary/70 via-background to-purple-400/60
                dark:from-primary/40 dark:via-background dark:to-purple-900/60
                border border-border
                rotate-6"
              />
              {/* Image on top, upright */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden z-10">
                <Image
                  alt="Victory Kwashigah Ahiaku"
                  fill
                  src="/profile.jpg"
                  className="object-cover rounded-2xl shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 bg-background">
        <div className="w-full px-4 sm:px-8 lg:px-16">
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="mailto:victorykwashigahahiaku@gmail.com"
              className="group flex items-center gap-3 px-6 py-3 bg-card rounded-full shadow-sm hover:shadow-md transition-all duration-200 border border-border"
            >
              <Mail className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Email</span>
            </Link>
            <Link
              href="https://web.facebook.com/ahiaku.victory.5"
              className="group flex items-center gap-3 px-6 py-3 bg-card rounded-full shadow-sm hover:shadow-md transition-all duration-200 border border-border"
            >
              <Facebook className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Facebook</span>
            </Link>
            <Link
              href="https://x.com/VKwashigah"
              className="group flex items-center gap-3 px-6 py-3 bg-card rounded-full shadow-sm hover:shadow-md transition-all duration-200 border border-border"
            >
              <FaXTwitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Twitter</span>
            </Link>
            <Link
              href="https://www.instagram.com/victoryahiaku/"
              className="group flex items-center gap-3 px-6 py-3 bg-card rounded-full shadow-sm hover:shadow-md transition-all duration-200 border border-border"
            >
              <Instagram className="w-5 h-5 text-pink-600 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Instagram</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-20 bg-background">
        <div className="w-full px-4 sm:px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
                fat_face.variable
              )}
            >
              Latest Posts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover my latest thoughts, experiences, and insights on
              language, entrepreneurship, and life in Ghana.
            </p>
          </div>
          <div className="relative">
            <LatestBlogs />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="w-full px-4 sm:px-8 lg:px-16 text-center">
          <h3
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6",
              fat_face.variable
            )}
          >
            Let&apos;s Connect
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in collaboration, content creation, or just want to say
            hello? I&apos;d love to hear from you.
          </p>
          <Link
            href="mailto:victorykwashigahahiaku@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-medium text-lg transition-colors duration-200"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
