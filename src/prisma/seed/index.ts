import env from "@/schema/env"
import { Seeder } from "./runner"

const allowProd = process.argv.includes("--voluntary");

if (env.BUN_ENV === "production" && !allowProd) {
  console.warn("❌ Seed script cannot be run in production.");
  process.exit(0)
}

(async () => await Seeder.exec())()
