"use client";

import { Poppins } from "next/font/google";

import { useForm } from "react-hook-form";
import { signUpSchema, type SignUpType } from "@/schema/signup";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/primitives/button";
import { Input } from "@/components/primitives/input";
import { Label } from "@/components/primitives/label";
import { cn } from "@/utils/cn";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default function SignUpForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
  });

  return (
    <form
      className="grid gap-4"
      onSubmit={handleSubmit((val) => console.log(val))}
    >
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <div className="grid gap-2">
          <Label className={poppins.className} htmlFor="firstName">
            First name
          </Label>
          <Input
            disabled={true || isSubmitting}
            aria-disabled={isSubmitting}
            {...register("firstName")}
            className={cn(
              poppins.className,
              "border-[#ffffff84] bg-[#00000030] focus-visible:border-none focus-visible:ring-offset-0",
            )}
            placeholder="John"
            type="text"
          />
        </div>
        <div className="grid gap-2">
          <Label className={poppins.className} htmlFor="lastName">
            Last name
          </Label>
          <Input
            disabled={true || isSubmitting}
            aria-disabled={isSubmitting}
            {...register("lastName")}
            className={cn(
              poppins.className,
              "border-[#ffffff84] bg-[#00000030] focus-visible:border-none focus-visible:ring-offset-0",
            )}
            placeholder="Doe"
            type="text"
          />
        </div>
        {(errors.firstName || errors.lastName) && (
          <span
            className={cn(
              poppins.className,
              "col-start-1 col-end-3 text-xs text-[#ffea00]",
            )}
          >
            {errors.firstName?.message ?? errors.lastName?.message}
          </span>
        )}
      </div>
      <div className="grid gap-2">
        <Label className={poppins.className} htmlFor="username">
          Username
        </Label>
        <Input
          disabled={true || isSubmitting}
          aria-disabled={isSubmitting}
          {...register("email")}
          className={cn(
            poppins.className,
            "border-[#ffffff84] bg-[#00000030] focus-visible:border-none focus-visible:ring-offset-0",
          )}
          placeholder="johndoe@example.com"
          type="email"
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
          disabled={true || isSubmitting}
          aria-disabled={isSubmitting}
          placeholder="*******"
          {...register("password")}
          className={cn(
            poppins.className,
            "border-[#ffffff84] bg-[#00000030] focus-visible:border-none focus-visible:ring-offset-0",
          )}
          type="password"
        />
        {errors.password && (
          <span className={cn(poppins.className, "text-xs text-[#ffea00]")}>
            {errors.password.message}
          </span>
        )}
      </div>
      <Button
        disabled={true || isSubmitting}
        aria-disabled={isSubmitting}
        type="submit"
        className={cn(poppins.className, "w-full")}
      >
        Create an account
      </Button>
    </form>
  );
}
