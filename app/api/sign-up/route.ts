import { NextResponse, NextRequest } from "next/server";
import { connect } from "@/db/db";
import { userSchema } from "@/schema/schema";
import mongoose from "mongoose";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  await connect();

  const User = mongoose.models.user || mongoose.model("user", userSchema);

  const user = new User(body);
  user.save();

  console.log("User created");
  return NextResponse.json({ message: "Ticket Generated" }, { status: 200 });
}
