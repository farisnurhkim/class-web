import { currentUser } from "@/lib/currentUser";
import { database } from "@/lib/firebaseSDK";
import { child, push, ref } from "firebase/database";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
try {
    const { id, username, email, content, reply, image, isDeleted } = await req.json();
    const user = await currentUser();
  
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
  
    if (!content) {
      return new NextResponse("Content is required", { status: 400 });
    }

  
    const message = {
      id,  
      username,
      email,
      image,
      content,
      reply,
      isDeleted,
      createdAt: new Date().toISOString(),
    };
  
    const rootRef = ref(database);
    const dbPath = child(rootRef, "chat");
  
    const response = await push(dbPath, message);

    return NextResponse.json({status: 200, response});
  
} catch (error) {
    console.log(error)
    return new NextResponse("Internal Server Error", { status: 500 });
}
 

}
