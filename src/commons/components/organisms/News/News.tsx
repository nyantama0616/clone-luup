import LinkButtonPlain from "../../atoms/LinkButtonPlain/LinkButtonPlain";
import LinkButtonWithIcon from "../../atoms/LinkButtonWithIcon/LinkButtonWithIcon";
import ImageInfo from "@/commons/classes/ImageInfo";
// import MyImage from "../../atoms/MyImage/MyImage";
import ImageInfos from "@/commons/enums/images.gen";
import DropdownPeriod from "../../molecules/Dropdown/DropdownPeriod/DropdownPeriod";
import ArrowRightIcon from "@/commons/assets/icons/arrow-right.svg";
import ImageZoomable from "../../atoms/ImageZoomable/ImageZoomable";
import { useState } from "react";

function News() {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-4 gap-16 w-[1250px] bg-white p-16 rounded-md">
                <div className="col-span-1 flex flex-col space-y-4">
                    <div>
                        <h1 className="text-5xl">News</h1>
                        <ul>
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

                    <DropdownPeriod className="h-12 text-sm"/>

                    <LinkButtonWithIcon label="News一覧へ" className="text-sm"/>
                </div>

                <div className="col-span-3">
                    <h5 className="pb-4">最新情報</h5>
                    <ul>
                        <NewsItem imageInfo={ImageInfos.News0.changeWidth(178)} date={new Date()} title="プレミアホテル-CABIN PRESIDENT-東京に「LUUP」のポートを導入"/>
                        <NewsItem imageInfo={ImageInfos.News1.changeWidth(178)} date={new Date()} title="電動アシスト自転車の動産信託等を通じた、三菱UFJ銀行と三菱UFJ信託銀行 協働でのLuupの事業拡大支援について"/>
                        <NewsItem imageInfo={ImageInfos.News2.changeWidth(178)} date={new Date()} title="【電動キックボード提供開始3周年記念】東京・大阪市・京都市限定「乗り放題ウィーク」を開催" className="border-b"/>
                        {/* TODO: 一番下のborderラインを消す */}
                    </ul>
                </div>
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

function NewsItem({ imageInfo, date, title, className = "" }: NewsItemProps) {
    const { isHovered, handleMouseEnter, handleMouseLeave } = useNewsItem();
    const _className = `flex items-center border-t ${className}`;

    const textDecoration = isHovered ? "underline" : "none";
    
    return (
        <li className={_className}>
            <a className="grid grid-cols-4 pt-8 pb-8 gap-4" href="#" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {/* <MyImage info={imageInfo} /> */}
                <ImageZoomable imageInfo={imageInfo} isHovered={isHovered} className="w-[180px] h-[96px]"/>
                <div className="col-span-3 flex flex-col space-x-1 space-y-1 justify-center">
                    <div className="flex items-center space-x-3">
                        <p className="text-gray-300 text-xs">{getDate(date)}</p>
                        <div className="bg-gray-200 w-[56px] h-[22px] text-center text-xs text-gray-300 rounded-md flex justify-center items-center p-3"><p>PRESS</p></div>
                    </div>
                    {/* TODO: Add Decorarion */}
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

function useNewsItem(): NewsItemController {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return { isHovered, handleMouseEnter, handleMouseLeave };
}

function getDate(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month}.${day}`;
}

export default News;
