import Image from "next/image";
import {IImageInfo} from "@/commons/classes/ImageInfo";
import GeneralProps from "@/commons/types/GeneralProps";

interface MyImageProps extends GeneralProps {
    info: IImageInfo;
    rounded?: "full" | "left",
}

function MyImage({ info, className = "", rounded = "full" }: MyImageProps) {
    const roundedClassName = rounded === "full" ? "rounded-md" : "rounded-l-md";
    const _className = `${roundedClassName} ${className}`;
    return (
        <Image src={info.path} alt="Image" width={info.width} height={info.height} className={_className} />
    )
}

export default MyImage;
