import LinkButtonUnderLined from "@/commons/components/atoms/LinkButtonUnderLined/LinkButtonUnderLined";
import GeneralProps from "@/commons/types/GeneralProps";
import NavWindowBase, { NavWindowProps} from "../NavWindowBase";

function NavWindowPortMap({className="", onMouseLeave}: NavWindowProps) {
    const width = "100px";
    const _className = `grid grid-cols-4 gap-4 p-8 ${className}`;

    return (
        <NavWindowBase className={_className} onMouseLeave={onMouseLeave} width="500px">
            <LinkButtonUnderLined
                label="東京"
                width={width}
            />
            
            <LinkButtonUnderLined
                label="大阪"
                width={width}
            />
            
            <LinkButtonUnderLined
                label="横浜"
                width={width}
            />
            
            <LinkButtonUnderLined
                label="京都"
                width={width}
            />

            {/* TODO: 「その他の街」を追加する */}
        </NavWindowBase>
    )
}

export default NavWindowPortMap;
