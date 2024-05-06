import React from "react";
import Image from "next/image";
import LinkButtonBase, { LinkButtonProps } from "../LinkButtonBase";

interface LinkButtonNoIconProps extends LinkButtonProps {
    /**
     * Button contents
     */
    label: string;
}

//TODO: h-11消したい
function LinkButtonNoIcon({ label, to, className }: LinkButtonNoIconProps) {
    const _className = `
    h-11 rounded-md border border-neutral-200 flex justify-center items-center
    text-dark hover:bg-dark hover:text-white ${className}
    `;

    return (
        <LinkButtonBase to={to} className={_className}>
            <p className="font-normal font-['Inter']">{label}</p>
        </LinkButtonBase>
    )
}

export default LinkButtonNoIcon;
