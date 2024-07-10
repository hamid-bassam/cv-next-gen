import { useTranslations } from "next-intl";
import Image from "next/image";




export default function Home() {
  const t = useTranslations("Home");

  return (
    <main>
      <h1>{t("Header.title")}</h1>
      <p>{t("Header.subtitle")}</p>
      <Image src="/logo.svg" alt="Logo" width={100} height={100} />
    </main>
  );
}
