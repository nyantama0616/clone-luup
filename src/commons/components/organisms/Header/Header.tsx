"use client";

import LinkButtonSpawnNavWindow from "../../molecules/LinkButtonSpawnNavWindow/LinkButtonSpawnNavWindow";
import LinkButtonPlain from "../../atoms/LinkButtonPlain/LinkButtonPlain";
import NavWindowWhyLuup from "../../molecules/nav-windows/NavWindowWhyLuup/NavWindowWhyLuup";
import NavWindowService from "../../molecules/nav-windows/NavWindowService/NavWindowService";
import NavWindowPortMap from "../../molecules/nav-windows/NavWindowPortMap/NavWindowPortMap";
import NavWindowCompanyInfo from "../../molecules/nav-windows/NavWindowCompanyInfo/NavWindowCompanyInfo";
import { useDesignContext, HeaderStatus } from "@/commons/contexts/DesignContext";
import "./Header.css";

function Header() {
    const { headerStatus } = useDesignContext();
    const headerClassName = headerStatus === HeaderStatus.CLOSED ? "disappear" : "appear";
    return (
        <header className={`w-full fixed top-0 ${headerClassName}`}>
            <nav className="flex justify-end">
                <ul className="flex p-2">
                    <li>
                        <LinkButtonSpawnNavWindow
                            label="Why LUUP"
                            navWindow={<NavWindowWhyLuup />}
                        />
                    </li>
                    <li>
                        <LinkButtonSpawnNavWindow
                            label="サービス"
                            navWindow={<NavWindowService />}
                        />
                    </li>
                    <li>
                        <LinkButtonSpawnNavWindow
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
                        <LinkButtonSpawnNavWindow
                            label="企業情報"
                            navWindow={<NavWindowCompanyInfo />}
                        />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
