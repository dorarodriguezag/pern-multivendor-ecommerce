console.log("🧬 [PRISMA] prisma module loaded");

const { PrismaClient } = require("@prisma/client");
const { PrismaNeon } = require("@prisma/adapter-neon");
const { neonConfig } = require("@neondatabase/serverless");
const WebSocket = require("ws");

console.log("🧬 [PRISMA] dependencies loaded");

// Configure Neon
neonConfig.webSocketConstructor = WebSocket;
neonConfig.poolQueryViaFetch = true;

// Lazy initialization
let prisma = null;

function getPrisma() {
  console.log("🧬 [PRISMA] getPrisma() called");

  if (!prisma) {
    console.log("🧬 [PRISMA] creating PrismaClient");
    const adapter = new PrismaNeon({
      connectionString: process.env.DATABASE_URL,
    });
    prisma = new PrismaClient({ adapter });
    console.log("🧬 [PRISMA] PrismaClient created");
  }
  return prisma;
}

module.exports = { getPrisma };
