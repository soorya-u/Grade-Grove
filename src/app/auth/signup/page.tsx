import SignUpCard from "@/components/pages/signup";

type SignUpPageProps = {
  searchParams: {
    error?: string;
  };
};

export default async function SignUp({ searchParams }: SignUpPageProps) {
  const { error } = searchParams;
  if (error) throw new Error(error);
  else
    return (
      <div className="flex w-full flex-col items-center justify-center gap-y-4">
        <SignUpCard />
      </div>
    );
}
