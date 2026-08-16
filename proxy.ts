import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken"

const AUTH_ROUTES = ["/login", "/register"];

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const accessToken = request.cookies.get("aToken")?.value;
  const refreshToken = request.cookies.get("rToken")?.value;
  const isAuthRoute = AUTH_ROUTES.includes(pathname);

  // login/register protection
  if (accessToken && isAuthRoute) {
    return NextResponse.redirect(
      new URL("/", request.url)
    );
  }

  // no refresh token = logout
  if (!refreshToken) {
    if (!isAuthRoute) {
      return NextResponse.redirect(
        new URL("/login", request.url)
      );
    }

    return NextResponse.next();
  }

  try {
    // access token verify
    jwt.verify(
      accessToken as string,
      process.env.JWT_ACCESS_SECRET as string
    );

    return NextResponse.next();
  } catch {
    // access token expired

    try {
      // refresh token verify
      jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_SECRET as string
      );

      const refreshResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/refresh-token`,
        {
          method: "POST",
          headers: {
            Authorization: refreshToken,
          },
        }
      );

      const result = await refreshResponse.json();

      if (!refreshResponse.ok || !result.success) {
        const response = NextResponse.redirect(
            new URL("/login", request.url)
          );

        response.cookies.delete("aToken");
        response.cookies.delete("rToken");

        return response;
      }

      const response = NextResponse.next();

      response.cookies.set("aToken", result.data.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      }
      );

      return response;
    } catch {
      // refresh token expired
      const response = NextResponse.redirect(
        new URL("/login", request.url)
        );

      response.cookies.delete("aToken");
      response.cookies.delete("rToken");

      return response;
    }
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
  ],
};