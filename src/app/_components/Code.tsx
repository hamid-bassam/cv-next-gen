import { ComponentPropsWithoutRef } from "react";
import { cn } from "../../lib/utils";


export const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
    return (
        <span
            className={cn("bg-accent/30 border  border-accent p-1 rounded-sm text-primary font-mono", className)}
            {...props}
        />
    )
        ;
};

