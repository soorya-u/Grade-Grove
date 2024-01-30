import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";

import ReduxProvider from "@/providers/ReactProvider";

import Header from "../components/custom/Header";

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
          <main className="flex flex-col justify-center items-center gap-7 before:content-[''] after:content-['']">
            {children}
          </main>
        </body>
      </ReduxProvider>
    </html>
  );
}
