import CatchCopy from "../../molecules/CatchCopy/CatchCopy";
import MyImage from "../../atoms/MyImage/MyImage";
import ImageInfos from "@/commons/enums/images.gen";
import LinkButtonWithIcon from "../../atoms/LinkButtonWithIcon/LinkButtonWithIcon";
import { useDesignContext } from "@/commons/contexts/DesignContext";
import LuupBorder from "../../atoms/LuupBorder/LuupBorder";
import "./Overview.css";

function Overview() {
    const { headerScrollPointSecondRef } = useDesignContext();

    return (
        <div className="overview flex flex-col space-y-[330px] items-center">
            <div className="flex" ref={headerScrollPointSecondRef}>
                <div className="w-[380px] flex flex-col justify-between pt-10 pl-10 pb-10 pr-8">
                    <CatchCopy />
                    <div className="flex flex-col space-y-4">
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

                <div className="w-[1600px] overflow-hidden relative">
                    <MyImage info={ImageInfos.FirstView} className="first-view"/>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8 w-[1200px]">
                <div className="flex items-center pl-8 pr-24">
                    <p className="leading-loose">
                        LUUPは、街じゅうのどこにいてもスマホ一つで好きな場所へ簡単に行くことができる、新しい移動の選択肢です。街には「ポート」という移動のハブがあり、いつでもポートからポートへ電動マイクロモビリティに乗って移動することができます。かつて鉄道の駅が街を発展させたように、LUUPのポートを街じゅうに設置することで人が集まる場所をつくり、街じゅうを駅前のように活性化していきます。そして、年齢に関係なく誰もが安全に、シェア型でサステナブルな移動ができる未来のインフラをつくることを目指しています。
                    </p>
                </div>

                <div className="relative">
                    <LuupBorder className="w-[800px] h-[212px]"/>
                    <div className="p-2 relative">
                        <MyImage info={ImageInfos.LuupRide} className="z-10"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
