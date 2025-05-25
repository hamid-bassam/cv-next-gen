import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import dynamic from 'next/dynamic';
import { mock_cv_junior_python } from "../../../lib/mocks/cv-junior-python";


const DownloadDoc = dynamic(
  () => import('./../../_components/DownloadDoc'),
  { ssr: false }
);

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("Home");


  return (
    <>
      <DownloadDoc data={
        mock_cv_junior_python
      }
      />
    </>
  );
}