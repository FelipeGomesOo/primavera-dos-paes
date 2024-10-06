// pages/api/middleware.ts
import { NextRequest, NextResponse } from "next/server";
import redirects from "@/redirects.json"; // Ajuste o caminho conforme necessário

const redirectsss = {
  "/portfolio_category/todos/": { destination: "/produtos/", permanent: true },
  "/portfolio_category/paes/": {
    destination: "/produtos/paes/",
    permanent: true,
  },
  // Adicione mais regras de redirecionamento conforme necessário
};
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const redirectData = redirectsss[pathname as keyof typeof redirectsss];

  if (redirectData && typeof redirectData === "string") {
    const { destination, permanent } = redirectData;
    return NextResponse.redirect(destination, permanent ? 308 : 307);
  }

  return NextResponse.next();
}
