import { useTranslations } from "next-intl";
import { Header } from "../_components/Header";
import { Hero } from "../_components/Hero";
import { Section } from "../_components/Section";
import { Spacing } from "../_components/Spacing";




export default function Home() {
  const t = useTranslations("Home");

  return (
    <main>

      <Header />
      <Spacing size="md" />
      <Section>
        <h1>{t("Header.title")}</h1>
        <p>{t("Header.subtitle")}</p>
      </Section>
      <Spacing size="md" />
      <Hero />
      <Spacing size="md" />
      <div className=" h-96 bg-white w-full"></div>

    </main>
  );
}
