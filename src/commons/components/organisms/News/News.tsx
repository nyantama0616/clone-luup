import LinkButtonPlain from "../../atoms/LinkButtonPlain/LinkButtonPlain";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import ImageInfo from "@/commons/classes/ImageInfo";
import MyImage from "../../atoms/MyImage/MyImage";
import ImageInfos from "@/commons/enums/images.gen";

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

                    {/* TODO: 仮実装 */}
                    <div className="w-[100px] h-[50px] border">
                        <p className="text-center">期間で検索</p>
                    </div>

                    <LinkButton label="News一覧へ" />
                </div>

                <div className="col-span-3">
                    <h5 className="pb-4">最新情報</h5>
                    <ul>
                        <NewsItem imageInfo={ImageInfos.News0} date={new Date()} title="プレミアホテル-CABIN PRESIDENT-東京に「LUUP」のポートを導入"/>
                        <NewsItem imageInfo={ImageInfos.News1} date={new Date()} title="電動アシスト自転車の動産信託等を通じた、三菱UFJ銀行と三菱UFJ信託銀行 協働でのLuupの事業拡大支援について"/>
                        <NewsItem imageInfo={ImageInfos.News2} date={new Date()} title="【電動キックボード提供開始3周年記念】東京・大阪市・京都市限定「乗り放題ウィーク」を開催"/>
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
}

function NewsItem({ imageInfo, date, title }: NewsItemProps) {
    return (
        <li className="grid grid-cols-4 border-t pt-8 border-b pb-8 gap-4">
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
