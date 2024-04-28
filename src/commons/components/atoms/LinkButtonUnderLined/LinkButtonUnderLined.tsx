import React from "react";
import Image from "next/image";

interface LinkButtonProps {
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
    
    /**
     * Optional width
     */
    width?: string;
}

function LinkButtonUnderLined({ label, to="#", onClick, width="200px" }: LinkButtonProps) {
    return (
        <div className={`bg-white h-11 border-b border-gray-200 justify-between items-center gap-2.5 inline-flex text-dark hover:bg-gray-100 cursor-pointer`} style={{width: width}}>
            <div className="text-base font-normal font-['Inter'] ml-2">{label}</div>
            <div className="w-6 h-6 relative mr-2">
                <Image src="/icons/arrow-right.svg" alt="Arrow right" layout="fill" />
            </div>
        </div>
    )
}

export default LinkButtonUnderLined;
