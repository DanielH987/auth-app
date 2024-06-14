import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import { 
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    authRoutes,
    publicRoutes,
} from "@/routes";
 
const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
        return;
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return;
    }

    if (!isLoggedIn && !isPublicRoute) {
        let callback = nextUrl.pathname;
        if (nextUrl.search) {
            callback += nextUrl.search;
        }

        const encodedCallback = encodeURIComponent(callback);

        return Response.redirect(new URL(
            `/auth/login?callbackUrl=${encodedCallback}`, 
            nextUrl
        ));
    }

    return;
})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}