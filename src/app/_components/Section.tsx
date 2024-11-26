import { PropsWithChildren } from "react";
import { cn } from "../../lib/utils";


export const Section = (props: PropsWithChildren<{ id?: string, className?: string }>) => {
    return (
        <section className={cn("max-w-4xl m-auto max-md:px-6", props.className)}>
            {props.children}
        </section>
    );
};


