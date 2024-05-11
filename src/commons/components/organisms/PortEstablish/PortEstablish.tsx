import LinkButtonWithIcon from "../../atoms/LinkButtonWithIcon/LinkButtonWithIcon";
import MyImage from "../../atoms/MyImage/MyImage";
import ImageInfos from "@/commons/enums/images.gen";
import LuupBorder from "../../atoms/LuupBorder/LuupBorder";

function PortEstablish() {
    return (
        <div className="bg-gray-300 flex flex-col items-center py-16 w-full">
            <div className="flex flex-col md:grid md:grid-cols-5 md:w-[1100px] px-6">
                <MyImage
                    info={ImageInfos.NewPort}
                    className="md:hidden"
                />

                <div className="col-span-2 flex flex-col space-y-6 md:space-y-8 justify-center pt-6 md:pt-14 md:p-16 text-white">
                    <h1 className="text-xl md:text-3xl">ポート設置のご相談</h1>
                    
                    <p className="text-xs md:text-base">
                        物件の空きスペースに、<br />
                        LUUPポートを設置しませんか？
                    </p>

                    <div className="flex flex-col space-y-4">
                        <LinkButtonWithIcon
                            label="ポート設置をご検討の方へ"
                            className="text-sm md:text-base text-white h-[60px]"
                            />
                        
                        <LinkButtonWithIcon
                            label="ポート設置リクエスト"
                            className="text-sm md:text-base text-white h-[60px]"
                        />
                    </div>
                </div>

                <div className="hidden md:block col-span-3">
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
