import React from "react";
import Image from "next/image";
import GeneralProps from "@/commons/types/GeneralProps";

interface LinkButtonProps extends GeneralProps {
    /**
     * Button contents
     */
    label: string;

    /**
     * Where to navigate to
     */
    to?: string;

    /**
     * Optional click handler
     */
    onClick?: () => void;
}

function LinkButton({ label, to="#", onClick, width="200px", className="" }: LinkButtonProps) {
    const _className = `bg-white h-11 rounded-md border border-neutral-200 justify-between items-center gap-2.5 inline-flex text-dark hover:bg-dark hover:text-white cursor-pointer w-[${width}] ${className}`;

    return (
        <div className={_className}>
            <div className="text-base font-normal font-['Inter'] ml-4">{label}</div>
            <div className="w-6 h-6 relative mr-4">
                <Image src="/icons/arrow-right.svg" alt="Arrow right" layout="fill" />
            </div>
        </div>
    )
}

export default LinkButton;
