import LinkButtonWithIcon from "../../atoms/LinkButtonWithIcon/LinkButtonWithIcon";
import MyImage from "../../atoms/MyImage/MyImage";
import ImageInfos from "@/commons/enums/images.gen";
import LuupBorder from "../../atoms/LuupBorder/LuupBorder";

function PortEstablish() {
    return (
        <div className="bg-gray-300 flex flex-col items-center py-16 w-full">
            <div className="grid grid-cols-5 w-[1100px]">

                <div className="col-span-2 flex flex-col space-y-8 justify-center p-16 text-white">
                    <h1 className="text-3xl">ポート設置のご相談</h1>
                    <p>
                        物件の空きスペースに、<br />
                        LUUPポートを設置しませんか？
                    </p>
                    <div className="flex flex-col space-y-4">
                        <LinkButtonWithIcon
                            label="ポート設置をご検討の方へ"
                            className="text-white"
                            />
                        
                        <LinkButtonWithIcon
                            label="ポート設置リクエスト"
                            className="text-white"
                        />
                    </div>
                </div>

                <div className="col-span-3">
                    <div className="relative">
                        {/* TODO: 位置調整の方法を考える */}
                        <div className="relative left-24 top-[-90px]">
                            <LuupBorder />
                        </div>
                        <MyImage
                            info={ImageInfos.NewPort}
                            className="absolute top-[-20px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortEstablish;
