import { getAllUsn } from "@/server/student";

const domain =
  process.env.NEXT_PUBLIC_URL || (`https://grade-grove.soorya-u.dev` as const);

export default async function sitemap() {
  const routes = ["", "/changelog"].map((route) => ({
    url: `${domain}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const semDynamicPath = [
    "/first-sem",
    "/second-sem",
    "/third-sem",
    "/fourth-sem",
  ];

  const semRoutes = semDynamicPath.map((route) => ({
    url: `${domain}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const allUsn = await getAllUsn();

  const usnRoutes = semDynamicPath.flatMap((sem) => {
    return allUsn.map((usn) => ({
      url: `${domain}${sem}/${usn}`,
      lastModified: new Date().toISOString(),
    }));
  });

  return [...routes, ...semRoutes, ...usnRoutes];
}
