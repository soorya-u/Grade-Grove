import NextLink from "next/link";

type LinkProps = {
  children: React.ReactNode;
  href: string;
};

const Link = ({ children, href }: LinkProps) => (
  <NextLink href={href} className="underline underline-offset-2">
    {children}
  </NextLink>
);

export const meanStackDescription = (
  <>
    Undertook the process of migrating the project to the{" "}
    <Link href="https://www.mongodb.com/">MongoDB</Link>,{" "}
    <Link href="https://expressjs.com/">Express.js</Link>,{" "}
    <Link href="https://angular.dev/">Angular</Link>,{" "}
    <Link href="https://nodejs.org/">Node.js</Link> (MEAN Stack) , showcasing a
    thoughtful initiative to leverage the full-stack capabilities and optimize
    the project's architecture for enhanced functionality and scalability.
  </>
);

export const sooryaT3StackDescription = (
  <>
    Migrated the Project to the{" "}
    <Link href="https://create.t3.gg/">T3 Stack</Link>, incorporating{" "}
    <Link href="https://nextjs.org/">Next.js</Link> for frontend development,{" "}
    <Link href="https://www.prisma.io/">Prisma</Link> for database efficiency,
    and <Link href="https://tailwindui.com/">Tailwind</Link> for responsive
    styling, showcasing a strategic upgrade in functionality and design.and
    aesthetic appeal of the project's architecture.
  </>
);

export const saanviT3StackDescription = (
  <>
    Diligently Expanded the Results and engaged with the
    <Link href="https://postgresql.org/">PostgreSQL</Link> database,
    contributing to a more Robust and Comprehensive Dataset for the Project.
  </>
);

export const nextAuthDescription = (
  <>
    Enhanced project security by integrating authentication using{" "}
    <Link href={"https://authjs.dev/"}>Auth.js</Link>. This implementation
    ensures smooth and secure user authentication across various platforms,
    offering login options via social media accounts, email, and other identity
    providers.
  </>
);