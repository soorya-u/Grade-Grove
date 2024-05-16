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
import { LucideAlertTriangle, Info } from "lucide-react";

const poppins = Poppins({ weight: "600", subsets: ["latin"] });

const variantOptions = {
  default: { className: "", icon: <></> },
  success: { className: "text-[#28fc03]", icon: <Info color="#28fc03" /> },
  destructive: {
    className: "text-yellow-400",
    icon: <LucideAlertTriangle color="#FACC15" />,
  },
};

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        variant,
        ...props
      }) {
        const Icon = variantOptions[variant ?? "default"].icon;
        return (
          <Toast key={id} {...props} className="">
            <div className="grid gap-1">
              {title && (
                <ToastTitle
                  className={cn(
                    poppins.className,
                    "flex gap-x-3 text-xl",
                    variantOptions[variant ?? "default"].className,
                  )}
                >
                  {Icon}
                  {title}
                </ToastTitle>
              )}
              {description && (
                <ToastDescription
                  className={cn(
                    poppins.className,
                    "text-sm brightness-95",
                    variantOptions[variant ?? "default"].className,
                  )}
                >
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
