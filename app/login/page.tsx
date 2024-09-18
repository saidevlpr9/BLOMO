import * as React from "react";
import Header from "../myCustomComponents/header";
import Footer from "../myCustomComponents/footer";
import LoginPage from "../myCustomComponents/loginSignup"
import Link from "next/link";
import Tab from "../myCustomComponents/tabs"

export default function loginPage() {
  return (
    <>
    <Header/>
      <div className="flex justify-center items-center pt-14 pb-14" style={{fontFamily:"DosisSemiBold"}}>
        <LoginPage/>
        {/* <Tab/> */}
        
      </div>
      <p className="text-black text-center -mt-10 mb-4">Authentication is currently under testing. If it fails, <Link href="/dashboard" className="text-[#8A0303]">click here</Link>  to preview the user's dashboard.</p>
      <Footer/>
    </>
  );
}
