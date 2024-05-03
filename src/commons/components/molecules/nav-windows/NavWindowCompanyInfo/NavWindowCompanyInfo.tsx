"use client";

import LinkButtonUnderLined from "@/commons/components/atoms/LinkButtonUnderLined/LinkButtonUnderLined";
import NavWindowBase, { NavWindowProps } from "../NavWindowBase";

function NavWindowCompanyInfo({ className="", onMouseLeave }: NavWindowProps) {
    const _className = `grid grid-cols-2 gap-4 p-8 w-[600px] ${className}`;
    
    return (
        <NavWindowBase className={_className} onMouseLeave={onMouseLeave}>
            <LinkButtonUnderLined
                label="企業情報"
            />
            
            <LinkButtonUnderLined
                label="採用情報"
            />
        </NavWindowBase>
    )
}

export default NavWindowCompanyInfo;
