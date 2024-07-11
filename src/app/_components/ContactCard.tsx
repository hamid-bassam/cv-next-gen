import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Card } from "../../components/ui/card";
import { cn } from "../../lib/utils";

export const ContactCard = (props: {
    image: string;
    mediumImage: string;
    name: string;
    description: string;
    url?: string;
    className?: string;
    textSize?: string;
}) => {
    return (
        <Link className={cn("w-full", props.className)} href={props.url ?? "https://google.com"} target="_blank">
            <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
                <div className="relative h-10 w-10">
                    <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-cover object-top " />
                    <img src={props.mediumImage} alt={props.name} className="w-5 h-5 rounded-full object-cover absolute -bottom-1 -right-2" />

                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-2">
                        <p className="text-xs font-semibold">{props.name}</p>
                    </div>
                    <p className={cn("text-[0.6rem] text-muted-foreground", props.textSize)}>{props.description}</p>
                </div>
                <ArrowUpRight className=" group-hover:translate-x-2 group-hover:-translate-y-4 transition-transform" size={16} />
            </Card>
        </Link>

    );
};
