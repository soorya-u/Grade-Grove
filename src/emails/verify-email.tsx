import env from "@/schema/env";
import {
  Html,
  Button,
  Head,
  Body,
  Tailwind,
  Section,
  Column,
  Row,
  Img,
} from "@react-email/components";

type VerifyEmailProps = {
  userId: string;
  token: string;
};

export default function VerifyEmail({ userId, token }: VerifyEmailProps) {
  const url = env.NEXT_PUBLIC_URL;
  return (
    <Tailwind>
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Audiowide&family=Poppins:wght@500&display=swap"
            rel="stylesheet"
          />
          <title>Verify Email | Grade Grove</title>
        </Head>
        <Body className="flex h-full items-center justify-center bg-[#b1267e]">
          <Section className="pt-14">
            <Row>
              <Column className="flex items-center justify-center">
                <Img
                  width={125}
                  height={125}
                  src={`${url}/logo.png`}
                  alt="logo"
                />
              </Column>
            </Row>
            <Row>
              <Column className="flex items-center justify-center py-4 text-center font-['Audiowide'] text-5xl text-white">
                Grade Grove
              </Column>
            </Row>
            <Row>
              <Column className="flex items-center justify-center text-pretty px-4 py-4 text-center font-['Poppins'] text-3xl font-semibold text-white">
                A Central Hub for all your Results
              </Column>
            </Row>
            <Row>
              <Column className="flex items-center justify-center text-pretty px-4 py-4 text-left font-['Poppins'] text-base text-white md:px-10 lg:px-[12.5rem]">
                Welcome to Grade Grove! We're thrilled to have you on board. But
                before that, we kindly ask you to verify your email address.
                Verifying your email not only ensures the security of your
                account but also unlocks additional features and keeps you
                updated with the latest happenings. Click below, and you'll be
                all set to explore and engage with our vibrant community. We
                look forward to seeing you around!
              </Column>
            </Row>
            <Row>
              <Column className="flex items-center justify-center py-4">
                <Button
                  href={`${url}/api/auth/callback/register?id=${userId}&tk=${token}`}
                  target="_blank"
                  className="text-md rounded-lg bg-white px-4 py-3 font-['Poppins'] text-[#b1267e]"
                >
                  Verify your Email
                </Button>
              </Column>
            </Row>
          </Section>
        </Body>
      </Html>
    </Tailwind>
  );
}
