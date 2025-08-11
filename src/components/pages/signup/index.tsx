import { Suspense } from "react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/utils/cn";

import SignUpForm from "./sign-up-form";
import OAuth from "@/components/modules/auth";
import { poppins } from "@/fonts";


export default async function SignUpCard() {
  return (
    <Card className="mx-auto max-w-sm border-none bg-transparent shadow-none">
      <CardHeader>
        <CardTitle className={cn(poppins.className, "text-2xl")}>
          Sign Up
        </CardTitle>
        <CardDescription className={cn(poppins.className, "text-[#ccccd2]")}>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense>
          <SignUpForm />
        </Suspense>
        <OAuth />
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <div className={cn(poppins.className, "mt-4 text-center text-sm")}>
          Already have an account?{" "}
          <Link href="/auth/login" className="underline">
            Login
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
