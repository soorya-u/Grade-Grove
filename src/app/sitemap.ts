import { Student } from "@/services/student";

const domain =
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  (`https://elite-aiml.soorya-u.dev` as const);

export default async function sitemap() {
  const routes = ["", "/about"].map((route) => ({
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

  const allUsn = await Student.getAllUsn();

  const usnRoutes = semDynamicPath.map((sem) => {
    return allUsn.map((usn) => ({
      url: `${domain}${sem}/${usn}`,
      lastModified: new Date().toISOString(),
    }));
  });

  return [...routes, ...semRoutes, ...usnRoutes];
}
