import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { Contact } from "../_components/Contact";
import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { Hero } from "../_components/Hero";
import { Section } from "../_components/Section";
import { Skills } from "../_components/Skills";
import { Spacing } from "../_components/Spacing";
import { Status } from "../_components/Status";




export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Home");

  return (
    <main>

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

      <Footer />

    </main>
  );
}
