"use client";
import { Card } from "../../components/ui/card";
import { ContactCard } from "./ContactCard";

import smallImg from "./assets/img/Lisa Di Vito-9.jpg";
import { Section } from "./Section";
import { SIDE_PROJECTS, SideProject } from "./SideProjects";
import { WORKS, Work } from "./Work";


import { useTranslations } from "next-intl";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import pp from "./assets/img/pp Hamid-B.png";
import { HOBBIES, Hobby } from "./Hobby";

export const Status = () => {

    const t = useTranslations("Home");

    return (
        <Section className="flex max-md:flex-col items-start gap-4">

            {/*<div className="flex-1"></div>*/}
            <div className="flex-[2] w-full flex flex-col gap-4">
                <Card className="p-4 flex-1 flex flex-col gap-2 pb-3">
                    <p className="text-lg font-extrabold text-muted-foreground">{t("Work.title")}</p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => (
                            <Work
                                key={index}
                                {...work}
                            />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-2 pb-5">
                    <p className="text-lg  font-extrabold  text-muted-foreground">{t("Contact.title")}</p>
                    <ContactCard
                        url="https://www.linkedin.com/in/hamid-bassam-802334207/"
                        name={t("Contact.LinkedIn.user")}
                        image={pp.src}
                        mediumImage="https://png.pngtree.com/png-clipart/20190614/original/pngtree-linkedin-social-media-icon-png-image_3609691.jpg"
                        description={t("Contact.LinkedIn.title")}
                    />
                    <ContactCard
                        url="https://www.instagram.com/hamid.bassam.7/"
                        name={t("Contact.Instagram.user")}
                        image={smallImg.src}
                        mediumImage="https://logo-marque.com/wp-content/uploads/2020/04/Instagram-Embleme.png"
                        description="🇲🇦 ☮️ 💟 💻 🎓 🎸 🎼 🥂 🏐 🎾 🎮 🪶 🥇"
                        textSize="text-xs"
                    />

                </Card>
            </div>


            <div className="flex-[2] w-full flex flex-col gap-4">
                <Card className=" flex-[2] p-4 w-full flex flex-col gap-2 pb-6">
                    <p className="text-lg font-extrabold text-muted-foreground">{t("SideProjects.title")}</p>
                    <div className="flex w-full flex-col gap-5">
                        {SIDE_PROJECTS.map((project, index) => (

                            <SideProject
                                key={index}
                                {...project}
                            />
                        ))}
                    </div>


                </Card>
                <Card className=" flex-[2] p-4 w-full flex flex-col gap-2 ">
                    <p className="text-lg font-extrabold text-muted-foreground">{t("Hobby.title")}</p>

                    <CardContainer className="inter-var w-full h-full  max-w-sm flex-[1]  items-center gap-2 p-0  m-auto">

                        <CardBody className=" relative group/card  dark:hover:shadow-md dark:hover:shadow-emerald-500/[0.1] h-full  ">
                            <CardItem
                                as="div"
                                translateZ="100"
                                className="flex  flex-col w-full  gap-4 items-center"
                            >
                                {/*  */}
                                <div className="flex flex-wrap min-h-10 h-full w-full self-start items-center space-y-2 md:space-x-8 max-md:gap-2">
                                    {HOBBIES.map((h, i) => (
                                        <Hobby key={i} hobby={h.hobby} src={h.src} cn={h.cn} />
                                    ))}

                                </div>
                                {/*  */}
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                </Card>



            </div>
        </Section>
    )
        ;
};


