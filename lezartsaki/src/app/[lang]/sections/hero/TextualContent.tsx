"use client"
import ContainerBarToShow from "@/app/public/ui/ContainerBarToShow"
import styles from './TextualContent.module.css'
import { differenceInYears } from "date-fns"
import { translationContext } from "@/contexts/LangContext"
import { useContext } from "react"
import { t } from "@/utils/traduction"

function TextualContent() {
  const date_creation = new Date("2018-04-19")
  const date_actuelle = new Date()
  const years_since = differenceInYears(date_actuelle, date_creation)
  const { page } = useContext(translationContext)
  const bottomDescription = t(page, "hero.bottomDescription").replace('YEAR', years_since.toString()).split('Reims');
  
  return (
    <div className={styles.mainSectionContent}>
        <ContainerBarToShow>
            <h1 className={`${styles.h1} bar_to_show`}>{t(page, "hero.h1")}</h1>
        </ContainerBarToShow>
        <div className={styles.bottomMainSectionContent}>
            <p>{bottomDescription[0]}<u>Reims</u>{bottomDescription[1]}</p>
            <a href="#know-more">{t(page, "hero.cta")}</a>
        </div>
    </div>
  )
}

export default TextualContent