import LinkButtonUnderLined from "@/commons/components/atoms/LinkButtonUnderLined/LinkButtonUnderLined";
import GeneralProps from "@/commons/types/GeneralProps";
import NavWindowBase, {NavWindowProps} from "../NavWindowBase";

function NavWindowWhyLuup({className="", onMouseLeave}: NavWindowProps) {
    const width = "300px";
    const _className = `grid grid-cols-3 gap-4 p-8 ${className}`;
    
    return (
        <NavWindowBase className={_className} width="1000px" onMouseLeave={onMouseLeave}>
            <LinkButtonUnderLined
                label="Why LUUP"
                width={width}
            />
            
            {/* TODO: 他の方法を考える */}
            <div></div>
            <div></div>
            
            <LinkButtonUnderLined
                label="待ちを活性化する次世代インフラ"
                width={width}
            />
            
            <LinkButtonUnderLined
                label="街との共生のために"
                width={width}
            />
            
            <LinkButtonUnderLined
                label="持続可能な社会の構築に向けて"
                width={width}
            />
        </NavWindowBase>
    )
}

export default NavWindowWhyLuup;
