import { useEffect } from "react";
import {
  useSearchParams,
  usePathname,
  useRouter,
  redirect,
} from "next/navigation";
import { useToast } from "@/components/primitives/use-toast";
import getErrorMessage from "@/utils/getErrorMessages";

export const useError = (param: string) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const matcher = searchParams.get(param);
  const { toast } = useToast();

  useEffect(() => {
    if (!matcher) return;
    const err = getErrorMessage(matcher);
    if (!err) return;
    router.push(`${err.url}?${searchParams.toString()}`);
    toast({
      title: err.title,
      description: err.description,
      variant: err.variant,
    });
  }, [searchParams]);
};
