import LinkButtonPlain from "../../atoms/LinkButtonPlain/LinkButtonPlain";
import LinkButtonWithIcon from "../../atoms/LinkButtonWithIcon/LinkButtonWithIcon";
import ImageInfo from "@/commons/classes/ImageInfo";
import MyImage from "../../atoms/MyImage/MyImage";
import ImageInfos from "@/commons/enums/images.gen";
import DropdownPeriod from "../../molecules/Dropdown/DropdownPeriod/DropdownPeriod";

function News() {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-4 gap-16 w-[1100px] bg-white p-16 rounded-md">
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
                        <NewsItem imageInfo={ImageInfos.News0} date={new Date()} title="プレミアホテル-CABIN PRESIDENT-東京に「LUUP」のポートを導入"/>
                        <NewsItem imageInfo={ImageInfos.News1} date={new Date()} title="電動アシスト自転車の動産信託等を通じた、三菱UFJ銀行と三菱UFJ信託銀行 協働でのLuupの事業拡大支援について"/>
                        <NewsItem imageInfo={ImageInfos.News2} date={new Date()} title="【電動キックボード提供開始3周年記念】東京・大阪市・京都市限定「乗り放題ウィーク」を開催" className="border-b"/>
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

function NewsItem({ imageInfo, date, title, className="" }: NewsItemProps) {
    const _className = `grid grid-cols-4 pt-8 border-t pb-8 gap-4 ${className}`;

    return (
        <li className={_className}>
            <MyImage info={imageInfo} />
            <div className="col-span-3 flex flex-col space-x-1 justify-center">
                <p>{date.toUTCString()}</p>
                {/* TODO: Add Decorarion */}
                <a href="#">{title}</a>
            </div>
        </li>
    )
}

export default News;
