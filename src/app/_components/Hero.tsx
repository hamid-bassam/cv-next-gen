'use client'
import { Section } from "./Section";

import { useTranslations } from "next-intl";
import Image from 'next/image';
import { ComponentPropsWithoutRef, useEffect } from "react";
import { cn } from "../../lib/utils";
import pp from './assets/img/pp Hamid-B.png';
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
                <p className="text-[0.8rem]">{t('living')}<Code className=""><img className="w-5 h-auto mr-1 inline-flex" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSG24QVtqDWYqBksVSyK1yULlQWKw_HXQ853vdS-3M5dwS_n4MdgL35AF2WfI&s=10" alt="France"></img>{t('city')}</Code></p>

            </div>

            <div className="flex-1 max-md:m-auto ">
                <div className="relative">
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                    <div className="relative ml-auto overflow-hidden w-36 h-36 max-w-xs max-md:w-56 max-md:h-56 rounded-full bg-gradient-to-r from-sky-300 to-violet-400 hover:scale-125  transition-transform duration-300 hover:shadow-white hover:brightness-105 ease-in-out">

                        <Image src={pp} alt="hamid BASSAM" className="absolute object-center w-auto h-full scale-110 translate-x-8 translate-y-5 max-md:translate-x-12 max-md:translate-y-12 " />
                    </div>
                </div>

            </div>
        </Section>

    );
};

