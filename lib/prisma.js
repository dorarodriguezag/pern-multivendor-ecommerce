const { PrismaClient } = require("@prisma/client");
const { PrismaNeon } = require("@prisma/adapter-neon");
const { neonConfig } = require("@neondatabase/serverless");
const WebSocket = require("ws");

// Configure Neon ONCE at module scope
neonConfig.webSocketConstructor = WebSocket;
neonConfig.poolQueryViaFetch = true;

// Global cache (required for serverless)
const globalForPrisma = globalThis;

if (!globalForPrisma.prisma) {
  const adapter = new PrismaNeon({
    connectionString: process.env.DATABASE_URL,
  });

  globalForPrisma.prisma = new PrismaClient({ adapter });
}

const prisma = globalForPrisma.prisma;

module.exports = { prisma };
