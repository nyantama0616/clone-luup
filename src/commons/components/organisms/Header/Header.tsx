"use client";

import LinkButtonSpawnNavWindow from "../../molecules/LinkButtonSpawnNavWindow/LinkButtonSpawnNavWindow";
import LinkButtonPlain from "../../atoms/LinkButtonPlain/LinkButtonPlain";
import NavWindowWhyLuup from "../../molecules/nav-windows/NavWindowWhyLuup/NavWindowWhyLuup";
import NavWindowService from "../../molecules/nav-windows/NavWindowService/NavWindowService";
import NavWindowPortMap from "../../molecules/nav-windows/NavWindowPortMap/NavWindowPortMap";
import NavWindowCompanyInfo from "../../molecules/nav-windows/NavWindowCompanyInfo/NavWindowCompanyInfo";
import { useDesignContext, HeaderStatus } from "@/commons/contexts/DesignContext";
import LinkButtonWithIcon from "../../atoms/LinkButtonWithIcon/LinkButtonWithIcon";
import LuupIcon from "@/commons/assets/icons/luup.svg";
import "./Header.css";

function Header() {
    const { headerStatus } = useDesignContext();
    const headerClassName = headerStatus === HeaderStatus.CLOSED ? "disappear" : "appear";

    return (
        <header className={`w-full fixed top-0 flex justify-between ${headerClassName}`}>
            <div className="w-20 h-16 relative ml-4">
                {headerStatus == HeaderStatus.SECOND && <LuupIcon className="w-full h-full fill-black" />}
            </div>

            <nav className="flex items-center">
                <ul className="flex p-2">
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
                    <li>
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
                        className="mr-6"
                    />
                }
            </nav>
        </header>
    )
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

export default Header;
