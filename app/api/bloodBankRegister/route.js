import { NextResponse } from "next/server";
import { connectMongoDb } from "../../../lib/mongodb";
import BloodBank from "../../../models/bloodBank"; 
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, phoneNumber, licenseNumber, address, password, acceptTerms } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectMongoDb();

    const newBloodBank = new BloodBank({
      name,
      email,
      phoneNumber,
      licenseNumber,
      address,
      password: hashedPassword,
      acceptTerms,
    });

    await newBloodBank.save();

    return NextResponse.json({ message: "User Registered" }, { status: 201 });
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json({ message: `Error Occurred: ${error.message}` }, { status: 500 });
  }
}
