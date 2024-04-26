import { PrismaClient } from "@prisma/client";
// import env from "@/schema/env";
// import { Pool } from "@neondatabase/serverless";
// import { PrismaNeon } from "@prisma/adapter-neon";

const prismaClientSingleton = () => {
  // const neon = new Pool({ connectionString: env.POSTGRES_DATABASE_URL });
  // const adapter = new PrismaNeon(neon);
  return new PrismaClient({
    // adapter
  });
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
