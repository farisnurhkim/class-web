'use server';

import { signIn, signOut } from "@/auth"

export async function signin() {
    await signIn("google");
}

export async function signout() {
    await signOut();
}