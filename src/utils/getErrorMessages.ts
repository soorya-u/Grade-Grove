import { ResponseType } from "@/types/api";

type ReturnType =
  | (ResponseType & {
      variant: "success" | "destructive";
      url?: string;
    })
  | null;

export default function getErrorMessage(err: string): ReturnType {
  switch (err) {
    case "invalid_credentials":
      return {
        title: "Invalid Credentials",
        description: "Entered Username or Password is Incorrect.",
        variant: "destructive",
        url: "/auth/login",
      };

    case "no_user_found":
      return {
        title: "No Account Found",
        description: "Entered Email has not been Registered. Try Signing Up",
        variant: "destructive",
        url: "/auth/signup",
      };

    case "expired_user":
      return {
        title: "Registration Successfull",
        description: "Please Check your Inbox and verify your Email",
        variant: "success",
      };

    case "unverified_user":
      return {
        title: "Email has already been Registered",
        description:
          "Entered Email has already been Registered. Please verify your Email.",
        variant: "success",
      };

    case "unexpected_error":
      return {
        title: "Unable to create User",
        description: "Authentication Failed due to Unknown Reason. Try Later",
        variant: "destructive",
      };

    case "OAuthAccountNotLinked":
      return {
        title: "Email Already Exists",
        description:
          "The Email you are using to Login is already in use. Try Using Different Provider.",
        variant: "destructive",
      };
    default:
      return null;
  }
}
