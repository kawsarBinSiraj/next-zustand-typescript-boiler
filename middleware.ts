// middleware.ts
import { NextResponse } from "next/server";

export function middleware(request: any) {
    const { pathname } = request.nextUrl;
    const isAuth = request.cookies.get("access_token")?.value ?? false;
    const isRedirect = ["/auth/login", "/auth/signup"].some((is) => pathname.startsWith(is));
    const isRestricted = ["/dashboard"].some((is) => pathname.startsWith(is));

    // if user already authenticate redirect to '/dashboard'
    if (isRedirect && isAuth) return NextResponse.redirect(new URL("/dashboard", request.url));
    // else redirect to '/login'
    else if (isRestricted && !isAuth) return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|favicon.ico).*)",
    ],
};
