import LinkButtonUnderLined from "@/commons/components/atoms/LinkButtonUnderLined/LinkButtonUnderLined";
import GeneralProps from "@/commons/types/GeneralProps";
import NavWindowBase, { NavWindowProps } from "../NavWindowBase";

function NavWindowService({className="", onMouseLeave}: NavWindowProps) {
    const width = "280px";
    const _className = `grid grid-cols-3 gap-4 p-8 ${className}`;
    
    return (
        // TODO: なぜwidthを指定しないといけないのか？
        <NavWindowBase className={_className} width="1000px" onMouseLeave={onMouseLeave}>
            <LinkButtonUnderLined
                label="サービスについて"
                width={width}
            />
            
            <LinkButtonUnderLined
                label="交通ルール"
                width={width}
            />
            
            <LinkButtonUnderLined
                label="モビリティ紹介"
                width={width}
            />
            
            <LinkButtonUnderLined
                label="LUUPのご利用方法"
                width={width}
            />
            
            <LinkButtonUnderLined
                label="ヘルプセンター"
                width={width}
            />
            
            <LinkButtonUnderLined
                label="プレスキットダウンロード"
                width={width}
            />
        </NavWindowBase>
    )
}

export default NavWindowService;
