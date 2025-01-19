"use client";

import { Poppins } from "next/font/google";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

import { useForm } from "react-hook-form";
import { loginSchema, type LoginType } from "@/schema/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { LucideLoader2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { cn } from "@/utils/cn";
import { signInCredentials } from "@/server/auth";
import { useError } from "@/hooks/use-error";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function LoginForm() {
  const searchParams = useSearchParams();
  useError("code");
  const {
    handleSubmit,
    getValues,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  const callbackUrl = searchParams.get("callbackUrl") ?? "/";
  return (
    <form
      className="grid gap-4"
      action={async () =>
        await signInCredentials({ ...getValues(), callbackUrl })
      }
      onSubmit={handleSubmit(
        async (val) =>
          await signIn("credentials", {
            ...val,
            callbackUrl,
            redirect: true,
          }),
      )}
    >
      <div className="grid gap-2">
        <Label className={poppins.className} htmlFor="email">
          Email
        </Label>
        <Input
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
          {...register("email")}
          placeholder="johndoe@example.com"
          className={cn(
            poppins.className,
            "border-[#ffffff84] bg-[#00000030] focus-visible:border-none focus-visible:ring-offset-0",
          )}
        />
        {errors.email && (
          <span className={cn(poppins.className, "text-xs text-yellow-400")}>
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
          <span className={cn(poppins.className, "text-xs text-yellow-400")}>
            {errors.password.message}
          </span>
        )}
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        className={cn(poppins.className, "w-full bg-primary text-base")}
      >
        {isSubmitting ? (
          <LucideLoader2 color="black" className="size-6 animate-spin" />
        ) : (
          "Sign in"
        )}
      </Button>
    </form>
  );
}
