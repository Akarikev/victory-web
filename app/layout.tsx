import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victory Ahiaku | Personal Website",
  description: "Personal Website of Victory Ahiaku Kwashigah",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  applicationName: "Victory Ahiaku Kwashigah's Page",
  keywords: [
    "Blogger",
    "Victory Kwashigah",
    "Ghanaian Blogger",
    "Ghana Blogs",
    "personal blog site",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Victory Ahiaku Kwashigah's Page ",
    description: "Welcome to Victory Ahiaku's Page",
    creator: "@elorm_elom",
    images: ["https://www.victoryahiaku.online/ogimage.jpg"],
  },

  openGraph: {
    images: "https://www.victoryahiaku.online/ogimage.jpg",
    title: "Victory Ahiaku Kwashigah's Page ",
    description: "Welcome to Victory Ahiaku's Page",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <script
            async
            src="https://0.observe.so/script.js"
            data-app="cly5xka510p9oarwkfkdupten"
          ></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-7xl mx-auto md:p-10 p-4 space-y-10">
            <Navbar />
            {children}
          </main>

          <footer className="border-t mt-10 space-y-4 bg-gradient-to-b  backdrop-blur-2xl bg-cyan-800/10  p-4">
            <div className="text-sm ">
              <h1>&copy; 2024, Victory Kwashigah Ahiaku</h1>

              <p>Built in Ghana</p>
              <p>All rights reserved</p>
              {/* <p className="text-green-500 font-bold rounded-lg  w-fit ">
                version 1.1.0
              </p> */}

              <div className=" bg-gray-400/10 w-fit p-0.5 mt-1 rounded-md">
                built with ❤ by:
                <Link
                  href={"https://www.elorm.site"}
                  className="underline text-sm ml-1"
                >
                  elorm.tsx
                </Link>
              </div>

              <p>Develps Inc</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
