import { withAuth } from "next-auth/middleware";
import env from "@/schema/env";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    if (
      req.nextUrl.pathname.includes("/admin") &&
      req.nextauth.token?.role !== "Admin"
    ) {
      return NextResponse.json({ error: "Restricted" }, { status: 403 });
    }
  },
  {
    secret: env.JWT_SECRET,
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  // TODO: Add /sem and /usn
  matcher: ["/admin:path*", "/first-sem"],
};
