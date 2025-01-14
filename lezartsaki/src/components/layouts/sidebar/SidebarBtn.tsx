"use client"
import { UIEventHandler, useEffect, useState } from "react";
import styles from "./SidebarBtn.module.css"
import sideBarStyle from "./Sidebar.module.css"

function SidebarBtn({ isOpen, onClickHandler } : { isOpen: boolean, onClickHandler : UIEventHandler }) {
    const [isScrolledEnough, setIsScrolled] = useState(false)
    const showOrHideSidebarBtn = () => {
        const navbar = document.querySelector('nav');
        if (navbar) setIsScrolled((window.scrollY > navbar.clientHeight - 1) || isOpen)
        }
    useEffect(()=>{
        showOrHideSidebarBtn()
        window.addEventListener('scroll', showOrHideSidebarBtn)
        return () => {
            window.removeEventListener('scroll', showOrHideSidebarBtn)
        }
    }, [isOpen, showOrHideSidebarBtn])
    return (
        <button onClick={onClickHandler} className={`${styles.sidebarBtn} ${isScrolledEnough ? sideBarStyle.visible : ""} ${isOpen ? styles.active : styles.inactive}`}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
        </button>
    )
}

export default SidebarBtn