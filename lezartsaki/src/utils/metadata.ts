import type { localesAvailableType } from "@/traductions/config";
import { t } from "./traduction";
import getDataFromFile from "./getDataFromFile";

interface MetadataContent {
  title : string,
  description : string
}

export async function generateTraducedMetada(page: string, lang : localesAvailableType ) : Promise<MetadataContent> {  
  const translations = await getDataFromFile("common", lang)
  return {
    title: t(translations, `${page}.title`),
    description: t(translations, `${page}.description`) 
  }  
}