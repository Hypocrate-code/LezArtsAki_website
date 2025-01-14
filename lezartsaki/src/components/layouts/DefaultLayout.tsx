import React from "react"
import Navbar from "./navbar/Navbar"
import SidebarAndBtn from "./sidebar/SidebarAndBtn"
import Footer from "./footer/Footer"
// import { localesAvailableType } from "@/traductions/config"

export default function DefaultLayout({ children } : { children : React.ReactNode}) {
  return (
    <>
        <Navbar/>
        <SidebarAndBtn/>
        {children}
        <Footer/>
    </>
  )
}