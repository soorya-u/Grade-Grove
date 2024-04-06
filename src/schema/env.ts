import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string(),
});

const env = envSchema.safeParse({
  DATABASE_URL: process.env.DATABASE_URL!,
});

if (!env.success) {
  throw new Error("Environment Error");
}

export default env;
