"use client"; // Use this for client-side rendering

import * as React from "react";
import { useRouter } from "next/navigation"; // Next.js router for navigation
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardDescription } from "@/components/ui/card-hover-effect";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter(); // Next.js router instance

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (res.ok) {
        // Redirect to the homepage or dashboard after successful login
        router.push("/dashboard");
      } else {
        // Handle login errors
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-full text-black">
      <Card className="w-[350px] text-black text-3xl">
        <CardHeader>
          <CardTitle className="text-black text-3xl">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" >Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  placeholder="Enter your password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <CardFooter className="flex justify-between mt-4">
              <Link href="/">
              <Button variant="outline" type="button" >
                Cancel
              </Button>
              </Link>
              <Button type="submit">Login</Button>
            </CardFooter>
            <CardDescription className="text-black text-base ">If you're not registered, <a href="/signup" className="text-blue-500 underline">register here</a></CardDescription>

          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
