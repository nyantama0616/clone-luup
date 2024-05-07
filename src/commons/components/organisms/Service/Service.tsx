import GhostText from "../../atoms/GhoastText/GhoastText";
import ImageZoomable from "../../atoms/ImageZoomable/ImageZoomable";
import ImageInfos from "@/commons/enums/images.gen";
import ImageInfo from "@/commons/classes/ImageInfo";
import LinkButtonWithIcon from "../../atoms/LinkButtonWithIcon/LinkButtonWithIcon";
import AwesomeButton from "./AwesomeButton";
import { useDesignContext } from "@/commons/contexts/DesignContext";
import { useState } from "react";

function Service() {
    const { showService, serviceRef } = useDesignContext();
    
    return (
        <div className="w-full flex flex-col space-y-8 items-center" ref={serviceRef}>
            <GhostText
                text="Service"
                className="text-8xl"
                appear={showService}
            />

            <h3 className="text-2xl">サービス</h3>

            <div className="flex">
                <ServiceItem imageInfo={ImageInfos.ServiceAbout} text="サービスについて" />
                <ServiceItem imageInfo={ImageInfos.ServiceMobility} text="モビリティ紹介" />
                <ServiceItem imageInfo={ImageInfos.ServiceUsage} text="LUUPのご利用方法" borderRight/>
            </div>

            {/* TODO: 画像付きにする */}
            {/* TODO: 親要素のspace-y-8のせいで子要素にmarginを指定できないため、divで囲っいる */}
            <div>
                <LinkButtonWithIcon label="新しい交通ルールについて" className="w-[350px] mt-16"/>
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
                    className="w-[740px] h-[450px]"
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
        console.log("enter!");
        
        setIsHovered(true);
    }
    
    function handleMouseLeave() {
        console.log("leave!");
        setIsHovered(false);
    }

    return {
        isHovered,
        handleMouseEnter,
        handleMouseLeave,
    };
}

export default Service;
