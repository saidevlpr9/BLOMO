import { NextResponse } from "next/server";
import { connectMongoDb } from "../../../lib/mongodb";
import Donor from "../../../models/donor";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, phone, bloodGroup, address, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectMongoDb();

    const newDonor = new Donor({
      name,
      email,
      phone, 
      bloodGroup, 
      address,
      password: hashedPassword,
      // aadharCard,
      // acceptTerms,
    });

    await newDonor.save();

    return NextResponse.json({ message: "Donor Registered" }, { status: 201 });
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json({ message: `Error Occurred: ${error.message}` }, { status: 500 });
  }
}
