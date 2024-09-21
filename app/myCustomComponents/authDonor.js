"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AuthDonor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !name ||
      !email ||
      !phone ||
      !bloodGroup ||
      !address ||
      !password ||
      !acceptTerms
    ) {
      alert("Please fill out all fields and accept terms.");
      return;
    }

    try {
      const res = await fetch("api/donorRegister", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          bloodGroup,
          address,
          password,
        }),
      });

      if (res.ok) {
        setName("");
        setEmail("");
        setPhone("");
        setBloodGroup("");
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
    <Card className="w-[350px] border-t-0 rounded-t-none">
      <CardHeader>
        <CardTitle>
          Create An Account For <span className="text-[#8A0303]">Donor</span>
        </CardTitle>
        <CardDescription>Be a Blomo Hero: Save lives</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                placeholder="Enter your phone number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="bloodGroup">Select Your Blood Group</Label>
              <Select required onValueChange={(value) => setBloodGroup(value)}>
                <SelectTrigger id="bloodGroup" className="text-black">
                  <SelectValue placeholder="Select Blood Group" />
                </SelectTrigger>
                <SelectContent className="text-black">
                  <SelectItem value="A+">A+</SelectItem>
                  <SelectItem value="A-">A-</SelectItem>
                  <SelectItem value="B+">B+</SelectItem>
                  <SelectItem value="B-">B-</SelectItem>
                  <SelectItem value="AB+">AB+</SelectItem>
                  <SelectItem value="AB-">AB-</SelectItem>
                  <SelectItem value="O+">O+</SelectItem>
                  <SelectItem value="O-">O-</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* <FileUpload label={"Upload Your Aadhar Card"} /> */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="address">Enter Your Address</Label>
              <Textarea
                id="address"
                placeholder="Enter your address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Set Your Password</Label>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2 m-1">
              <Checkbox
                id="terms"
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked)}
              />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
          </div>
          <CardFooter className="flex justify-between mt-3">
            <Link href="/">
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Link>
            <Button type="submit">Register</Button>
          </CardFooter>
          <CardDescription>
            If already registered,{" "}
            <a href="/login" className="text-blue-500 underline">
              click here to sign in
            </a>
            .
          </CardDescription>
        </form>
      </CardContent>
    </Card>
  );
};

export default AuthDonor;
