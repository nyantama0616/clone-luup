import Image from "next/image";
import ImagePaths from "@/images";

interface MyImageProps {
    /**
     * Image Path
     */
    path: ImagePaths;
}

function MyImage({ path }: MyImageProps) {
    return (
        <Image src={path} alt="Image" width={0} height={0} layout="responsive" className="rounded-md"/>
    )
}

export default MyImage;
