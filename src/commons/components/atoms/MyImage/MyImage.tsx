import Image from "next/image";
import {IImageInfo} from "@/commons/classes/ImageInfo";
import GeneralProps from "@/commons/types/GeneralProps";

interface MyImageProps extends GeneralProps {
    info: IImageInfo;
}

function MyImage({ info, className="" }: MyImageProps) {
    const _className = `rounded-md ${className}`;
    return (
        <Image src={info.path} alt="Image" width={info.width} height={info.height} className={_className} />
    )
}

export default MyImage;
