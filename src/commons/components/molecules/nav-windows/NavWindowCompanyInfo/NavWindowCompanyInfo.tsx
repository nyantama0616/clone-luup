import LinkButtonUnderLined from "@/commons/components/atoms/LinkButtonUnderLined/LinkButtonUnderLined";
import NavWindowBase, { NavWindowProps } from "../NavWindowBase";

function NavWindowCompanyInfo({ className="", onMouseLeave }: NavWindowProps) {
    const width = "250px";
    const _className = `grid grid-cols-2 gap-4 p-8 ${className}`;
    
    return (
        <NavWindowBase className={_className} onMouseLeave={onMouseLeave} width="600px">
            <LinkButtonUnderLined
                label="企業情報"
                width={width}
            />
            
            <LinkButtonUnderLined
                label="採用情報"
                width={width}
            />
        </NavWindowBase>
    )
}

export default NavWindowCompanyInfo;
