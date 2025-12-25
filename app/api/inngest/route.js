export const runtime = "nodejs";

console.log("🔥 [ROUTE] /api/inngest route file loaded");

import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import { syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/inngest/functions";

console.log("🔥 [ROUTE] imports resolved");

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,    /* your functions will be passed here later! */
  ],
});

console.log("🔥 [ROUTE] serve() executed");
