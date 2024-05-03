import LinkButtonUnderLined from "@/commons/components/atoms/LinkButtonUnderLined/LinkButtonUnderLined";
import NavWindowBase, { NavWindowProps } from "../NavWindowBase";

function NavWindowPortMap({className="", onMouseLeave}: NavWindowProps) {
    const _className = `grid grid-cols-4 gap-4 p-8 ${className}`;

    return (
        <NavWindowBase className={_className} onMouseLeave={onMouseLeave} width="600px">
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
        </NavWindowBase>
    )
}

export default NavWindowPortMap;
