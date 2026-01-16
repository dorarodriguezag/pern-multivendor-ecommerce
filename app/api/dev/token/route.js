import { getAuth } from "@clerk/nextjs/server";

export async function GET(req) { // receive the request
  const { getToken } = getAuth(req);
  const token = await getToken(); // pass the request!
  return new Response(JSON.stringify({ token }), {
    headers: { "Content-Type": "application/json" },
  });
}


