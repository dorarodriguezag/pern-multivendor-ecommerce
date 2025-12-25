console.log("🟢 [FUNCTIONS] functions.ts loaded");

import { inngest } from "./client";
import { getPrisma } from "../lib/prisma";

console.log("🟢 [FUNCTIONS] imports resolved");

// Inngest Function to save user data to a database
export const syncUserCreation = inngest.createFunction(
  {id: "sync-user-create" },
  { event: "clerk/user.created"},
  async ({ event }) => {
    console.log("🟢 [FUNCTION RUN] syncUserCreation triggered")
    const prisma = getPrisma();
    console.log("🟢 [PRISMA] client obtained");
    const {data} = event
    await prisma.user.create({
        data: {
            id: data.id,
            email: data.email_addresses[0].email_address,
            name: `${data.first_name} ${data.last_name}`,
            image: data.image_url,
        }
    })
  }
);


// Inngest Function to update user data in the database
export const syncUserUpdation = inngest.createFunction(
  { id: "sync-user-update" },
  { event: "clerk/user.updated"},
  async ({ event }) => {
    const prisma = getPrisma();
    const {data} = event
    await prisma.user.update({
        where: { id: data.id },
        data: {
            email: data.email_addresses[0].email_address,
            name: `${data.first_name} ${data.last_name}`,
            image: data.image_url,
        }
    })
  }
);


// Inngest Function to delete user data from the database
export const syncUserDeletion = inngest.createFunction(
  { id: "sync-user-delete" },
  { event: "clerk/user.deleted"},
  async ({ event }) => {
    const prisma = getPrisma();
    const {data} = event
    await prisma.user.delete({
        where: { id: data.id }
    })
  }
);