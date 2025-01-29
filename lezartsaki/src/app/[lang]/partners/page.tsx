import type { localesAvailableType } from "@/traductions/config";
import { Metadata } from "next";
import { generateTraducedMetada } from "@/utils/metadata";
import LogoForMobile from "@/app/public/ui/logoForMobile";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import TranslationContextProvider from "@/contexts/LangContext";
import { getTranslationContextValue } from "@/utils/getDataFromFile";
import PartnerSection from "./sections/PartnerSection";
import HeroSection from "./sections/HeroSection";


export async function generateMetadata({
  params,
}: {
  params: { lang: localesAvailableType };
}): Promise<Metadata> {
  return generateTraducedMetada("partners", params.lang)
}

export default async function Partners(
  {
    params
  }: {
    params: { lang: localesAvailableType };
  }
) {  
  const translations = await getTranslationContextValue(params.lang, "partners")
  const { page } = translations;
  return (
    <TranslationContextProvider translationsObject={translations}>
      <DefaultLayout>
        <LogoForMobile/>
        <HeroSection page={page}/>
        <PartnerSection page={page}/>
      </DefaultLayout>
    </TranslationContextProvider>
  );
}