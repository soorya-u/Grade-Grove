import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string(),
  NEXT_PUBLIC_URL: z.string().url(),
  BUN_ENV: z.union([z.literal("development"), z.literal("production")]),
});

const env = envSchema.safeParse({
  DATABASE_URL: process.env.DATABASE_URL,
  NEXT_PUBLIC_URL: process.env.DATABASE_URL,
  BUN_URL: process.env.BUN_ENV,
});

if (!env.success) {
  throw new Error("Environment Error");
}

export default env.data;
