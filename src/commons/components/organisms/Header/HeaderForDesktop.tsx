import LuupIcon from "@/commons/assets/icons/luup.svg";
import LinkButtonWithIcon from "../../atoms/LinkButtonWithIcon/LinkButtonWithIcon";
import { useDesignContext, HeaderStatus } from "@/commons/contexts/DesignContext";
import LinkButtonSpawnNavWindow from "../../molecules/LinkButtonSpawnNavWindow/LinkButtonSpawnNavWindow";
import NavWindowWhyLuup from "../../molecules/nav-windows/NavWindowWhyLuup/NavWindowWhyLuup";
import NavWindowService from "../../molecules/nav-windows/NavWindowService/NavWindowService";
import NavWindowPortMap from "../../molecules/nav-windows/NavWindowPortMap/NavWindowPortMap";
import NavWindowCompanyInfo from "../../molecules/nav-windows/NavWindowCompanyInfo/NavWindowCompanyInfo";
import LinkButtonPlain from "../../atoms/LinkButtonPlain/LinkButtonPlain";

function HeaderForDesktop() {
    const { headerStatus } = useDesignContext();
    const headerClassName = headerStatus === HeaderStatus.CLOSED ? "disappear" : "appear";

    return (
        <header className={`w-full h-20 fixed top-0 flex justify-between items-end ${headerClassName}`} >
            <div className="w-20 h-16 relative ml-14">
                {headerStatus == HeaderStatus.SECOND && <LuupIcon className="w-full h-full fill-black" />}
            </div>

            <nav className="flex mr-6 relative items-center">
                <ul className="flex items-center">
                    <li>
                        <LinkButtonSpawnNavWindowContainer
                            label="Why LUUP"
                            navWindow={<NavWindowWhyLuup />}
                        />
                    </li>
                    <li>
                        <LinkButtonSpawnNavWindowContainer
                            label="サービス"
                            navWindow={<NavWindowService />}
                        />
                    </li>
                    <li>
                        <LinkButtonSpawnNavWindowContainer
                            label="ポートマップ"
                            navWindow={<NavWindowPortMap />}
                        />
                    </li>
                    <li className="px-3">
                        <LinkButtonPlain
                            label="News"
                        />
                    </li>
                    <li>
                        <LinkButtonSpawnNavWindowContainer
                            label="企業情報"
                            navWindow={<NavWindowCompanyInfo />}
                        />
                    </li>
                </ul>

                {headerStatus == HeaderStatus.SECOND &&
                    <LinkButtonWithIcon
                        label="ポート設置のご相談"
                        className=" mr-2 w-[230px] h-[60px] text-xs"
                    />
                }
            </nav>
        </header>
    );

}

interface LinkButtonSpawnNavWindowContainerProps {
    label: string;
    navWindow: React.ReactElement;
}

function LinkButtonSpawnNavWindowContainer({ label, navWindow }: LinkButtonSpawnNavWindowContainerProps) {
    const { toggleShowMask } = useDesignContext();

    return (
        <LinkButtonSpawnNavWindow
            label={label}
            navWindow={navWindow}
            onMouseEnter={toggleShowMask}
            onMouseLeave={toggleShowMask}
        />
    );
}

export default HeaderForDesktop;
