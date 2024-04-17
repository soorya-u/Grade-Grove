import Link from "next/link";
import { Poppins } from "next/font/google";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/primitives/card";
import { cn } from "@/utils/cn";

import SignUpForm from "./SignUpForm";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function SignUpCard() {
  return (
    <Card className="mx-auto max-w-sm border-none shadow-none bg-transparent">
      <CardHeader>
        <CardTitle className={cn(poppins.className, "text-2xl")}>
          Sign Up
        </CardTitle>
        <CardDescription className={cn(poppins.className, "text-[#ccccd2]")}>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm />
        <div className={cn(poppins.className, "mt-4 text-center text-sm")}>
          Already have an account?{" "}
          <Link href="/auth/login" className="underline">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
