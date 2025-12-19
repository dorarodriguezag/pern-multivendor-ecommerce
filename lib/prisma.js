import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";

/**
 * Required for Node.js (non-edge) environments
 */
neonConfig.webSocketConstructor = ws;

neonConfig.poolQueryViaFetch = true;


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaNeon(pool);

/**
 * Prevent multiple Prisma instances in dev (Next.js hot reload)
 */
const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
