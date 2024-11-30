import { NextResponse } from 'next/server';
import { decrypt } from './lib/actions/SessionActions';

const protectedRoutes = /^\/cms/;
const publicRoutes = ['/about', '/contact', '/'];

export async function middleware(req) {
    console.log('Middleware running');

    // Check current path
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.test(path);
    const isPublicRoute = publicRoutes.includes(path);

    // Get session cookie
    const cookie = req.cookies.get('session')?.value;

    // Decrypt or validate session (replace with your logic)
    const session = cookie ? await decrypt(cookie) : null;

    // Redirect unauthenticated users on protected routes
    if (isProtectedRoute && !session?.username) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    // Redirect authenticated users from public routes
    if (isPublicRoute && session?.username) {
        return NextResponse.redirect(new URL('/cms', req.url));
    }

    return NextResponse.next();
}


// Configure middleware matcher
export const config = {
    matcher: ['/cms/:path*'], // Match `/cms` and all its sub-paths
};