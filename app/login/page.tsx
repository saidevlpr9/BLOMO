// "use client";

// import * as React from "react";
// import { signIn } from "next-auth/react"; // Import NextAuth signIn function
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { CardDescription } from "@/components/ui/card-hover-effect";

// const Login: React.FC = () => {
//   const [email, setEmail] = React.useState<string>("");
//   const [password, setPassword] = React.useState<string>("");
//   const [error, setError] = React.useState<string | null>(null);
//   const router = useRouter();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       // Using NextAuth's credentials provider signIn
//       const res = await signIn("credentials", {
//         redirect: false,
//         email,
//         password,
//       });

//       if (res?.error) {
//         setError("Invalid credentials");
//         console.log("failed")
//         alert("Invalid credentials");
//       } else {
//         router.replace("/dashboard");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-full text-black">
//       <Card className="w-[350px] text-black text-3xl">
//         <CardHeader>
//           <CardTitle className="text-black text-3xl">Login</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleLogin}>
//             <div className="grid w-full items-center gap-4">
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   value={email}
//                   placeholder="Enter your email"
//                   required
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="password">Password</Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   value={password}
//                   placeholder="Enter your password"
//                   required
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//             </div>
//             {error && <p className="text-red-500">{error}</p>}
//             <CardFooter className="flex justify-between mt-4">
//               <Link href="/">
//                 <Button variant="outline" type="button">
//                   Cancel
//                 </Button>
//               </Link>
//               <Button type="submit">Login</Button>
//             </CardFooter>
//             <CardDescription className="text-black text-base">
//               If you're not registered,{" "}
//               <a href="/signup" className="text-blue-500 underline">
//                 register here
//               </a>
//             </CardDescription>
//           </form>
//         </CardContent>
//       </Card>
//       <div className="">

//       </div>
//     </div>
//   );
// };

// export default Login;

"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
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

const Login: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();

  // Dummy credentials for redirection
  const hospitalEmail = "testhospital@gmail.com";
  const hospitalPassword = "testhospital@888";
  const donorEmail = "testdonor@gmail.com";
  const donorPassword = "testdonor@888";
  const bloodBankEmail = "testbloodbank@gmail.com";
  const bloodBankPassword = "testbloodbank@888";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (email === hospitalEmail && password === hospitalPassword) {
      console.log("Login successful, redirecting to hospital dashboard");
      router.replace("/hospitalDashboard");
    } else if (email === donorEmail && password === donorPassword) {
      console.log("Login successful, redirecting to donor dashboard");
      router.replace("/dashboard");
    } else if (email === bloodBankEmail && password === bloodBankPassword) {
      console.log("Login successful, redirecting to blood bank dashboard");
      router.replace("/bloodBankDashboard");
    } else {
      console.log("Invalid credentials");
      setError("Invalid credentials");
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-full text-black max-sm:flex-col">
        <Card className="w-[350px] text-black text-3xl">
          <CardHeader>
            <CardTitle className="text-black text-3xl">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
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
              {error && <p className="text-red-500">{error}</p>}
              <CardFooter className="flex justify-between mt-4">
                <Link href="/">
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit">Login</Button>
              </CardFooter>
              <CardDescription className="text-black text-base">
                If you're not registered,{" "}
                <a href="/signup" className="text-blue-500 underline">
                  register here
                </a>
              </CardDescription>
            </form>
          </CardContent>
        </Card>
        <div className="text-black ml-36 -mr-80 max-sm:mr-0 max-sm:ml-0 max-sm:mt-10">
          <div className="mb-10">
            <p>Credentials for Hospital Dashboard</p>
            <p>testhospital@gmail.com</p>
            <p>testhospital@888</p>
          </div>
          <div className="mb-10">
            <p>Credentials for Donor Dashboard</p>
            <p>testdonor@gmail.com</p>
            <p>testdonor@888</p>
          </div>
          <div className="mb-10">
            <p>Credentials for BloodBank Dashboard</p>
            <p>testbloodbank@gmail.com</p>
            <p>testbloodbank@888</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
