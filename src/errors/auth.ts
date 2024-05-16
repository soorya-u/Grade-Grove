import { CredentialsSignin } from "next-auth";

export class InvalidCredentialError extends CredentialsSignin {
  code = "invalid_credentials";
}

export class UserNotFoundError extends CredentialsSignin {
  code = "no_user_found";
}

export class ExpiredUserError extends CredentialsSignin {
  code = "expired_user";
}

export class UnverifiedUserError extends CredentialsSignin {
  code = "unverified_user";
}

export class UnexpectedError extends CredentialsSignin {
  code = "unexpected_error";
}
