import { currentUser } from "@/lib/currentUser";
import { database } from "@/lib/firebaseSDK";
import { child, get, ref, update } from "firebase/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { id } = await req.json();
        const user = await currentUser();

        if (!user) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!id) {
            return new NextResponse("ID is required", { status: 400 });
        }

        const rootRef = ref(database);
        const dbPath = child(rootRef, "chat");
        const snapshoot = await get(dbPath);

        const data = snapshoot.val();
        const keyToDelete = Object.keys(data).find(key => data[key].id === id);

        if (!keyToDelete) {
            return new NextResponse("Chat not found", { status: 404 });
        }

        const itemRef = child(dbPath, keyToDelete);
        const value = {
            content: "Message has been deleted",
            isDeleted: true
        }
        await update(itemRef, value);

        return NextResponse.json({ status: 200, message: "Message deleted successfully" });

    } catch (error) {
        console.log(error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}