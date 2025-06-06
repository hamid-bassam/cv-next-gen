import { unstable_setRequestLocale } from "next-intl/server";
import TerminalLanding from "../_components/TerminalLanding";




export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  // const t = useTranslations("Home");

  return (
    <main>

      <TerminalLanding locale={locale} />
      {/* 
      <Header select={true} />
      <Spacing size="md" />
      <Section>
        <h1>{t("Header.title")}</h1>
        <p>{t("Header.subtitle")}</p>
      </Section>
      <Spacing size="md" />
      <Hero />
      <Spacing size="md" />
      <Status />

      <Spacing size="md" />
      <Skills />
      <Spacing size="md" />
      <Contact />
      <Spacing size="md" />

      <Footer /> */}

    </main>
  );
}
