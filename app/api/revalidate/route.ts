import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.headers.get("Authorization");
  if (token !== process.env.API_TOKEN) {
    return Response.json({ error: "Token inválido" });
  }

  const path = request.nextUrl.searchParams.get("path");

  if (path) {
    revalidatePath(path);
    return Response.json({ revalidated: true, now: Date.now() });
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: "Missing path to revalidate",
  });
}
