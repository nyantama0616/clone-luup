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
    const linkButtonClassName = `w-full md:w-[300px] h-[60px] mt-8 ${textClassName}`;

    const images = [
        ImageInfos.Port1,
        ImageInfos.Port2,
        ImageInfos.Port3,
    ].map(info => info.changeHeight(360).plainObject);

    return (
        <div className={`w-full flex flex-col items-center space-y-12 md:space-y-28 ${textClassName}`} ref={bgScrollPointFirstRef}>
            <div className="flex flex-col items-center space-y-9 md:space-y-8 w-full pl-6 md:pl-2">
                
                {/* TODO: 上の要素との距離を取るため。他の方法を考える */}
                <div className="md:h-[150px]"></div>

                <div className="relative">
                    <LuupBorder />
                </div>

                <div className="flex flex-col space-y-6 md:space-y-2 w-full md:max-w-[1100px]">
                    <GhostText text="Port" className="text-6xl md:text-8xl" appear={backgroundStatus === BackgroundStatus.DARK} />
                    <p className="text-lg md:text-xl">LUUPポート</p>
                </div>
            </div>
            
            <ImageSlider imageInfos={images} className="w-full h-[360px]" />

            <div className="grid md:grid-cols-2 gap-8 md:gap-2 w-full px-8 md:px-2 md:max-w-[1100px]">
                <div className="row-span-2">
                    <p className="text-xl md:text-2xl leading-relaxed">
                        物件の空きスペースに、<br />
                        LUUPポートを設置しませんか？
                    </p>
                </div>
                
                <div>
                    <p className="leading-relaxed text-xs md:text-base">
                        ちょっとした移動が楽になったり、デッドスペースの収益化 <br className="hidden md:inline"/>
                        につながります。 自販機2台分のスペースがあれば導入でき、<br className="hidden md:inline"/>
                        設置費用・維持コストは一切かかりません。 ぜひ下記 <br className="hidden md:inline" />
                        お問い合わせフォームよりお気軽にご相談ください。
                    </p>
                </div>

                <LinkButtonWithIcon
                    label="ポート設置をご検討の方へ"
                    className={`${linkButtonClassName} mt-8 w-full md:w-[300px]`}
                />
            </div>

            <div className="flex flex-col items-center space-y-10 text-black w-full">
                <div className="bg-white md:rounded-md w-full md:max-w-[1150px] md:h-[500px] md:flex md:justify-between">
                    <div className="md:col-span-2 h-full flex flex-col justify-center space-y-4 py-12 px-14 md:w-[600px]">
                        <h3 className="text-xl md:text-4xl">
                            提供エリア拡大中
                        </h3>

                        <p className="leading-loose">
                            展開エリアに高密度にポートを設置。<br className="hidden md:inline" />
                            アプリをダウンロードして、<br/>
                            最寄りのポート（LUUP専用駐車場）を <br className="hidden md:inline" />
                            検索してみましょう。
                        </p>

                        <div className="grid grid-cols-2 gap-2 w-full">
                            <LinkButtonNoIcon label="東京" className="h-[40px]"/>
                            <LinkButtonNoIcon label="大阪" className="h-[40px]"/>
                            <LinkButtonNoIcon label="横浜" className="h-[40px]"/>
                            <LinkButtonNoIcon label="京都" className="h-[40px]" />
                            
                            <DropdownOtherCountry className="col-span-2 h-[50px] mt-2" />
                        </div>
                    </div>
        
                    <PortMap className="md:flex-shrink-0 h-full md:rounded-md border" />
                </div>

                <div className={`flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between w-full md:w-[800px] items-center p-6 ${textClassName}`} ref={bgScrollPointSecondRef}>
                    <div className="flex flex-col items-center space-y-2 w-full">
                        <p>物件オーナー・管理者の方</p>
                        <LinkButtonWithIcon
                            label="ポート設置をご検討の方へ"
                            className={linkButtonClassName}
                        />
                    </div>

                    <div className="flex flex-col items-center space-y-2 w-full">
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
