import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const AUTH_ROUTES = ["/login", "/register"];
// const PUBLIC_ROUTES = ["/"];

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    const pathName = request.nextUrl.pathname;

    const token = request.cookies.get("aToken")?.value;
    const isAuthRoutes = AUTH_ROUTES.includes(pathName)

    if(token && isAuthRoutes) {
        return NextResponse.redirect(new URL("/", request.url))
    }

    if(!token && !isAuthRoutes) {
        return NextResponse.redirect(new URL("/login", request.url))
    }

    return NextResponse.next()
}
 
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|.*\\.png$).*)'
  ],
}


