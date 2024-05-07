import React from "react";
import LinkButtonBase, { LinkButtonProps } from "../LinkButtonBase";
import ArrowRightIcon from "@/commons/assets/icons/arrow-right.svg";
interface LinkButtonWithIconProps extends LinkButtonProps {
    /**
     * Button contents
     */
    label: string;
}

//TODO: h-11消したい
function LinkButtonWithIcon({ label, to, className }: LinkButtonWithIconProps) {
    const _className = `
    h-11 rounded-md border border-neutral-200 justify-between items-center gap-2.5 inline-flex px-4
    text-dark hover:bg-dark hover:text-white transition-colors duration-500 ${className}
    `;

    return (
        <LinkButtonBase to={to} className={_className}>
            <div className="font-normal font-['Inter']">{label}</div>
            <ArrowRightIcon className="w-6" />
        </LinkButtonBase>
    )
}

export default LinkButtonWithIcon;
