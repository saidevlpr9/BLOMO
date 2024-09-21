import { NextResponse } from "next/server";
import { connectMongoDb } from "../../../lib/mongodb";
import Hospital from "../../../models/hospital";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, phone, registrationNumber, address, password} = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectMongoDb();

    const newHospital = new Hospital({
      name,
      email,
      phone,
      registrationNumber,
      address,
      password: hashedPassword
    });

    await newHospital.save();

    return NextResponse.json({ message: "Hospital Registered" }, { status: 201 });
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json({ message: `Error Occurred: ${error.message}` }, { status: 500 });
  }
}
