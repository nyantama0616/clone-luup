import CatchCopy from "../../molecules/CatchCopy/CatchCopy";
import MyImage from "../../atoms/MyImage/MyImage";
import ImageInfos from "@/commons/enums/images.gen";
import LinkButton from "../../atoms/LinkButton/LinkButton";

function Overview() {
    return (
        <div className="overview flex flex-col space-y-8 items-center">
            <div className="flex space-x-4">
                <div className="flex flex-col space-y-8 m-8">
                    <CatchCopy />
                    <div className="flex flex-col space-y-4">
                        <LinkButton
                            label="新しい交通ルールをチェック"
                            className="w-[300px]"
                        />
                        
                        <LinkButton
                            label="ポート設置のご相談"
                            className="w-[300px]"
                        />
                    </div>
                </div>
                <MyImage info={ImageInfos.FirstView} />
            </div>

            <div className="grid grid-cols-3 gap-4" style={{width: 1100}}>
                <div className="flex items-center col-span-1">
                    <p>
                        LUUPは、街じゅうのどこにいてもスマホ一つで好きな場所へ簡単に行くことができる、新しい移動の選択肢です。街には「ポート」という移動のハブがあり、いつでもポートからポートへ電動マイクロモビリティに乗って移動することができます。かつて鉄道の駅が街を発展させたように、LUUPのポートを街じゅうに設置することで人が集まる場所をつくり、街じゅうを駅前のように活性化していきます。そして、年齢に関係なく誰もが安全に、シェア型でサステナブルな移動ができる未来のインフラをつくることを目指しています。
                    </p>
                </div>

                <div className="p-2 col-span-2">
                    <MyImage info={ImageInfos.LuupRide}/>
                </div>
            </div>
        </div>
    );
}

export default Overview;
