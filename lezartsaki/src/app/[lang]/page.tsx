import type { localesAvailableType } from "@/traductions/config";
import { Metadata } from "next";
import { generateTraducedMetada } from "@/utils/metadata";
import LogoForMobile from "../public/ui/logoForMobile";
import HeroSection from "./sections/hero/HeroSection";
import DescriptionSection from "./sections/description/DescriptionSection";
import TimelineSection from "./sections/timeline/TimelineSection";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import TranslationContextProvider from "@/contexts/LangContext";
import { getTranslationContextValue } from "@/utils/getDataFromFile";
import CovidSection from "./sections/covid/CovidSection";

export async function generateMetadata({
  params,
}: {
  params: { lang: localesAvailableType };
}): Promise<Metadata> {
  return generateTraducedMetada("home", params.lang)
}

export default async function Home(
  {
    params,
  }: {
    params: { lang: localesAvailableType };
  }
) {  
  const translations = await getTranslationContextValue(params.lang, "home")
  return (
    <TranslationContextProvider translationsObject={translations}>
      <DefaultLayout>
        <LogoForMobile/>
        <HeroSection/>
        <DescriptionSection/>
        <TimelineSection/>
        <CovidSection/>
      </DefaultLayout>
    </TranslationContextProvider>
  );
}