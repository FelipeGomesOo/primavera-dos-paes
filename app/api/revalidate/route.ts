import { revalidatePath, revalidateTag } from "next/cache";
import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const headersList = headers();
  const authorization = headersList.get("Authorization");
  const token = (authorization || "").split("Bearer ")[1];

  if (token !== process.env.API_TOKEN) {
    return Response.json({ error: "Token inválido" });
  }
  const path = request.nextUrl.searchParams.get("path");
  const type = request.nextUrl.searchParams.get("type");
  switch (type) {
    case "all": {
      revalidatePath("/", "layout");
      revalidatePath("/produtos", "layout");
      revalidatePath("/produtos/[category]", "layout");
      revalidatePath("/produtos/[slug]", "layout");
      return Response.json({
        revalidated: true,
        now: Date.now(),
        message: "All site revalidated",
      });
    }
    case "product": {
      revalidateTag("tagGetProducts");
      revalidateTag("tagGetProductsByCategory");
      revalidateTag("tagGetFeaturedProducts");
      revalidateTag("tagGetProductCategories");
      path && revalidatePath(path);
      return Response.json({
        revalidated: true,
        now: Date.now(),
        message: "Product revalidated",
        path: path,
      });
    }
    case "productCategory": {
      revalidateTag("tagGetProductsByCategory");
      revalidateTag("tagGetProductCategories");
      path && revalidatePath(path);
      return Response.json({
        revalidated: true,
        now: Date.now(),
        message: "Product category revalidated",
      });
    }
    case "store": {
      revalidateTag("tagGetStores");
      return Response.json({
        revalidated: true,
        now: Date.now(),
        message: "Stores revalidated",
      });
    }
    case "faq": {
      revalidateTag("tagGETFAQ");
      return Response.json({
        revalidated: true,
        now: Date.now(),
        message: "FAQ revalidated",
      });
    }
    case "home": {
      revalidateTag("tagGetHomePage");
      return Response.json({
        revalidated: true,
        now: Date.now(),
        message: "Home revalidated",
      });
    }
    case "products": {
      revalidateTag("tagGetProductsPage");
      return Response.json({
        revalidated: true,
        now: Date.now(),
        message: "Products page revalidated",
      });
    }
    default: {
      return Response.json({
        revalidated: false,
        now: Date.now(),
        message: "Could not revalidate",
        path: path,
        type: type,
      });
    }
  }
}
