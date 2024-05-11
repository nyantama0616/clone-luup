"use client";

import LinkButtonSpawnNavWindow from "../../molecules/LinkButtonSpawnNavWindow/LinkButtonSpawnNavWindow";
import { useDesignContext, HeaderStatus } from "@/commons/contexts/DesignContext";
import { mediaQuery, useMediaQuery } from "@/commons/hooks/useMediaQuery";
import HeaderForMobile from "./HeaderForMobile";
import HeaderForDesktop from "./HeaderForDesktop";
import "./Header.css";


function Header() {
    const { headerStatus } = useDesignContext();
    const headerClassName = headerStatus === HeaderStatus.CLOSED ? "disappear" : "appear";

    const isMobile = useMediaQuery(mediaQuery.sp);
    const header = isMobile ? <HeaderForMobile /> : <HeaderForDesktop />;

    return (
        <>
            {header}
        </>
    );
}

export default Header;
