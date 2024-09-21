import React from "react"
import SessionWrapper from "../myCustomComponents/sessionWrapper"
import Headers from "../myCustomComponents/header"
import Footer from "../myCustomComponents/footer"
const LoginLayout = ({children}:{children:React.ReactNode})=>{
  return(
    <>
    <Headers/>
    <main className="h-full bg-[#FDFDFD] p-10">
      {/* <SessionWrapper> */}
      {children}
      {/* </SessionWrapper> */}
    </main>
    <Footer/>
    </>
  )
}
export default LoginLayout