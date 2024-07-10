import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

const locales: string[] = ["en", "fr"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();
  return {
    messages: (await import(`./content/${locale}.json`)).default
  };
});

