"use client"
import { JSONData } from "@/utils/traduction";
import styles from "../page.module.css"
import { useEffect, useRef, useState } from "react";
import { t, t_Data } from "@/utils/traduction";
import PartnerEl from "./PartnerEl";

export interface Partner {
    "name" : string,
    "description": string,
    "logo": string,
    "link": string 
  }  

function PartnerSection({page}: {page: JSONData}) {
    const partners : Partner[] = JSON.parse(JSON.stringify(t_Data(page, "partners")))
    const [columnCount, setColumnCount] = useState(1)
    const alt = t(page, "alt");
    const redirectionTitle = t(page, "redirection");
    const partnerSectionRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (partnerSectionRef.current) {
            setColumnCount(parseInt(window.getComputedStyle(partnerSectionRef.current).columnCount))
        }
    }, [])
  return (
    <section ref={partnerSectionRef} className={styles.partnerSection}>
        {partners.map((partner, i) => {
            return <PartnerEl count={Math.trunc(i/(Math.ceil(partners.length / columnCount)))} key={partner.name} partner={partner} alt={alt} redirectionTitle={redirectionTitle} />
        })}
    </section>
  )
}

export default PartnerSection