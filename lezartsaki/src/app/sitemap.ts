import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const langPages : MetadataRoute.Sitemap = [
      {
        url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/fr`,
        changeFrequency: "yearly",
        priority: 1,
      },
      {
        url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/fr/events`,
        changeFrequency: "yearly",
        priority: .8,
      },
      {
        url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/fr/infos`,
        changeFrequency: "never",
        priority: .2,
      },
      {
        url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/fr/partners`,
        changeFrequency: "yearly",
        priority: .5,
      },
      {
        url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/fr/team`,
        priority: .7,
        changeFrequency: "monthly",
      },
      {
        url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/en`,
        changeFrequency: "yearly",
        priority: 1,
      },
      {
        url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/en/events`,
        changeFrequency: "yearly",
        priority: .8,
      },
      {
        url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/en/infos`,
        changeFrequency: "never",
        priority: .2,
      },
      {
        url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/en/partners`,
        changeFrequency: "yearly",
        priority: .5,
      },
      {
        url: `https://${process.env.NEXT_PUBLIC_BASE_URL}/en/team`,
        priority: .7,
        changeFrequency: "monthly",
      }
  ]
  return langPages
}