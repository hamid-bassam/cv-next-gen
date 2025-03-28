"use client"
import { Bike, Bitcoin, CircleAlert, Clock3, CodeXml, Infinity as Inf, ListTodo, LucideIcon, SquareUserRound } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";



export const SIDE_PROJECTS: SideProjectProps[] = [
    {
        logo: Inf,
        title: "HbalTrbah.title",
        description: "HbalTrbah.description",
    },
    {
        logo: Clock3,
        title: "TimeForgeApp.title",
        description: "TimeForgeApp.description",
    },
    {
        logo: SquareUserRound,
        title: "Portfolio.title",
        description: "Portfolio.description"
    },
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
                {/* <div className="relative w-full min-h-[6rem] h-full group max-sm:hidden">
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-600 ease-in-out opacity-0 group-hover:opacity-100">
                        <Button variant={"secondary"}>Nouveau Contenu</Button>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
                        <p className="text-sm font-semibold">{t(props.title)}</p>
                        <p className="text-[0.7rem] text-muted-foreground">{t(props.description)}</p>
                    </div>
                </div>
                <div className="hidden max-sm:flex flex-col gap-2">
                    <p className="text-sm font-semibold">{t(props.title)}</p>
                    <p className="text-[0.7rem] text-muted-foreground">{t(props.description)}</p>
                </div> */}
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-semibold">{t(props.title)}</p>
                    <p className="text-[0.7rem] text-muted-foreground">{t(props.description)}</p>
                </div>
            </Link>
        </div>


    );
};

