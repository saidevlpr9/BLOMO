"use client";
import * as React from "react";
import { useState } from "react";
import AuthHospitals from "../myCustomComponents/authHospital";
import AuthBloodBank from "../myCustomComponents/authBloodBank";
import AuthDonor from "../myCustomComponents/authDonor";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "../../components/ui/badge";

export default function LoginPage() {
  const [type, setType] = useState("Hospital");
  const handleSelection = (value:string) => {
    if (value === "Hospital") {
      setType("Hospital");
    } else if (value === "BloodBank") {
      setType("BloodBank");
    } else {
      setType("Donor");
    }
  };



  return (
    <div className="flex justify-center items-center text-black mb-20 bg-white ">
      <div>
        <div className="flex flex-col space-y-1.5 border-b-0 rounded-b-none ">
          <Label
            htmlFor="type"
            className="text-2xl"
            style={{ fontFamily: "DosisMedium" }}
          >

          </Label>
          <div className="text-black">
          <Select

            required
            onValueChange={(value) => handleSelection(value)}>
            
            <SelectTrigger id="type" className="border-b-0 text-black  rounded-b-none">
              <SelectValue placeholder="Hospital" />
            </SelectTrigger>
            <SelectContent position="popper" className="text-black">
              <SelectItem value="Hospital" className="text-black">Hospital</SelectItem>
              <SelectItem value="Donor" className="text-black">Donor</SelectItem>
              <SelectItem value="BloodBank" className="text-black">BloodBank</SelectItem>
            </SelectContent>
          </Select>
          </div>
        </div>

        {/* Conditional rendering based on user type */}
        {type === "Hospital" && <AuthHospitals />}
        {type === "BloodBank" && <AuthBloodBank />}
        {type === "Donor" && <AuthDonor/>}
      </div>
    </div>
  );
}
