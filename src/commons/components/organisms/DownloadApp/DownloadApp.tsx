import LinkButtonWithIcon from "../../atoms/LinkButtonWithIcon/LinkButtonWithIcon";
import MyImage from "../../atoms/MyImage/MyImage";
import ImageInfos from "@/commons/enums/images.gen";
import LinkButtonImage from "../../atoms/LinkButtonImage/LinkButtonImage";

function AppDownload() {
    return (
        <div className="flex justify-center px-6 py-12 bg-white">
            <div className="md:grid md:grid-cols-5 md:gap-8 md:w-[1100px]">
                <MyImage
                    className="md:col-span-3"
                    info={ImageInfos.DownloadApp}
                />

                <div className="mt-6 md:mt-0 col-span-2 flex flex-col space-y-6 md:space-y-8 justify-center">
                    <h1 className="text-xl md:text-3xl">アプリのダウンロードはこちら</h1>
                    <div className="flex space-x-6 items-center">
                        <LinkButtonImage imageInfo={ImageInfos.AppStore.changeWidth(120)}/>
                        <LinkButtonImage imageInfo={ImageInfos.GooglePlay.changeWidth(150)}/>
                    </div>

                    <p className="leading-loose text-gray-300 text-xs">
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
