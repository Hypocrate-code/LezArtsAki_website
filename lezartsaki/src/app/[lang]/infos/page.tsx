import type { localesAvailableType } from "@/traductions/config";
import { Metadata } from "next";
import { generateTraducedMetada } from "@/utils/metadata";
import LogoForMobile from "@/app/public/ui/logoForMobile";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import TranslationContextProvider from "@/contexts/LangContext";
import { getTranslationContextValue } from "@/utils/getDataFromFile";
import TitleSection from "@/components/TitleSection";
import ContainerBarToShow from "@/app/public/ui/ContainerBarToShow";
import { t } from "@/utils/traduction";
import styles from "./page.module.css";
import Map from "./Map";

export async function generateMetadata({
  params,
}: {
  params: { lang: localesAvailableType };
}): Promise<Metadata> {
  return generateTraducedMetada("infos", params.lang)
}

export default async function Infos(
  {
    params,
  }: {
    params: { lang: localesAvailableType };
  }
) {  
  const translations = await getTranslationContextValue(params.lang, "infos")
  const { page } = translations
  return (
    <TranslationContextProvider translationsObject={translations}>
      <DefaultLayout>
        <LogoForMobile/>
        <TitleSection page={page}/>
        <section className={styles.section}>
          <ContainerBarToShow>
            <h2>{t(page, "ourAdressTitle")}</h2>
          </ContainerBarToShow>
          <div className={styles.infoContainer}>
            <p><b>{t(page, "adressHeader")}</b> :</p>
            <p>{t(page, "adress")}</p>
          </div>
          <ContainerBarToShow>
            <h2>{t(page, "adressCartoTitle")}</h2>
          </ContainerBarToShow>

          <div className={styles.withMapBigContainer}>
            <div className={styles.infosContainer}>
              <div className={styles.infoContainer}>
                <p><b>{t(page, "adressHeader")}</b> :</p>
                <p>{t(page, "cartonnerie.adress")}</p>
              </div>
              <div className={styles.infoContainer}>
                <p><b>{t(page, "phoneHeader")}</b> :</p>
                <p>{t(page, "cartonnerie.phone")}</p>
              </div>
              <div className={styles.infoContainer}>
                <p><b>{t(page, "mailHeader")}</b> :</p>
                <p>{t(page, "cartonnerie.mail")}</p>
              </div>
            </div>
            <Map/>
          </div>

        </section>
      </DefaultLayout>
    </TranslationContextProvider>
  );
}