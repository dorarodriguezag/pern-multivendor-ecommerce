// lib/prisma.js
console.log("🧬 [PRISMA] prisma module loaded");

const { PrismaClient } = require("@prisma/client");

console.log("🧬 [PRISMA] PrismaClient loaded");

// Lazy initialization
let prisma = null;

function getPrisma() {
  console.log("🧬 [PRISMA] getPrisma() called");

  if (!prisma) {
    console.log("🧬 [PRISMA] creating PrismaClient (Node runtime)");
    prisma = new PrismaClient();
    console.log("🧬 [PRISMA] PrismaClient created");
  }

  return prisma;
}

module.exports = { getPrisma };
