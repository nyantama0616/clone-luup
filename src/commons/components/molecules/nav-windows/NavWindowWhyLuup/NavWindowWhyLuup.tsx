"use client";
import LinkButtonUnderLined from "@/commons/components/atoms/LinkButtonUnderLined/LinkButtonUnderLined";
import NavWindowBase, {NavWindowProps} from "../NavWindowBase";

function NavWindowWhyLuup({className="", onMouseLeave}: NavWindowProps) {
    const buttonClassName = "";
    const _className = `grid grid-cols-3 gap-4 p-8 w-[1100px] ${className}`;
    
    return (
        <NavWindowBase className={_className} onMouseLeave={onMouseLeave}>
            <div className="grid grid-cols-3 col-span-3 gap-4">
                <LinkButtonUnderLined
                    label="Why LUUP"
                    className={buttonClassName}
                />
            </div>
            
            <LinkButtonUnderLined
                label="待ちを活性化する次世代インフラ"
                className={buttonClassName}
            />
            
            <LinkButtonUnderLined
                label="街との共生のために"
                className={buttonClassName}
            />
            
            <LinkButtonUnderLined
                label="持続可能な社会の構築に向けて"
                className={buttonClassName}
            />
        </NavWindowBase>
    )
}

export default NavWindowWhyLuup;
