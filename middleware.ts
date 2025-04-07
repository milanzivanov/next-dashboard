// export { auth as middleware } from "@/auth/auth";
import { auth } from "@/auth/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isAuthenticated = !!req.auth;
  const { pathname } = req.nextUrl;

  // If user is not logged in and trying to access a protected route, redirect to login
  if (!isAuthenticated && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If user is logged in and tries to access login page, redirect to dashboard
  if (isAuthenticated && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next(); // Continue normally
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};
