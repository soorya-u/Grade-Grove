import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

const env = createEnv({
  clientPrefix: "NEXT_PUBLIC_",
  client: {
    NEXT_PUBLIC_URL: z.string().url(),
  },
  server: {
    POSTGRES_DATABASE_URL: z.string(),
    BUN_ENV: z.union([z.literal("development"), z.literal("production")]),
    AUTH_GOOGLE_ID: z.string(),
    AUTH_GOOGLE_SECRET: z.string(),
    AUTH_GITHUB_ID: z.string(),
    AUTH_GITHUB_SECRET: z.string(),
    AUTH_SECRET: z.string(),
  },
  runtimeEnv: process.env,
});

export default env;
