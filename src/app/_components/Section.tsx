import { PropsWithChildren } from "react";
import { cn } from "../../lib/utils";


export const Section = (props: PropsWithChildren<{ id?: string, className?: string }>) => {
    return (
        <section className={cn("max-w-4xl m-auto", props.className)}>
            {props.children}
        </section>
    );
};


