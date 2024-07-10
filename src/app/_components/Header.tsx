"use client";
import Link from "next/link";
import { buttonVariants } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { TwitterIcon } from "./icons/TwitterIcon";



export const Header = () => {


    return (
        <header id="Header" className="sticky top-0 py-4 z-10 backdrop-filter backdrop-blur-sm rounded-sm">

            <Section className="flex items-baseline" >
                <h1 className="text-lg font-bold text-primary">bassams.fr</h1>
                <div className="flex-1" />
                <ul className="flex items-center gap-2">
                    <Link href="https://github.com/hamid-bassam" className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}>
                        <GithubIcon size={12} className="text-foreground" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/hamid-bassam-802334207/" className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}>
                        <LinkedinIcon size={12} className="text-foreground" />
                    </Link>
                    <Link href="https://twitter.com/ronaleddine/" className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}>
                        <TwitterIcon size={12} className="text-foreground" />
                    </Link>
                </ul>
            </Section>
            <div className="header-overlay"></div>
        </header>
    )
        ;
};

