import { cn } from "@/utils/shadcn"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-[#0000001f]", className)}
      {...props}
    />
  )
}

export { Skeleton }
