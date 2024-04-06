import { z } from "zod";

const envSchema = z.object({
  POSTGRES_DATABASE_URL: z.string(),
  NEXT_PUBLIC_URL: z.string().url(),
  BUN_ENV: z.union([z.literal("development"), z.literal("production")]),
});

const env = envSchema.safeParse({
  POSTGRES_DATABASE_URL: process.env.POSTGRES_DATABASE_URL,
  NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  BUN_ENV: process.env.BUN_ENV,
});

if (!env.success) {
  console.error("Validation Errors:", env.error.errors);
  throw new Error("Environment Error");
}

const exportedEnv = env.data;

export default exportedEnv;
