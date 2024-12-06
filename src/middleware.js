import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { SECRET_KEY } from './lib/utils';

export async function middleware(request) {
    const token = request.cookies.get('authToken')?.value;

    // Redirect to login if token doesn't exist
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
        // Verify token
        const secret = new TextEncoder().encode(SECRET_KEY);
        await jwtVerify(token, secret);
        return NextResponse.next(); // Allow access
    } catch (err) {
        console.log(err)
        // Token is invalid or expired; redirect to login
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

// Middleware matcher to protect specific routes
export const config = {
    matcher: ['/cms/:path*'], // Protect `/cms` and its sub-paths
};