import LinkButtonWithIcon from "../../atoms/LinkButtonWithIcon/LinkButtonWithIcon";
import MyImage from "../../atoms/MyImage/MyImage";
import ImageInfos from "@/commons/enums/images.gen";

function PortEstablish() {
    return (
        <div className="bg-gray-300 flex justify-center pt-16 pb-16">
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
                    <MyImage
                        info={ImageInfos.NewPort}
                    />
                </div>
            </div>
        </div>
    );
}

export default PortEstablish;
