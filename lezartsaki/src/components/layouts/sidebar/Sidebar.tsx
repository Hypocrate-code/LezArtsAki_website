"use client"
import React, { UIEventHandler } from "react"
import styles from "./Sidebar.module.css"
import getListOfLinksForNavEl from "@/utils/listOfTitlesForNavBar"
import { translationContext } from "@/contexts/LangContext"
import { useContext } from "react"
import SidebarEl from "./SidebarEl"

export default function Sidebar({
    isOpen,
    isOpenSwitch,
}: {
    isOpen: boolean;
    isOpenSwitch: UIEventHandler;
}) {
    const translations = useContext(translationContext)
    const titles = getListOfLinksForNavEl(translations["common"])
    return (
        <div className={`${styles.sidebarContainer} ${isOpen ? styles.visible : ''}`}>
            <nav
                className={styles.sidebar}>
                {Object.entries(titles).map(([link, title]) => (
                    <SidebarEl
                        isOpenSwitch={isOpenSwitch}
                        title={title}
                        key={link}
                        link={link.includes('#') ? link : `/${translations.lang}${link}`}
                    />
                ))}
            </nav>
        </div>
    );
}
