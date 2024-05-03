import LinkButtonWithIcon from "../../atoms/LinkButtonWithIcon/LinkButtonWithIcon";
import MyImage from "../../atoms/MyImage/MyImage";
import ImageInfos from "@/commons/enums/images.gen";

function AppDownload() {
    return (
        <div className="flex justify-center pt-16 pb-16">
            <div className="grid grid-cols-5 gap-8 w-[1100px]">
                <MyImage
                    className="col-span-3"
                    info={ImageInfos.DownloadApp}
                />

                <div className="col-span-2 flex flex-col space-y-8 justify-center">
                    <h1 className="text-3xl">アプリのダウンロードはこちら</h1>
                    <div className="flex space-x-4">
                        {/* TODO: 画像にする */}
                        <LinkButtonWithIcon
                            label="App Store"
                        />

                        <LinkButtonWithIcon
                            label="Google Play"
                        />
                    </div>

                    <p className="text-gray-300 text-xs">
                        Apple および Apple ロゴは米国その他の国で登録された
                        Apple Inc. の商標です。<br />
                        App Store は Apple Inc. のサービスマークです。<br />
                        Google Play および Google Play ロゴは Google LLC の商標です。
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AppDownload;
