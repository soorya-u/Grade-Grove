import { z } from "zod";
import { signUpSchema } from "./signup";

export const loginSchema = signUpSchema.omit({
  firstName: true,
  lastName: true,
});

export type LoginType = z.infer<typeof loginSchema>;
