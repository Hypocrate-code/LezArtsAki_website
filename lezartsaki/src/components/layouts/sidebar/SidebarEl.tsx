"use client"
import Link from "next/link"
import styles from "./SidebarEl.module.css"
import { UIEventHandler, useEffect, useState } from "react"
import { useParams } from "next/navigation"

function SidebarEl({ isOpenSwitch, link, title } : { isOpenSwitch: UIEventHandler ,link : string, title : string }) {
    const [location, setLocation] = useState("")
    const { lang } = useParams()
    const totalLink = "/" + lang + link
    useEffect(() => {
        setLocation(window.location.pathname);
    })
    return (
            <div className={styles.sidebarEl}>
                <Link onClick={isOpenSwitch} className={totalLink === location || link + lang === location ? styles.current : ""} href={link}>{title}</Link>
            </div>
        )
}

export default SidebarEl