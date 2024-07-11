"use client";
import { Card } from "../../components/ui/card";
import { ContactCard } from "./ContactCard";

import smallImg from "./assets/img/Lisa Di Vito-9.jpg";
import { Section } from "./Section";
import { SIDE_PROJECTS, SideProject } from "./SideProjects";
import { WORKS, Work } from "./Work";


import pp from "./assets/img/pp Hamid-B.png";

export const Status = () => {



    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <Card className=" flex-[2] p-4 w-full flex flex-col gap-2">
                <p className="text-lg font-extrabold text-muted-foreground">Side, fun projects</p>
                <div className="flex w-full flex-col gap-5">
                    {SIDE_PROJECTS.map((project, index) => (

                        <SideProject
                            key={index}
                            {...project}
                        />
                    ))}
                </div>

            </Card>
            {/*<div className="flex-1"></div>*/}
            <div className="flex-[2] w-full flex flex-col gap-4">
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg font-extrabold text-muted-foreground">Work</p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => (
                            <Work
                                key={index}
                                {...work}
                            />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Contact me</p>
                    <ContactCard
                        url="https://www.linkedin.com/in/hamid-bassam-802334207/"
                        name="@hamid-bassam"
                        image={pp.src}
                        mediumImage="https://png.pngtree.com/png-clipart/20190614/original/pngtree-linkedin-social-media-icon-png-image_3609691.jpg"
                        description="Software Engineer"
                    />
                    <ContactCard
                        url="https://www.instagram.com/hamid.bassam.7/"
                        name="@hamid.bassam.7"
                        image={smallImg.src}
                        mediumImage="https://logo-marque.com/wp-content/uploads/2020/04/Instagram-Embleme.png"
                        description="🇲🇦 ☮️ 💟 💻 🎓 🎸 🎼 🥂 🏐 🎾 🎮 🪶 🥇"
                        textSize="text-xs"
                    />

                </Card>
            </div>
        </Section>
    )
        ;
};


