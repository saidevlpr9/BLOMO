import React from "react"
import Headers from "../myCustomComponents/dashboardHeader"
import SessionWrapper from "../myCustomComponents/sessionWrapper"
import Footer from "../myCustomComponents/footer"
const UserDashboardLayout = ({children}:{
  children:React.ReactNode
})=>{
  return(
    <>


    <main  className="h-auto bg-slate-100 pb-14 text-lg pt-14" style={{fontFamily:"DosisMedium"}}>

    {children}

    </main>

    </>
  )
}
export default UserDashboardLayout;