import { z } from "zod";

const envSchema = z.object({
  POSTGRES_DATABASE_URL: z.string(),
  NEXT_PUBLIC_URL: z.string().url(),
  BUN_ENV: z.union([z.literal("development"), z.literal("production")]),
  AUTH_GOOGLE_ID: z.string(),
  AUTH_GOOGLE_SECRET: z.string(),
  AUTH_GITHUB_ID: z.string(),
  AUTH_GITHUB_SECRET: z.string(),
  AUTH_SECRET: z.string(),
});

const env = envSchema.safeParse({
  POSTGRES_DATABASE_URL: process.env.POSTGRES_DATABASE_URL,
  NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  BUN_ENV: process.env.BUN_ENV,
  AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
  AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
  AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
  AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
  AUTH_SECRET: process.env.AUTH_SECRET,
});

if (!env.success) {
  console.error("Validation Errors:", env.error.errors);
  throw new Error("Environment Error");
}

export default env.data;
