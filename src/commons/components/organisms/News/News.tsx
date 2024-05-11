import LinkButtonPlain from "../../atoms/LinkButtonPlain/LinkButtonPlain";
import LinkButtonWithIcon from "../../atoms/LinkButtonWithIcon/LinkButtonWithIcon";
import ImageInfo from "@/commons/classes/ImageInfo";
// import MyImage from "../../atoms/MyImage/MyImage";
import ImageInfos from "@/commons/enums/images.gen";
import DropdownPeriod from "../../molecules/Dropdown/DropdownPeriod/DropdownPeriod";
import ArrowRightIcon from "@/commons/assets/icons/arrow-right.svg";
import ImageZoomable from "../../atoms/ImageZoomable/ImageZoomable";
import { useState } from "react";
import { useMediaQuery, mediaQuery } from "@/commons/hooks/useMediaQuery";

function News() {
    const isMobile = useMediaQuery(mediaQuery.sp);
    const imageWidth = isMobile ? 94 : 178;

    return (
        <div className="flex justify-center">
            <div className="flex flex-col space-y-12 md:space-y-0 md:flex-row md:space-x-24 w-full md:w-[1250px] bg-white px-8 md:px-24 pb-16 rounded-md relative">
                <div className="flex flex-col space-y-4 md:w-[200px] md:h-[370px] pt-16 md:sticky top-0">
                    <div>
                        <h1 className="text-5xl mb-2">News</h1>
                        <ul className="flex md:flex-col">
                            <li>
                                <LinkButtonPlain label="ALL" textAlign="left" className="text-gray-200"/>
                            </li>

                            <li>
                                <LinkButtonPlain label="PRESS" textAlign="left" className="text-gray-200"/>
                            </li>

                            <li>
                                <LinkButtonPlain label="おしらせ" textAlign="left" className="text-gray-200"/>
                            </li>
                        </ul>
                    </div>

                    <DropdownPeriod className="w-[200px] h-12 text-sm z-10"/>

                    <LinkButtonWithIcon label="News一覧へ" className="hidden md:flex w-[200px] text-sm"/>
                </div>

                <div className="md:pt-16 md:w-[750px]">
                    <h5 className="pb-4">最新情報</h5>
                    <ul>
                        <NewsItem imageInfo={ImageInfos.News0.changeWidth(imageWidth)} date={new Date()} title="プレミアホテル-CABIN PRESIDENT-東京に「LUUP」のポートを導入"/>
                        <NewsItem imageInfo={ImageInfos.News1.changeWidth(imageWidth)} date={new Date()} title="電動アシスト自転車の動産信託等を通じた、三菱UFJ銀行と三菱UFJ信託銀行 協働でのLuupの事業拡大支援について"/>
                        <NewsItem imageInfo={ImageInfos.News2.changeWidth(imageWidth)} date={new Date()} title="【電動キックボード提供開始3周年記念】東京・大阪市・京都市限定「乗り放題ウィーク」を開催" className="border-b"/>
                    </ul>
                </div>

                <LinkButtonWithIcon label="News一覧へ" className="md:hidden w-full h-[60px] text-xs" />
            </div>
        </div>
    );
}

interface NewsItemProps {
    imageInfo: ImageInfo;
    date: Date;
    title: string;
    className?: string;
}

export function NewsItem({ imageInfo, date, title, className = "" }: NewsItemProps) {
    const { isHovered, handleMouseEnter, handleMouseLeave } = useNewsItem();
    const _className = `flex items-center border-t ${className}`;

    const textDecoration = isHovered ? "underline" : "none";
    
    return (
        <li className={_className}>
            <a className="grid grid-cols-4 py-2 md:py-8 md:gap-4 items-center" href="#" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ImageZoomable imageInfo={imageInfo} isHovered={isHovered} className="w-[100px] h-[50px] md:w-[180px] md:h-[96px]" rounded={false} />
                <div className="col-span-3 flex flex-col space-x-2 space-y-1 justify-center">
                    <div className="flex items-center space-x-3 ml-2">
                        <p className="text-gray-300 text-xs">{getDate(date)}</p>
                        <div className="bg-gray-200 w-[56px] h-[22px] text-center text-xs text-gray-300 rounded-md flex justify-center items-center p-3"><p>PRESS</p></div>
                    </div>
                    <p className={textDecoration}>{title}</p>
                </div>
            </a>

            <div className="ml-4">
                <ArrowRightIcon />
            </div>
        </li>
    )
}

interface NewsItemController {
    isHovered: boolean;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
}

export function useNewsItem(): NewsItemController {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return { isHovered, handleMouseEnter, handleMouseLeave };
}

export function getDate(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
}

export default News;
