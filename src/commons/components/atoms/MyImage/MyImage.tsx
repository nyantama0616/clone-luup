import Image from "next/image";
import ImageInfo from "@/commons/classes/ImageInfo";

interface MyImageProps {
    info: ImageInfo;
}

function MyImage({ info }: MyImageProps) {
    return (
        <Image src={info.path} alt="Image" width={info.width} height={info.height} className="rounded-md"/>
    )
}

export default MyImage;
