import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

const env = createEnv({
  clientPrefix: "NEXT_PUBLIC_",
  client: {
    NEXT_PUBLIC_URL: z.string().min(1).url(),
  },
  server: {
    POSTGRES_URL: z.string().min(1),
    BUN_ENV: z.union([z.literal("development"), z.literal("production")]),
    AUTH_GOOGLE_ID: z.string().min(1),
    AUTH_GOOGLE_SECRET: z.string().min(1),
    AUTH_GITHUB_ID: z.string().min(1),
    AUTH_GITHUB_SECRET: z.string().min(1),
    AUTH_SECRET: z.string().min(1),
    RESEND_KEY: z.string().min(1),
  },
  runtimeEnv: process.env,
});

export default env;
