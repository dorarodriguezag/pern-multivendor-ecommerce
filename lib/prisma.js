// lib/prisma.js
const { PrismaClient } = require("@prisma/client");

// Lazy initialization
let prisma = null;

function getPrisma() {

  if (!prisma) {
    prisma = new PrismaClient();
  }

  return prisma;
}

module.exports = { getPrisma };
