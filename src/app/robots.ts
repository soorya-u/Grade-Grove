import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const domain =
    process.env.NEXT_PUBLIC_URL ||
    (`https://grade-grove.soorya-u.dev` as const);
  return {
    rules: {
      userAgent: "*",
      allow: "*",
    },
    sitemap: `${domain}/sitemap.xml`,
  };
}
