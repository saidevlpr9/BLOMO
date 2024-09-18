import React from "react";
import Header from "../myCustomComponents/header";
import Footer from "../myCustomComponents/footer";
const FullBlogsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div
        className="h-auto bg-[#FDFDFD] pb-24 pt-24 text-lg"
        style={{ fontFamily: "DosisMedium" }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
export default FullBlogsLayout;
