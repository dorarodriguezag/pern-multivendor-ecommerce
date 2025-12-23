const { PrismaClient } = require("@prisma/client");
const { PrismaNeon } = require("@prisma/adapter-neon");
const { neonConfig } = require("@neondatabase/serverless");
const WebSocket = require("ws");

// Configure Neon
neonConfig.webSocketConstructor = WebSocket;
neonConfig.poolQueryViaFetch = true;

// Lazy initialization
let prisma = null;

function getPrisma() {
  if (!prisma) {
    const adapter = new PrismaNeon({
      connectionString: process.env.DATABASE_URL,
    });
    prisma = new PrismaClient({ adapter });
  }
  return prisma;
}

module.exports = { getPrisma };
