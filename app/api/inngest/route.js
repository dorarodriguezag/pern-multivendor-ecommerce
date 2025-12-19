import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import { syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/inngest/functions";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";


// Create an API that serves zero functions
export const { GET, POST} = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,    /* your functions will be passed here later! */
  ],
});