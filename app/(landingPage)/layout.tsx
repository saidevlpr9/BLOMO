import React from "react";
import Footer from "../myCustomComponents/footer";
import Header from "../myCustomComponents/header";
const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      <div
        className="h-auto bg-[#FDFDFD] pb-24 text-lg"
        style={{ fontFamily: "DosisMedium" }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
export default LandingLayout;
