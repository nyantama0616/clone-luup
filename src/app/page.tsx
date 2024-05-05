"use client";

import Header from "@/commons/components/organisms/Header/Header";
import Overview from "@/commons/components/organisms/Overview/Overview";
import Advertise from "@/commons/components/organisms/Advertise/Advertise";
import WhyLuup from "@/commons/components/organisms/WhyLuup/WhyLuup";
import Port from "@/commons/components/organisms/Port/Port";
import Service from "@/commons/components/organisms/Service/Service";
import News from "@/commons/components/organisms/News/News";
import HelpAndRecruit from "@/commons/components/organisms/HelpAndRecruit/HelpAndRecruit";
import PortEstablish from "@/commons/components/organisms/PortEstablish/PortEstablish";
import AppDownload from "@/commons/components/organisms/DownloadApp/DownloadApp";
import Contact from "@/commons/components/organisms/Contact/Contact";
import Footer from "@/commons/components/organisms/Footer/Footer";
import Licence from "@/commons/components/organisms/Licence/Licence";
import { useDesignContext, BackgroundStatus } from "@/commons/contexts/DesignContext";
import "./page.css";

function HomePage() {
    const { backgroundStatus, showMask } = useDesignContext();
    
    const bgColor = backgroundStatus === BackgroundStatus.WHITE ? "bg-white" : "bg-dark2";
    const mask = showMask ? "mask" : "";

    return (
        <div className={`relative flex flex-col space-y-16 items-center transition-colors duration-1000 ${bgColor} ${mask}`}>
            <Header />
            <Overview />
            <Advertise />
            <WhyLuup />
            <Port />
            <Service />
            <News />
            <HelpAndRecruit />
            <div>
                <PortEstablish />
                <AppDownload />
            </div>
            <Contact />
            <Footer />
            <Licence />
        </div>
    )
}

export default HomePage;
