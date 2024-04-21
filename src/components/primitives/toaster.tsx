"use client";

import { Poppins } from "next/font/google";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/primitives/toast";
import { useToast } from "@/components/primitives/use-toast";
import { cn } from "@/utils/cn";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} className="">
            <div className="grid gap-1">
              {title && (
                <ToastTitle className={cn(poppins.className, "text-xl")}>
                  {title}
                </ToastTitle>
              )}
              {description && (
                <ToastDescription className={cn(poppins.className, "text-sm")}>
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
