import GhostText from "../../atoms/GhoastText/GhoastText";
import ImageZoomable from "../../atoms/ImageZoomable/ImageZoomable";
import ImageInfos from "@/commons/enums/images.gen";
import ImageInfo from "@/commons/classes/ImageInfo";
import AwesomeButton from "./AwesomeButton";
import { useDesignContext } from "@/commons/contexts/DesignContext";
import { useState } from "react";
import LinkButtonWithImage from "../../atoms/LinkButtonWithImage/LinkButtonWithImage";
import { useMediaQuery, mediaQuery } from "@/commons/hooks/useMediaQuery";

function Service() {
    const { showService, serviceRef } = useDesignContext();
    const isMobile = useMediaQuery(mediaQuery.sp);

    const images = isMobile ? {
        about: ImageInfos.ServiceAboutSp.changeWidth(480),
        mobility: ImageInfos.ServiceMobilitySp.changeWidth(480),
        usage: ImageInfos.ServiceUsageSp.changeWidth(480),
    } : {
        about: ImageInfos.ServiceAbout,
        mobility: ImageInfos.ServiceMobility,
        usage: ImageInfos.ServiceUsage,
    };
    
    return (
        <div className="w-full flex flex-col space-y-8 md:items-center" ref={serviceRef}>
            <GhostText
                text="Service"
                className="pl-8 md:pl-0 text-6xl md:text-8xl"
                appear={showService}
            />

            <h3 className="pl-8 md:pl-0 text-xl md:text-2xl">サービス</h3>

            <div className="flex flex-col md:grid md:grid-cols-3">
                <ServiceItem imageInfo={images.about} text="サービスについて" />
                <ServiceItem imageInfo={images.mobility} text="モビリティ紹介" />
                <ServiceItem imageInfo={images.usage} text="LUUPのご利用方法" borderRight/>
            </div>

            {/* TODO: 親要素のspace-y-8のせいで子要素にmarginを指定できないため、divで囲っいる */}
            <div className="p-8">
                <LinkButtonWithImage
                    label="新しい交通ルールについて"
                    imageInfo={ImageInfos.NewTraffic}
                    className="w-full md:w-[480px]"
                />
            </div>
        </div>
    );
}

interface ServiceItemProps {
    imageInfo: ImageInfo;
    text: string;
    borderRight?: boolean;
}

// TODO: エフェクト追加
function ServiceItem({ imageInfo, text, borderRight = false }: ServiceItemProps) {
    const { isHovered, handleMouseEnter, handleMouseLeave } = useServiceItem();

    const border = borderRight ? "border-x" : "border-l";

    return (
        <div className={`p-8 border-y ${border}`}>
            <div className="flex flex-col space-y-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ImageZoomable
                    imageInfo={imageInfo}
                    className="w-full h-[240px] md:h-[450px]"
                    isHovered={isHovered}
                />
                <AwesomeButton label={text} isHovered={isHovered} />
            </div>
        </div>
    );
}

interface ServiceItemController {
    isHovered: boolean;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
}

function useServiceItem(): ServiceItemController {
    const [isHovered, setIsHovered] = useState(false);
    
    function handleMouseEnter() {
        setIsHovered(true);
    }
    
    function handleMouseLeave() {
        setIsHovered(false);
    }

    return {
        isHovered,
        handleMouseEnter,
        handleMouseLeave,
    };
}

export default Service;
