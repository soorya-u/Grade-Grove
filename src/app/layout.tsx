import type { Metadata } from "next/types";
import { Ubuntu } from "next/font/google";

import Header from "../components/custom/Header";
import Footer from "@/components/custom/Footer";

import "./globals.css";

const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grade Grove",
  description:
    "Take a panoramic dive into your academic progress by effortlessly reviewing, analyzing and tracking every mark and grade earned throughout each semester",
  authors: [
    {
      name: "Soorya U",
      url: "https://github.com/soorya-u/",
    },
  ],
  metadataBase: new URL("https://grade-grove.soorya-u.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Header />
        <main className="flex flex-col justify-center items-center gap-7 before:content-[''] after:content-['']">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
