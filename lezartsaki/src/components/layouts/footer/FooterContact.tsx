"use client"
import { t } from "@/utils/traduction"
import stylesFBox from "./FooterBox.module.css"
import styles from "./FooterContact.module.css"
import ContainerBarToShow from "@/app/public/ui/ContainerBarToShow"
import { outfit } from "@/app/public/ui/fonts"
import { useContext, useState } from "react"
import { translationContext } from "@/contexts/LangContext"

function FooterContact() {
  const translations = useContext(translationContext)["common"]
  const [status, setStatus]= useState('')
  const [formData, setFormData] = useState({
    "subject": "",
    "email": "",
    "message": ""
  })
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res = await fetch("api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if(res.status === 500) {
        setFormData({
          "subject": "",
          "email": "",
          "message": ""
        })
        setStatus("Le SMTP n'est pas encore configuré.")
      } 
    }
    catch (e) {
        console.log(e);
    }
  }
  return (
    <form onSubmit={onSubmitHandler} className={`${stylesFBox.footerBox} ${styles.footerBox}`} id="contact">
      <ContainerBarToShow>
        <h3>{t(translations, "footer.contact.title")}</h3>
      </ContainerBarToShow>
      <div className={`${stylesFBox.footerBoxContent} ${styles.footerBoxContent}`}>
        <select name="subject" onChange={onChangeHandler} value={formData.subject} id="type-of-selector">
          <option value="">{t(translations, "footer.contact.themesOfRequest.title")}</option>
          <option value="adhesion">&#x1F4DD; {t(translations, "footer.contact.themesOfRequest.adhesion")}</option>
          <option value="programmation">&#x231A; {t(translations, "footer.contact.themesOfRequest.program")}</option>
          <option value="infos">&#x1F918; {t(translations, "footer.contact.themesOfRequest.infos")}</option>
          <option value="other">&#x1F4E2; {t(translations, "footer.contact.themesOfRequest.other")}</option>
        </select>
        <input name="email" value={formData.email} onChange={onChangeHandler} className={outfit.className} type="email" placeholder={t(translations, "footer.contact.placeholders.email")}/>
        <textarea className={outfit.className} onChange={onChangeHandler} value={formData.message} name="message" placeholder={t(translations, "footer.contact.placeholders.comment")}></textarea>
        <button id="send-contact" type="submit" form="contact">{t(translations, "footer.contact.placeholders.send")}</button>
        <p className={styles.status}>{status}</p>
      </div>
  </form>
  )
}

export default FooterContact