import GeneralProps from "@/commons/types/GeneralProps";
import MyImage from "../../atoms/MyImage/MyImage";
import ImageInfos from "@/commons/enums/images.gen";

// TODO: せめてGoogle Mapを表示できるようにする, 現状はただの画像

interface PortMapProps extends GeneralProps {

}

function PortMap({ width="100px", height="100px" }: PortMapProps) {
    const _width = parseInt(width.replace("px", ""));

    return (
        <div className="bg-gray-200" style={{width: width, height: height}}>
            <MyImage info={ImageInfos.StaticMapService.changeWidth(_width)} />
        </div>
    );
}

export default PortMap;
