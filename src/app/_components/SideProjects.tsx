"use client"
import { Bike, Bitcoin, CircleAlert, CodeXml, ListTodo, LucideIcon, SquareUserRound } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";



export const SIDE_PROJECTS: SideProjectProps[] = [
    {
        logo: Bitcoin,
        title: 'SwapBot.title',
        description: 'SwapBot.description',
    },
    {
        logo: CircleAlert,
        title: "BuyBot.title",
        description: "BuyBot.description"
    },
    {
        logo: Bike,
        title: "WheelEazy.title",
        description: "WheelEazy.description",
    },
    {
        logo: CodeXml,
        title: "TailwindGenAI.title",
        description: "TailwindGenAI.description",
        url: "http://localhost:3004/"
    },
    {
        logo: ListTodo,
        title: "DoFlex.title",
        description: "DoFlex.description"
    },
    {
        logo: SquareUserRound,
        title: "Portfolio.title",
        description: "Portfolio.description"
    }

];
export type SideProjectProps = {
    logo: LucideIcon;
    title: string;
    description: string;
    url?: string;
};
export const SideProject = (props: SideProjectProps) => {

    const t = useTranslations("Home.SideProjects.Projects");
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
                    <p className="text-sm font-semibold">{t(props.title)}</p>
                    <p className="text-[0.7rem] text-muted-foreground">{t(props.description)}</p>

                </div>
            </Link>

        </div>
    );
};

