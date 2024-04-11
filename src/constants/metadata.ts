import { Metadata } from "next";

const domain =
  process.env.NEXT_PUBLIC_URL || (`https://grade-grove.soorya-u.dev` as const);

export const defaultMetadata: Metadata = {
  applicationName: "Grade Grove",
  icons: {
    apple: {
      url: `${domain}/apple-touch-icon.png`,
      sizes: "180x180",
    },
    icon: [
      {
        url: `${domain}/favicon-16x16.png`,
        sizes: "16x16",
      },
      {
        url: `${domain}/favicon-32x32.png`,
        sizes: "32x32",
      },
    ],
  },
  authors: [
    {
      name: "Soorya U",
      url: "https://github.com/soorya-u/",
    },
  ],
  metadataBase: new URL("https://grade-grove.soorya-u.dev"),
  appleWebApp: {
    title: "Grade Grove",
    statusBarStyle: "default",
    startupImage: `${domain}/apple-touch-icon.png`,
  },
  manifest: `${domain}/site.webmanifest`,
};
