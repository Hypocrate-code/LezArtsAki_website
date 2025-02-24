import type { localesAvailableType } from "@/traductions/config";
import { Metadata } from "next";
import { generateTraducedMetada } from "@/utils/metadata";
import LogoForMobile from "@/app/public/ui/logoForMobile";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import TranslationContextProvider from "@/contexts/LangContext";
import { getTranslationContextValue } from "@/utils/getDataFromFile";
import TitleSection from "@/components/TitleSection";
import TeamSection from "./TeamSection";
import { t_Data } from "@/utils/traduction";

export async function generateMetadata({
  params,
}: {
  params: { lang: localesAvailableType };
}): Promise<Metadata> {
  return generateTraducedMetada("team", params.lang)
}

export default async function Team(
  {
    params,
  }: {
    params: { lang: localesAvailableType };
  }
) {
  const translations = await getTranslationContextValue(params.lang, "team")
  const { page } = translations;
  const members = JSON.parse(JSON.stringify(t_Data(page, "members")))
  return (
    <TranslationContextProvider translationsObject={translations}>
      <DefaultLayout>
        <LogoForMobile/>
        <TitleSection page={page}/>
        <TeamSection members={members}/>
      </DefaultLayout>
    </TranslationContextProvider>
  );
}