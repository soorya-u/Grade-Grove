import LoginCard from "@/components/pages/login";

type LoginPageProps = {
  searchParams: {
    error?: string;
  };
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { error } = searchParams;
  if (error) throw new Error(error);
  else
    return (
      <div className="flex w-full flex-col items-center justify-center gap-y-4">
        <LoginCard />
      </div>
    );
}
