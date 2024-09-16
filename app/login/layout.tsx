import React from "react";
import Header from "../myCustomComponents/header";
import Footer from "../myCustomComponents/footer"
const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <>
    {/* <Header/> */}
    
    <div className="h-full bg-[#FDFDFD]  text-lg" style={{fontFamily:"DosisMedium"}}>
        <main className="bg-[#FDFDFD]">
          {children}
        </main>
        
      </div>
      {/* <Footer/> */}
      </>
    </>
  );
};
export default LoginLayout;