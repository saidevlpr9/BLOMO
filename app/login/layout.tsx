import React from "react"
import SessionWrapper from "../myCustomComponents/sessionWrapper"
import Headers from "../myCustomComponents/header"
import Footer from "../myCustomComponents/footer"
const LoginLayout = ({children}:{children:React.ReactNode})=>{
  return(
    <>

    <main className="h-full bg-[#FDFDFD] pt-20">
      {/* <SessionWrapper> */}
      {children}
      {/* </SessionWrapper> */}
    </main>

    </>
  )
}
export default LoginLayout