import GhostText from "../../atoms/GhoastText/GhoastText";
import ImageSlider from "../../molecules/ImageSlider/ImageSlider";
import ImageInfos from "@/commons/enums/images.gen";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import PortMap from "../../molecules/PortMap/PortMap";

function Port() {
    const images = [
        ImageInfos.Port1,
        ImageInfos.Port2,
        ImageInfos.Port3,
    ];

    return (
        <div className="w-full flex flex-col items-center space-y-16">
            <div className="flex flex-col items-center space-y-8">
                <div className="flex flex-col space-y-2 w-[1100px]">
                    <GhostText text="Port" size={4} />
                    <GhostText text="LUUPポート" size={1} />
                </div>
                
                <ImageSlider imageInfos={images} width="500px" height="360px" />
            </div>

            <div className="grid grid-cols-2 gap-2 w-[1100px]">
                <div className="row-span-2">
                    <p>
                        物件の空きスペースに、<br />
                        LUUPポートを設置しませんか？
                    </p>
                </div>
                
                <div>
                    <p>
                        ちょっとした移動が楽になったり、デッドスペースの収益化 <br />
                        につながります。 自販機2台分のスペースがあれば導入でき、<br />
                        設置費用・維持コストは一切かかりません。 ぜひ下記 <br />
                        お問い合わせフォームよりお気軽にご相談ください。
                    </p>
                </div>

                <div className="h-[96px] flex items-center">
                    <LinkButton label="ポート設置をご検討の方へ" width="300px"/>
                </div>
            </div>

            <div className="bg-white border rounded-md w-[1100px] h-[500px] grid grid-cols-5">
                <div className="col-span-2 h-full flex flex-col items-center space-y-4 p-8">
                    <h3 className="text-3xl">
                        提供エリア拡大中
                    </h3>

                    <p>
                        展開エリアに高密度にポートを設置。<br />
                        アプリをダウンロードして、<br />
                        最寄りのポート（LUUP専用駐車場）を <br />
                        検索してみましょう。
                    </p>

                    <div className="grid grid-cols-2 gap-2 w-full">
                        {/* TODO: アイコンなしにする */}
                        <LinkButton label="東京" />
                        <LinkButton label="大阪" />
                        <LinkButton label="横浜" />
                        <LinkButton label="京都" />
                        {/* TODO: その他を追加 */}
                    </div>
                </div>

                <PortMap className="col-span-3 h-full" />
            </div>

            <div className="flex justify-between w-[700px]">
                <div className="flex flex-col items-center space-y-2">
                    <p>物件オーナー・管理者の方</p>
                    <LinkButton
                        label="ポート設置をご検討の方へ"
                        width="300px"
                    />
                </div>

                <div className="flex flex-col items-center space-y-2">
                    <p>ユーザーの方</p>
                    <LinkButton
                        label="ポート設置リクエスト"
                        width="300px"
                    />
                </div>
            </div>
        </div>
    )
}

export default Port;
