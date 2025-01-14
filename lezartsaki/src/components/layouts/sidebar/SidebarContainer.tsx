// import { UIEventHandler } from "react"
// import styles from "./SidebarContainer.module.css"
// import SidebarEl from "./SidebarEl"
// import { ListOfLinksForNavElType } from "@/utils/listOfTitlesForNavBar"
// import getListOfLinksForNavEl from "@/utils/listOfTitlesForNavBar"
// import { localesAvailableType } from "@/traductions/config"
// import Sidebar from "./Sidebar"
// import React from "react"

// export default function SidebarContainer({ 
//     children,
//     lang
// }: { 
//     children : React.ReactNode,
//     lang : localesAvailableType
// }) {
//     const titles = getListOfLinksForNavEl(lang)
//     return (
//         <>
//             {React.isValidElement(children) && React.cloneElement(children,  titles )}
//         </>
//     )
// }