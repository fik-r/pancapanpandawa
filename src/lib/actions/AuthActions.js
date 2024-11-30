"use server"
import 'server-only'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import UserSchema from "@/models/User"
import { encrypt, decrypt } from '@/lib/actions/SessionActions'

export async function createSession(username) {
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000)
    const session = await encrypt({ username, expiresAt })
    const cookieStore = await cookies()

    cookieStore.set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    })

    NextResponse.redirect("/cms")
}

export async function login(data) {
    const user = await UserSchema.findOne({ username: data.username, password: data.password })
    if (user) {
        await createSession(data.username)
        return true;
    } else {
        return false
    }

}

export async function deleteSession() {
    const cookieStore = await cookies()
    cookieStore.delete('session')
}