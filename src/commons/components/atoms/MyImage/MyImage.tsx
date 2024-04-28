import Image from "next/image";
import ImagePaths from "@/images";

interface MyImageProps {
    /**
     * Image Path
     */
    path: ImagePaths;

    //TODO: widthとか指定しなくても、自動でサイズを調整するようにする
    width: number;
    height: number;
}

function MyImage({ path, width, height }: MyImageProps) {
    return (
        <Image src={path} alt="Image" width={width} height={height} className="rounded-md"/>
    )
}

export default MyImage;
