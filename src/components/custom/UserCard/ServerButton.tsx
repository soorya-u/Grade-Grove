import { Button } from "@/components/primitives/button";
import { cn } from "@/utils/cn";

type ServerPropsButton = {
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  children: React.ReactNode;
  action: (formData: FormData) => Promise<void>;
  className: string;
};

export default function ServerButton(props: ServerPropsButton) {
  return (
    <form className="flex flex-col" action={props.action}>
      <Button
        type="submit"
        className={cn(props.className, "justify-start gap-2")}
        variant={props.variant || "default"}
      >
        {props.children}
      </Button>
    </form>
  );
}
