import { Suspense } from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/primitives/card";

import LoginForm from "./LoginForm";
import { cn } from "@/utils/cn";
import OAuth from "@/components/custom/Auth";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default async function LoginCard() {
  return (
    <Card className="w-full max-w-sm border-none bg-transparent shadow-none">
      <CardHeader className="flex flex-col">
        <CardTitle className={cn(poppins.className, "text-2xl")}>
          Login
        </CardTitle>
        <CardDescription className={cn(poppins.className, "text-[#ccccd2]")}>
          Enter your credentials below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense>
          <LoginForm />
        </Suspense>
        <OAuth />
      </CardContent>
      <CardFooter>
        <div
          className={cn(poppins.className, "mx-auto mt-4 text-center text-sm")}
        >
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/signup"
            className="text-nowrap underline underline-offset-2 outline-none"
          >
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
