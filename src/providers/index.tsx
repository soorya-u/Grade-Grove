import NextAuthProvider from "./next-auth";

type ProvidersProps = {
  children: React.ReactNode;
};
export default function Providers(props: ProvidersProps) {
  return <NextAuthProvider>{props.children}</NextAuthProvider>;
}
