import React from "react";
import Image from "next/image";
import LinkButtonBase, { LinkButtonProps } from "../LinkButtonBase";

interface LinkButtonWithIconProps extends LinkButtonProps {
    /**
     * Button contents
     */
    label: string;
}

//TODO: h-11消したい
function LinkButtonWithIcon({ label, to, className }: LinkButtonWithIconProps) {
    const _className = `h-11 rounded-md border border-neutral-200 justify-between items-center gap-2.5 inline-flex text-dark hover:bg-dark hover:text-white ${className}`;

    return (
        <LinkButtonBase to={to} className={_className}>
            <div className="text-base font-normal font-['Inter'] ml-4">{label}</div>
            <div className="w-6 h-6 relative mr-4">
                <Image src="/icons/arrow-right.svg" alt="Arrow right" layout="fill" />
            </div>
        </LinkButtonBase>
    )
}

export default LinkButtonWithIcon;
