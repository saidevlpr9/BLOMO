import React from "react"
import Headers from "../myCustomComponents/dashboardHeader"
import Footer from "../myCustomComponents/footer"
import SessionWrapper from "../myCustomComponents/sessionWrapper"
const UserDashboardLayout = ({children}:{
  children:React.ReactNode
})=>{
  return(
    <>


    <main  className="h-auto bg-slate-100 pb-14 text-lg pt-14" style={{fontFamily:"DosisMedium"}}>
      {/* <SessionWrapper> */}
    {children}
    {/* </SessionWrapper> */}
    </main>

    </>
  )
}
export default UserDashboardLayout;