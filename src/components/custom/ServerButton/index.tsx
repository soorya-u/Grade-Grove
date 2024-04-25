import { Button } from "@/components/primitives/button";

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
  action: () => Promise<void>;
  className: string;
};

export default function ServerButton(props: ServerPropsButton) {
  return (
    <form action={async () => await props.action()}>
      <Button
        type="submit"
        className={props.className}
        variant={props.variant || "default"}
      >
        {props.children}
      </Button>
    </form>
  );
}
