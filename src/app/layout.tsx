import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

import { cn } from "@/lib/utils";

import ReduxProvider from "@/providers/ReactProvider";

import Header from "@/components/custom/Header";

import "./globals.css";

const ubuntu = Ubuntu({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elite AIML",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={ubuntu.className}>
          <Header />
          {children}
        </body>
      </ReduxProvider>
    </html>
  );
}
