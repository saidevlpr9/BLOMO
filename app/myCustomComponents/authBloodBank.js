"use client";
import { useState } from "react";
import Confetti from '../myCustomComponents/confetti'; 
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

const AuthBloodBank = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  // const [isConfettiVisible, setIsConfettiVisible] = useState(false); 
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
   
    setErrorMessage("");

    
    if (!name || !email || !phoneNumber || !licenseNumber || !address || !password || !acceptTerms) {
      setErrorMessage("Please fill out all fields and accept terms.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setErrorMessage("Please enter a valid phone number (10-15 digits).");
      return;
    }

    const bloodBankData = {
      name,
      email,
      phoneNumber,
      licenseNumber,
      address,
      password,
    };
    localStorage.setItem("bloodBankData", JSON.stringify(bloodBankData));


    setName("");
    setEmail("");
    setPhoneNumber("");
    setLicenseNumber("");
    setAddress("");
    setPassword("");
    setAcceptTerms(false);

  
    setIsConfettiVisible(true);
    alert("Registration successful! Your application is under review will get back to you soon");
  };

  return (
    <>
      <Card className="w-[350px] border-t-0 rounded-t-none">
        <CardHeader>
          <CardTitle>
            Create An Account For{" "}
            <span className="text-[#8A0303]">BloodBank</span>
          </CardTitle>
          <CardDescription>Be a Blomo Hero: Save lives</CardDescription>
        </CardHeader>
        <CardContent>
          {errorMessage && <div className="text-red-500">{errorMessage}</div>} {/* Error message display */}
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
              <Link href="/">
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </Link>
              <Button type="submit"><Confetti/></Button>
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

    </>
  );
};

export default AuthBloodBank;