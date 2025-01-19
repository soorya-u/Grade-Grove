import "./globals.css";

import type { Metadata } from "next/types";
import { Ubuntu } from "next/font/google";

import { defaultMetadata } from "@/constants/metadata";

import Header from "@/components/modules/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/providers";
import { cn } from "@/utils/cn";

const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grade Grove",
  description:
    "Take a panoramic dive into your academic progress by effortlessly reviewing, analyzing and tracking every mark and grade earned throughout each semester",
  ...defaultMetadata,
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          ubuntu.className,
          "h-screen w-full bg-gradient-to-tr from-[indigo] to-[#f64444] bg-body",
        )}
      >
        <Providers>
          <Header />
          <main className="flex min-h-[82vh] flex-col items-center justify-center gap-7 before:content-[''] after:content-['']">
            {children}
          </main>
          <Toaster />
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
