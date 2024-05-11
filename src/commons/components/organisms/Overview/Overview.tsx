import CatchCopy from "../../molecules/CatchCopy/CatchCopy";
import MyImage from "../../atoms/MyImage/MyImage";
import ImageInfos from "@/commons/enums/images.gen";
import LinkButtonWithIcon from "../../atoms/LinkButtonWithIcon/LinkButtonWithIcon";
import { useDesignContext } from "@/commons/contexts/DesignContext";
import LuupBorder from "../../atoms/LuupBorder/LuupBorder";
import { useMediaQuery, mediaQuery } from "@/commons/hooks/useMediaQuery";
import LinkButtonImage from "../../atoms/LinkButtonImage/LinkButtonImage";
import News, { useNewsItem, getDate } from "../News/News";
import "./Overview.css";
import { IImageInfo } from "@/commons/classes/ImageInfo";
import ImageZoomable from "../../atoms/ImageZoomable/ImageZoomable";

function Overview() {
    const { headerScrollPointSecondRef } = useDesignContext();
    const isMobile = useMediaQuery(mediaQuery.sp);

    return (
        <div className="overview flex flex-col space-y-12 md:space-y-[330px] items-center w-full">
            <div className="flex w-full flex-col md:flex-row items-center md:items-stretch" ref={headerScrollPointSecondRef}>
                <div className="w-full md:w-[380px] flex-shrink-0 flex flex-col justify-between pt-10 pl-10 pb-10 pr-8 ">
                    <CatchCopy/>
                    <div className="hidden md:flex flex-col space-y-4">
                        <LinkButtonWithIcon
                            label="新しい交通ルールをチェック"
                            className="h-[60px]"
                        />
                        
                        <LinkButtonWithIcon
                            label="ポート設置のご相談"
                            className="h-[60px]"
                        />
                    </div>
                </div>

                <div className="grow overflow-hidden">
                    <MyImage info={ImageInfos.FirstView} className="first-view" rounded="left" />
                </div>

                {isMobile && <ButtonsForMobile />}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-[1200px]">
                <div className="flex items-center p-4">
                    <p className="leading-8 md:leading-loose text-sm md:text-base">
                        LUUPは、街じゅうのどこにいてもスマホ一つで好きな場所へ簡単に行くことができる、新しい移動の選択肢です。街には「ポート」という移動のハブがあり、いつでもポートからポートへ電動マイクロモビリティに乗って移動することができます。かつて鉄道の駅が街を発展させたように、LUUPのポートを街じゅうに設置することで人が集まる場所をつくり、街じゅうを駅前のように活性化していきます。そして、年齢に関係なく誰もが安全に、シェア型でサステナブルな移動ができる未来のインフラをつくることを目指しています。
                    </p>
                </div>

                <div className="relative p-4">
                    {/* TODO: LuupBorderの置き方 */}
                    <LuupBorder className="hidden md:block"/>
                    <div className="p-2 relative w-full">
                        <MyImage info={ImageInfos.LuupRide} className="z-10"/>
                        <div className="port-num w-full">
                            <p className="text-white text-xl md:text-3xl text-center">
                                全国
                                <span className="text-5xl md:text-7xl shadow">7,600</span>
                                Port
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ButtonsForMobile() {
    return (
        <div className="flex flex-col w-full max-w-[400px] space-y-12 mt-12">
            <div className="flex justify-center items-center space-x-6">
                <LinkButtonImage imageInfo={ImageInfos.AppStore.changeWidth(120)} />
                <LinkButtonImage imageInfo={ImageInfos.GooglePlay.changeWidth(150)} />
            </div>
            
            <LinkButtonWithIcon label="新しい交通ルールをチェック" className="h-[60px] mt-4" />

            <NewsItem
                imageInfo={ImageInfos.News0.changeWidth(134)}
                date={new Date()}
                title="プレミアホテル-CABIN PRESIDENT-東京に「LUUP」のポートを導入"
                className="w-[400px]"
            />
        </div>
    )
}

interface NewsItemProps {
    imageInfo: IImageInfo;
    date: Date;
    title: string;
    className?: string;
}

export function NewsItem({ imageInfo, date, title, className = "" }: NewsItemProps) {
    const { isHovered, handleMouseEnter, handleMouseLeave } = useNewsItem();
    const _className = `flex items-center p-2 border border-gray-200 rounded-md w-full ${className}`;

    const textDecoration = isHovered ? "underline" : "none";

    return (
        <li className={_className}>
            <a className="flex" href="#" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ImageZoomable imageInfo={imageInfo} isHovered={isHovered} className="w-[138px] h-[70px] flex-shrink-0" />
                <div className="flex flex-col space-x-2 space-y-1 justify-center">
                    <div className="flex items-center space-x-3 ml-2">
                        <p className="text-gray-300 text-xs">{getDate(date)}</p>
                        <div className="bg-gray-200 w-[56px] h-[22px] text-center text-xs text-gray-300 rounded-md flex justify-center items-center p-3"><p>PRESS</p></div>
                    </div>
                    {/* TODO: Add Decorarion */}
                    <p className={`text-sm ${textDecoration}`}>{title}</p>
                </div>
            </a>
        </li>
    )
}

export default Overview;
