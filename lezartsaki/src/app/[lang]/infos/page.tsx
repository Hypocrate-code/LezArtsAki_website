import type { localesAvailableType } from "@/traductions/config";
import { Metadata } from "next";
import { generateTraducedMetada } from "@/utils/metadata";
import LogoForMobile from "@/app/public/ui/logoForMobile";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import TranslationContextProvider from "@/contexts/LangContext";
import { getTranslationContextValue } from "@/utils/getDataFromFile";
import ContainerBarToShow from "@/app/public/ui/ContainerBarToShow";

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
  return (
    <TranslationContextProvider translationsObject={translations}>
      <DefaultLayout>
        <LogoForMobile/>
        <section className="sectionDefault">
          <ContainerBarToShow>
            <h1>Infos Pratiques</h1>
          </ContainerBarToShow>
        </section>
      </DefaultLayout>
    </TranslationContextProvider>
  );
}