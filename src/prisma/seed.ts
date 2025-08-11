import env from "@/schema/env"

const allowProd = process.argv.includes("--voluntary");

if (env.BUN_ENV === "production" && !allowProd) {
  console.warn("❌ Seed script cannot be run in production.");
  process.exit(0)
}

(async () => await (await import("./runner")).run())()
