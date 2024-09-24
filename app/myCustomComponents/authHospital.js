"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Textarea } from "@/components/ui/textarea";

const AuthHospitals = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !phone || !registrationNumber || !address || !password || !acceptTerms) {
      alert("Please fill out all fields and accept terms.");
      return;
    }

    const hospitalData = {
      name,
      email,
      phone,
      registrationNumber,
      address,
      password,
    };
    
    localStorage.setItem("hospitalData", JSON.stringify(hospitalData));

    setName("");
    setEmail("");
    setPhone("");
    setRegistrationNumber("");
    setAddress("");
    setPassword("");
    setAcceptTerms(false);
    alert("Registration successful! Your application is under review will get back to you soon");
  };

  return (
    <Card className="w-[350px] border-t-0 rounded-t-none">
      <CardHeader>
        <CardTitle>
          Create An Account For <span className="text-[#8A0303]">Hospital</span>
        </CardTitle>
        <CardDescription>Be a Blomo Hero: Save lives</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Hospital Name</Label>
              <Input
                id="name"
                placeholder="Enter your hospital name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Hospital Email</Label>
              <Input
                id="email"
                placeholder="Enter your hospital email"
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
              <Label htmlFor="registrationNumber">Registration Number</Label>
              <Input
                id="registrationNumber"
                placeholder="Enter registration number"
                required
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="address">Enter Hospital Address</Label>
              <Textarea
                id="address"
                placeholder="Enter your hospital address"
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

export default AuthHospitals;
