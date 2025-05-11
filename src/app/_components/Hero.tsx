'use client'
import { Section } from "./Section";

import { useTranslations } from "next-intl";
import { ComponentPropsWithoutRef, useEffect } from "react";
import { cn } from "../../lib/utils";
// import { ProfilImageComponent } from "./ProfilImageComponent";
import { ProfilImageDialogTrigger } from "./ProfilImageDialogTrigger";
const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
    return <span className={cn("inline-flex items-center gap-1 bg-accent/30 hover:bg-accent/50 transition-colors font-mono  border border-accent p-1 rounded-sm text-primary ")} {...props} />
};

export const Hero = () => {

    useEffect(() => {
        const element = document.getElementById("Hero");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const t = useTranslations('Home.Hero');

    return (

        <Section id="Hero" className="flex max-md:flex-col items-start gap-4" >
            <div className=" flex-[4] flex flex-col gap-2">

                <h2 className="font-caption font-bold text-3xl text-primary">{t("name")}</h2>
                <h3 className="text-2xl font-caption">{t('title')}</h3>
                <p className="font-bold text-base">{t('keywords')}</p>
                <p className="text-[0.8rem]">{t('living')}
                    <Code className="">
                        <img className="w-5 h-auto mr-1 inline-flex" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSG24QVtqDWYqBksVSyK1yULlQWKw_HXQ853vdS-3M5dwS_n4MdgL35AF2WfI&s=10" alt="France"></img>
                        {/* <img className="w-5 h-auto mr-1 inline-flex" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbAA7WKpxLrxl45FWQ7_AzUlcrM0uNDKtqqQ&s" alt="Belgique"></img> */}
                        {t('city')}
                    </Code>
                </p>

            </div>

            <div className="flex-1 max-md:m-auto ">
                <ProfilImageDialogTrigger />
                {/* <ProfilImageComponent /> */}

            </div>
        </Section>

    );
};

