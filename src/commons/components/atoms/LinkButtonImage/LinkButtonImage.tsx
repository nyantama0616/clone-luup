import LinkButtonBase, {LinkButtonProps} from "../LinkButtonBase";
import { IImageInfo } from "@/commons/classes/ImageInfo";
import Image from "next/image";

interface LinkButtonImageProps extends LinkButtonProps {
    imageInfo: IImageInfo;
}

function LinkButtonImage({ imageInfo, className="" }: LinkButtonImageProps) {
    return (
        <LinkButtonBase className={className}>
            <Image src={imageInfo.path} width={imageInfo.width} height={imageInfo.height} alt="image" className="transition-transform duration-300 hover:scale-105"/>
        </LinkButtonBase>
    );
}

export default LinkButtonImage;
