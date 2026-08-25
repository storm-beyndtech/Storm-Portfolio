import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site-url"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const routes = ["", "/work", "/work/rugburn", "/work/void", "/work/nakupenda", "/work/dash", "/work/rasman", "/work/pearlcity", "/about", "/elsewhere", "/contact"]

  return routes.map((route, index) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "monthly" : "yearly",
    priority: index === 0 ? 1 : route.startsWith("/work/") ? 0.8 : 0.6,
  }))
}
