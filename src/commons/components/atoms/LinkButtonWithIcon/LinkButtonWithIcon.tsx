import React from "react";
import LinkButtonBase, { LinkButtonProps } from "../LinkButtonBase";
import ArrowRightIcon from "@/commons/assets/icons/arrow-right.svg";
interface LinkButtonWithIconProps extends LinkButtonProps {
    /**
     * Button contents
     */
    label: string;
    textAlign?: "left" | "center" | "right";
}

//TODO: h-11消したい
function LinkButtonWithIcon({ label, to, className, textAlign = "left" }: LinkButtonWithIconProps) {
    const _className = `
    h-11 rounded-md border border-neutral-200 flex items-center gap-2.5 px-4
    text-dark hover:bg-dark hover:text-white transition-colors duration-500 relative ${className}
    `;

    return (
        <LinkButtonBase to={to} className={_className}>
            <p className={`text-${textAlign} w-full`}>{label}</p>
            <ArrowRightIcon className="absolute w-6 right-0 mr-3" />
        </LinkButtonBase>
    )
}

export default LinkButtonWithIcon;
