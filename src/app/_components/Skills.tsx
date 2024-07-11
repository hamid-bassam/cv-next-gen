
import { Badge } from "../../components/ui/badge";
import { Code } from "./Code";
import { Section } from "./Section";
import { NextJsIcon } from "./icons/NextJsIcon";
import { OpenAiIcon } from "./icons/OpenAiIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TailwindCssIcon } from "./icons/TailwindCssIcon";

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4" >
            <Badge variant="outline">Skills</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I like working on...
            </h2>
            <div className="flex max-md:flex-col gap-4">

                <div className="flex flex-col gap-2 flex-1">
                    <ReactIcon className="animate-spin" size={42} style={{ animationDuration: "10s" }}></ReactIcon>

                    <h3 className="text-2xl font-semibold tracking-tight ">
                        React
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        My main framework is <Code>
                            <ReactIcon size={10} className="inline-flex mr-1 animate-spin" />
                            React
                        </Code>
                        , I also use
                        <Code className="inline-flex items-center">
                            <NextJsIcon size={10} className="inline-flex mr-1" />
                            Next.js
                        </Code> as a backend and frontend framework
                    </p>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <TailwindCssIcon className="animate-pulse" size={42} style={{ animationDuration: "10s" }} />
                    <h3 className="text-2xl font-semibold tracking-tight ">
                        Tailwind
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        I can create <u>beautiful</u> and <u>responsive</u> applications using <Code className="inline-flex items-center"><TailwindCssIcon size={10} className=" mr-1" />TailwindCSS</Code>.
                    </p>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <OpenAiIcon className="animate-spin" size={42} style={{ animationDuration: "10s" }} />

                    <h3 className="text-2xl font-semibold tracking-tight ">
                        AI Integration
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        I learn to integrate AI into my applications to create a perfect <u>user experience</u>. I use <Code className="inline-flex items-center"><OpenAiIcon size={10} className="inline-flex mr-1" />OpenAI</Code> for that.
                    </p>
                </div>
            </div>
        </Section>
    )
        ;
};

