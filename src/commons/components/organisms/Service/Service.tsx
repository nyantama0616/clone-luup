import GhostText from "../../atoms/GhoastText/GhoastText";
import MyImage from "../../atoms/MyImage/MyImage";
import ImageInfos from "@/commons/enums/images.gen";
import ImageInfo from "@/commons/classes/ImageInfo";
import LinkButtonWithIcon from "../../atoms/LinkButtonWithIcon/LinkButtonWithIcon";

function Service() {
    return (
        <div className="w-full flex flex-col space-y-8 items-center">
            <GhostText
                text="Service"
                size={3}
            />

            <h3>サービス</h3>

            <div className="flex">
                <ServiceItem imageInfo={ImageInfos.ServiceAbout} text="サービスについて" />
                <ServiceItem imageInfo={ImageInfos.ServiceMobility} text="モビリティ紹介" />
                <ServiceItem imageInfo={ImageInfos.ServiceUsage} text="LUUPのご利用方法" />
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
}

// TODO: エフェクト追加
function ServiceItem({ imageInfo, text }: ServiceItemProps) {
    return (
        <div className="p-8 border">
            <MyImage
                info={imageInfo}
            />
            <p className="mt-4">{text}</p>
        </div>
    );
}

export default Service;
