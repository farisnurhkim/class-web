import { auth } from "@/auth";

export async function currentUser() {
    const session = await auth();

    if (!session) return null;

    return session.user; 
}

// export type User = {
//     name: string;
//     email: string;
//     image: string;
// };
