import ContainerBarToShow from "@/app/public/ui/ContainerBarToShow";
import styles from "../page.module.css"
import { JSONData } from "@/utils/traduction";
import { t } from "@/utils/traduction";


function TitleSection({page}: {page: JSONData}) {
  return (
    <section className={styles.smallSection}>
    <ContainerBarToShow>
      <h1>{t(page, "h1")}</h1>
    </ContainerBarToShow>
    <p>{t(page, "description")}</p>
  </section>
  )
}

export default TitleSection