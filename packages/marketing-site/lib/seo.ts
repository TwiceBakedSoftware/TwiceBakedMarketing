import { siteConfig } from "../content/site";

export function createPageTitle(pageTitle: string) {
  return `${pageTitle} | ${siteConfig.companyName}`;
}

export function createCanonicalUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalizedPath}`;
}
