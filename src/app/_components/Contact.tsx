
import { Badge } from "../../components/ui/badge";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";
import smallImg from "./assets/img/Lisa Di Vito-9.jpg";
import pp from "./assets/img/pp Hamid-B.png";

export const Contact = () => {
    return (
        <Section className="flex flex-col items-start gap-4" >
            <Badge variant="outline">Contact me</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I will be happy to work with you.
            </h2>
            <div className="flex max-md:flex-col items-center justify-center w-full gap-4">

                <ContactCard
                    url="https://www.linkedin.com/in/hamid-bassam-802334207/"
                    name="@hamid-bassam"
                    image={pp.src}
                    mediumImage="https://png.pngtree.com/png-clipart/20190614/original/pngtree-linkedin-social-media-icon-png-image_3609691.jpg"
                    description="Software Engineer"
                    className="flex-1"
                />
                <ContactCard
                    url="https://www.instagram.com/hamid.bassam.7/"
                    name="@hamid.bassam.7"
                    image={smallImg.src}
                    mediumImage="https://logo-marque.com/wp-content/uploads/2020/04/Instagram-Embleme.png"
                    description="🇲🇦☮️💟💻🎓🎸🎼🥂🏐🎾🎮🪶🥇"
                    className="flex-1"
                />
                <ContactCard
                    name="hamid.bassam.147@gmail.com"
                    image={"https://lh3.googleusercontent.com/a/ACg8ocI7880lLaH-072t7wxRBIgWg_mtXsPMHxqypsE3fQkTZrPYNNhX=s720-c-no"}
                    mediumImage="https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI"
                    description="Email me for any inqueries."
                    url="mailto:hamid.bassam.147@gmail.com"
                    className="flex-1"
                />

            </div>
        </Section>
    )
        ;
};

