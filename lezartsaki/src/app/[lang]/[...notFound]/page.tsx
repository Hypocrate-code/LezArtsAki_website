import type { localesAvailableType } from "@/traductions/config";
import { Metadata } from "next";
import { generateTraducedMetada } from "@/utils/metadata";
import LogoForMobile from "@/app/public/ui/logoForMobile";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import TranslationContextProvider from "@/contexts/LangContext";
import { getTranslationContextValue } from "@/utils/getDataFromFile";

export async function generateMetadata({
  params,
}: {
  params: { lang: localesAvailableType };
}): Promise<Metadata> {
  return generateTraducedMetada("404", params.lang)
}

export default async function Error(
  {
    params,
  }: {
    params: { lang: localesAvailableType };
  }
) {  
  const translations = await getTranslationContextValue(params.lang, "404")
  return (
    <TranslationContextProvider translationsObject={translations}>
      <DefaultLayout>
        <LogoForMobile/>
        <section className="sectionDefault">
          <h1>Error 404</h1>
        </section>
      </DefaultLayout>
    </TranslationContextProvider>
  );
}