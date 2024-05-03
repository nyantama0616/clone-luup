"use client";

import LinkButtonUnderLined from "@/commons/components/atoms/LinkButtonUnderLined/LinkButtonUnderLined";
import GeneralProps from "@/commons/types/GeneralProps";
import NavWindowBase, { NavWindowProps } from "../NavWindowBase";

function NavWindowService({className="", onMouseLeave}: NavWindowProps) {
    const _className = `grid grid-cols-3 gap-4 p-8 w-[1000px] ${className}`;
    
    return (
        // TODO: なぜwidthを指定しないといけないのか？
        <NavWindowBase className={_className} onMouseLeave={onMouseLeave}>
            <LinkButtonUnderLined
                label="サービスについて"
            />
            
            <LinkButtonUnderLined
                label="交通ルール"
            />
            
            <LinkButtonUnderLined
                label="モビリティ紹介"
            />
            
            <LinkButtonUnderLined
                label="LUUPのご利用方法"
            />
            
            <LinkButtonUnderLined
                label="ヘルプセンター"
            />
            
            <LinkButtonUnderLined
                label="プレスキットダウンロード"
            />
        </NavWindowBase>
    )
}

export default NavWindowService;
