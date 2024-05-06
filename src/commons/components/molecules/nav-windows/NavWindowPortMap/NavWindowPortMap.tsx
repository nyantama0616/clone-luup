"use client";

import LinkButtonUnderLined from "@/commons/components/atoms/LinkButtonUnderLined/LinkButtonUnderLined";
import NavWindowBase, { NavWindowProps } from "../NavWindowBase";
import DropdownOtherCountry from "../../Dropdown/DropdownOtherCountry/DropdownOtherCountry";

function NavWindowPortMap({className="", onMouseLeave}: NavWindowProps) {
    const _className = `grid grid-cols-4 gap-8 p-8 w-[600px] ${className}`;

    return (
        <NavWindowBase className={_className} onMouseLeave={onMouseLeave}>
            <LinkButtonUnderLined
                label="東京"
            />
            
            <LinkButtonUnderLined
                label="大阪"
            />
            
            <LinkButtonUnderLined
                label="横浜"
            />
            
            <LinkButtonUnderLined
                label="京都"
            />

            {/* TODO: 「その他の街」を追加する */}
            <DropdownOtherCountry className="col-span-2 h-12"/>
        </NavWindowBase>
    )
}

export default NavWindowPortMap;
