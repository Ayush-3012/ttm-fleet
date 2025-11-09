import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  console.log("Lead:", Object.fromEntries(data));
  return NextResponse.json({ ok: true });
}
