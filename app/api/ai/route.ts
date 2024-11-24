import { NextRequest, NextResponse } from "next/server";
import MarkdownIt from "markdown-it";
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
  GoogleGenerativeAIResponseError,
  GoogleGenerativeAIError,
} from "@google/generative-ai";
import { currentUser } from "@/lib/currentUser";
import { getInformasi } from "@/lib/constants";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  safetySettings: [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
  ],
});

const chat = model.startChat({
  history: [],
  generationConfig: {
    maxOutputTokens: 300,
  },
});
export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();
    const user = await currentUser();
    const prompt = getInformasi(user, text);

    if (!user) return new NextResponse("Unauthorized", { status: 401 });
    if (!text) return new NextResponse("Prompt is required", { status: 400 });

    const result = await chat.sendMessage(prompt);
    const resultText = result.response.text();
    const md = new MarkdownIt();
    const content = md.render(resultText);

    return NextResponse.json({
      status: 200,
      data: content,
      success: true,
    });

    
  } catch (error) {
    if (
      error instanceof GoogleGenerativeAIResponseError ||
      error instanceof GoogleGenerativeAIError
    ) {
      return new NextResponse(error.message, { status: 400 });
    }
    console.log("INTERNAL ERROR", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
