import { Bike, Bitcoin, CircleAlert, CodeXml, LucideIcon, Turtle } from "lucide-react";
import Link from "next/link";

export const SIDE_PROJECTS: SideProjectProps[] = [
    {
        logo: Bitcoin,
        title: "SwapBot pour Injective sur Telegram",
        description: "Facilitez des échanges de crypto-monnaies de manière sécurisée et directe via Telegram, en utilisant des smarts contracts sur la blockchain Injective pour une automatisation complète et efficace."
    },
    {
        logo: CircleAlert,
        title: "BuyBot pour Injective sur Telegram",
        description: "Un bot automatisé qui notifie les transactions de swap d'INJ, affichant en temps réel les quantités échangées, le nouveau market cap et d'autres données de marché pertinentes sur un canal Telegram dédié."
    },
    {
        logo: Bike,
        title: "WheelEazy",
        description: "Market place de location de velo entre particuliers pour moyenne et longue durée."
    },
    {
        logo: CodeXml,
        title: "Tailwind-Gen-AI",
        description: "Application Next.js  intégrant le SDK Vercel et les librairies OpenAI pour convertir les prompts utilisateurs en pages web responsives. Utilise Tailwind CSS pour un design élégant et adaptatif.",
        url: "http://localhost:3004/"
    },
    {
        logo: Turtle,
        title: "DoFlex",
        description: "Gestion d'objectif sous forme de mindmap. En cours de contruction, DoFlex permettra de visualiser et de gérer ses objectifs personnels et professionnels de manière intuitive et efficace."
    },

];
export type SideProjectProps = {
    logo: LucideIcon;
    title: string;
    description: string;
    url?: string;
};
export const SideProject = (props: SideProjectProps) => {
    return (
        <div className="w-full h-full">
            <Link
                href={props.url ?? "https://www.linkedin.com/in/hamid-bassam-802334207/"}
                className="inline-flex w-full items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
            >
                <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                    <props.logo />
                </span>
                <div>
                    <p className="text-sm font-semibold">{props.title}</p>
                    <p className="text-[0.7rem] text-muted-foreground">{props.description}</p>

                </div>
            </Link>

        </div>
    );
};

