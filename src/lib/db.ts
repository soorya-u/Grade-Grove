import { PrismaClient } from "@prisma/client";
import { withAccelerate } from '@prisma/extension-accelerate'
import env from "@/schema/env"

const prismaClientSingleton = () => {
  const prisma = new PrismaClient()
  if (env.DATABASE_URL.startsWith("prisma"))
    prisma.$extends(withAccelerate())

  return prisma;
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
