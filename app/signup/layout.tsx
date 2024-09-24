import React from "react";
import Header from "../myCustomComponents/header";
import Footer from "../myCustomComponents/footer"
const SignupLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
    <>
    <div className="bg-[#FDFDFD]">

    
    <div className="h-full bg-[#FDFDFD]  text-lg pt-20" style={{fontFamily:"DosisMedium"}}>
        <main className="bg-[#FDFDFD]">
          {children}
        </main>
        
      </div>

      </div>
      </>
    </>
  );
};
export default SignupLayout;