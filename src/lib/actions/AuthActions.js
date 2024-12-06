"use server";
import { SECRET_KEY } from '../utils';
import { SignJWT } from 'jose';
import { cookies } from 'next/headers'; // Built-in cookie management
import UserSchema from "@/models/User"

const secretKey = new TextEncoder().encode(SECRET_KEY);

export async function login(data) {
    const user = await UserSchema.findOne({ username: data.username, password: data.password });
    if (user) {
        // Generate JWT using jose
        const token = await new SignJWT({ username: user.username })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('1d')
            .sign(secretKey);

        // Set HTTP-only cookie
        cookies().set('authToken', token, {
            httpOnly: true,
            secure: true,
            path: '/',
            maxAge: 24 * 60 * 60, // 1 day
            sameSite: 'lax',
        });

        return { isValid: true };
    } else {
        return { isValid: false };
    }
}

export async function logout() {
    // Clear the cookie by setting it with an expired date
    cookies().set('authToken', '', {
        httpOnly: true,
        secure: true,
        path: '/',
        expires: new Date(0), // Expired date
    });
}