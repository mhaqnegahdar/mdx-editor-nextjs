import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const filePath = path.join(process.cwd(), "content.mdx");

  const data = fs.readFileSync(filePath, "utf-8");

  return NextResponse.json({ content: data });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { content } = body;

  const filePath = path.join(process.cwd(), "content.mdx");
  console.log(filePath)
  fs.writeFileSync(filePath, content, "utf-8");

  return NextResponse.json({ status: "ok" });
}
