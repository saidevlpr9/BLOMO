"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Checkbox } from "../../components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AuthBloodBank = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !name ||
      !email ||
      !phoneNumber ||
      !licenseNumber ||
      !address ||
      !password
    ) {
      alert("Please fill out all fields");
      return;
    }

    try {
      const res = await fetch("api/bloodBankRegister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          licenseNumber,
          address,
          password,
        }),
      });

      if (res.ok) {
        setName("");
        setEmail("");
        setPhoneNumber("");
        setLicenseNumber("");
        setAddress("");
        setPassword("");
        setAcceptTerms(false);
        alert("Registration successful!");
      } else {
        console.log("User Registration failed");
      }
    } catch (error) {
      console.log("Error During Registration", error);
    }
  };

  return (
    <>
      <Card className="w-[350px] border-t-0 rounded-t-none">
        <CardHeader>
          <CardTitle>
            Create An Account For{" "}
            <span className="text-[#8A0303]">BloodBank</span>
          </CardTitle>
          <CardDescription>Be a Blomo Hero: Save lives,</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Organization Name</Label>
                <Input
                  id="name"
                  value={name}
                  placeholder="Enter your name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={email} 
                  placeholder="Enter your Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={phoneNumber}
                  placeholder="Enter your phone number"
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="licenseNumber">License Number</Label>
                <Input
                  id="licenseNumber"
                  value={licenseNumber}
                  placeholder="Enter your license number"
                  required
                  onChange={(e) => setLicenseNumber(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="address">Blood Bank Address</Label>
                <Textarea
                  id="address"
                  value={address} 
                  placeholder="Enter your address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Set Your Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password} 
                  placeholder="Enter your password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-2 m-1">
                <Checkbox
                  id="terms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(checked)}
                  required
                />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
            </div>
            <CardFooter className="flex justify-between mt-3">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button type="submit">Register</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default AuthBloodBank;
