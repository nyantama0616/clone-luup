import GeneralProps from "@/commons/types/GeneralProps";
import MyImage from "../../atoms/MyImage/MyImage";
import ImageInfos from "@/commons/enums/images.gen";

// TODO: せめてGoogle Mapを表示できるようにする, 現状はただの画像

interface PortMapProps extends GeneralProps {

}

function PortMap({ className="" }: PortMapProps) {
    const _className = `bg-gray-200 ${className}`;

    return (
        <div className={_className}>
            <MyImage info={ImageInfos.StaticMapService} />
        </div>
    );
}

export default PortMap;
