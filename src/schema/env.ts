import { z } from "zod";

const envSchema = z.object({
  POSTGRES_DATABASE_URL: z.string(),
  NEXT_PUBLIC_URL: z.string().url(),
  BUN_ENV: z.union([z.literal("development"), z.literal("production")]),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  // GITHUB_CLIENT_ID: z.string(),
  // GITHUB_CLIENT_SECRET: z.string(),
  JWT_SECRET: z.string(),
});

const env = envSchema.safeParse({
  POSTGRES_DATABASE_URL: process.env.POSTGRES_DATABASE_URL,
  NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  BUN_ENV: process.env.BUN_ENV,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  // GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  // GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  JWT_SECRET: process.env.JWT_SECRET,
});

if (!env.success) {
  console.error("Validation Errors:", env.error.errors);
  throw new Error("Environment Error");
}

const exportedEnv = env.data;

export default exportedEnv;
