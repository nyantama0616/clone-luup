"use client";
import GhostText from "../../atoms/GhoastText/GhoastText";
import ImageSlider from "../../molecules/ImageSlider/ImageSlider";
import ImageInfos from "@/commons/enums/images.gen";
import LinkButtonWithIcon from "../../atoms/LinkButtonWithIcon/LinkButtonWithIcon";
import LinkButtonNoIcon from "../../atoms/LinkButtonNoIcon/LinkButtonNoIcon";
import PortMap from "../../molecules/PortMap/PortMap";
import { useDesignContext, BackgroundStatus } from "@/commons/contexts/DesignContext";
import "@/commons/styles/ghost.css";
import LuupBorder from "../../atoms/LuupBorder/LuupBorder";
import DropdownOtherCountry from "../../molecules/Dropdown/DropdownOtherCountry/DropdownOtherCountry";

function Port() {
    const { backgroundStatus, bgScrollPointFirstRef, bgScrollPointSecondRef } = useDesignContext();
    const textClassName = backgroundStatus === BackgroundStatus.DARK ? "transition-colors duration-1000 text-white" : "transition-colors duration-1000 text-black";
    const linkButtonClassName = `w-[300px] h-[60px] mt-8 ${textClassName}`;

    const images = [
        ImageInfos.Port1,
        ImageInfos.Port2,
        ImageInfos.Port3,
    ].map(info => info.changeHeight(360).plainObject);

    return (
        <div className={`w-full flex flex-col items-center space-y-28 ${textClassName}`} ref={bgScrollPointFirstRef}>
            <div className="flex flex-col items-center space-y-8">
                
                {/* TODO: 上の要素との距離を取るため。他の方法を考える */}
                <div className="h-[150px]"></div>

                <div className="relative">
                    <LuupBorder />
                </div>

                <div className="flex flex-col space-y-2 w-[1100px]">
                    <GhostText text="Port" className="text-8xl" appear={backgroundStatus === BackgroundStatus.DARK} />
                    <p className="text-xl">LUUPポート</p>
                </div>
            </div>
            
            <ImageSlider imageInfos={images} className="w-full h-[360px]" />

            <div className="grid grid-cols-2 gap-2 w-[1100px]">
                <div className="row-span-2">
                    <p className="text-2xl leading-relaxed">
                        物件の空きスペースに、<br />
                        LUUPポートを設置しませんか？
                    </p>
                </div>
                
                <div>
                    <p className="leading-relaxed">
                        ちょっとした移動が楽になったり、デッドスペースの収益化 <br />
                        につながります。 自販機2台分のスペースがあれば導入でき、<br />
                        設置費用・維持コストは一切かかりません。 ぜひ下記 <br />
                        お問い合わせフォームよりお気軽にご相談ください。
                    </p>
                </div>

                <LinkButtonWithIcon
                    label="ポート設置をご検討の方へ"
                    className={`${linkButtonClassName} mt-8`}
                />
            </div>

            <div className="flex flex-col items-center space-y-10 text-black">
                <div className="bg-white border rounded-md w-[1150px] h-[500px] grid grid-cols-5">
                    <div className="col-span-2 h-full flex flex-col justify-center space-y-4 p-10">
                        <h3 className="text-4xl">
                            提供エリア拡大中
                        </h3>

                        <p className="leading-loose">
                            展開エリアに高密度にポートを設置。<br />
                            アプリをダウンロードして、<br />
                            最寄りのポート（LUUP専用駐車場）を <br />
                            検索してみましょう。
                        </p>

                        <div className="grid grid-cols-2 gap-2 w-full">
                            {/* TODO: アイコンなしにする */}
                            <LinkButtonNoIcon label="東京" className="h-[40px]"/>
                            <LinkButtonNoIcon label="大阪" className="h-[40px]"/>
                            <LinkButtonNoIcon label="横浜" className="h-[40px]"/>
                            <LinkButtonNoIcon label="京都" className="h-[40px]"/>
                            {/* TODO: その他を追加 */}
                            <DropdownOtherCountry className="col-span-2 h-[50px] mt-2" />
                        </div>
                    </div>

                    <PortMap className="col-span-3 h-full" />
                </div>

                <div className={`flex justify-between w-[800px] ${textClassName}`} ref={bgScrollPointSecondRef}>
                    <div className="flex flex-col items-center space-y-2">
                        <p>物件オーナー・管理者の方</p>
                        <LinkButtonWithIcon
                            label="ポート設置をご検討の方へ"
                            className={linkButtonClassName}
                        />
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                        <p>ユーザーの方</p>
                        <LinkButtonWithIcon
                            label="ポート設置リクエスト"
                            className={linkButtonClassName}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Port;
