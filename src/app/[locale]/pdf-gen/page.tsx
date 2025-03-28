import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import dynamic from 'next/dynamic';
import { CVData } from "../../_components/DownloadCV";

const DownloadCV = dynamic(
  () => import('./../../_components/DownloadCV'),
  { ssr: false }
);

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("Home");
  const mockData: CVData = {
    name: "Hamid BASSAM",
    position: "Business Analyst",
    location: "Paris, France",
    email: "hamid.bassam.147@gmail.com",
    phone: "+33 7 49 88 73 49",
    experience: [
      {
        position: "Business Analyst",
        company: "Euler Hermes",
        dates: "Jan 2022 - Déc 2024",
        tasks: [
          "Collecte des besoins et rédaction des spécifications fonctionnelles",
          "Suivi des mises en production",
          "Validation des tests et reporting SQL",
        ],
      },
    ],
    skills: ["SQL", "Jira", "Confluence", "Gestion des spécifications"],
    education: [
      { degree: "Master en Systèmes d'Information", school: "Dauphine", year: "2019" },
    ],
  };

  return (
    <>
      <DownloadCV data={
        mockData
      }
      />
    </>
  );
}