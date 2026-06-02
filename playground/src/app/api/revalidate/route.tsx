import { revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");

  if (tag) {
    // This will trigger the revalidation of the cache immediately
    // instead of waiting for the next time the tag is visited
    revalidateTag(tag, { expire: 0 });
    return Response.json({ revalidated: true, now: Date.now() });
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: "Missing tag to revalidate",
  });
}
