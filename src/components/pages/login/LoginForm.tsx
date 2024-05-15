"use client";

import { Poppins } from "next/font/google";

import { useForm } from "react-hook-form";
import { loginSchema, type LoginType } from "@/schema/login";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/primitives/input";
import { Label } from "@/components/primitives/label";
import { Button } from "@/components/primitives/button";
import { cn } from "@/utils/cn";
import { signIn } from "next-auth/react";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });
  return (
    <form
      onSubmit={handleSubmit(async (val) => await signIn("credentials", val))}
      className="grid gap-4"
    >
      <div className="grid gap-2">
        <Label className={poppins.className} htmlFor="username">
          Username
        </Label>
        <Input
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
          {...register("email")}
          type="email"
          placeholder="johndoe@example.com"
          className={cn(
            poppins.className,
            "border-[#ffffff84] bg-[#00000030] focus-visible:border-none focus-visible:ring-offset-0",
          )}
        />
        {errors.email && (
          <span className={cn(poppins.className, "text-xs text-[#ffea00]")}>
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="grid gap-2">
        <Label className={poppins.className} htmlFor="password">
          Password
        </Label>
        <Input
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
          placeholder="*******"
          {...register("password")}
          type="password"
          className={cn(
            poppins.className,
            "border-[#ffffff84] bg-[#00000030] focus-visible:border-none focus-visible:ring-offset-0",
          )}
        />
        {errors.password && (
          <span className={cn(poppins.className, "text-xs text-[#ffea00]")}>
            {errors.password.message}
          </span>
        )}
      </div>
      <Button
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        className={cn(poppins.className, "w-full bg-primary text-base")}
      >
        Sign in
      </Button>
    </form>
  );
}
