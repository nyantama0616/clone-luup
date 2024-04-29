import ImageInfo from "@/commons/classes/ImageInfo";
import GeneralProps from "@/commons/types/GeneralProps";
import MyImage from "../../atoms/MyImage/MyImage";
import { useEffect, useState } from "react";
import "./ImageSlideShow.css";

// TODO: CSSのFadeIn, FadeOutが効いてくれない

interface ImageSlideShowProps extends GeneralProps {
    imageInfos: ImageInfo[];
}

function ImageSlideShow({ imageInfos, width="500px", height }: ImageSlideShowProps) {
    const { prevImage, currImage } = useIMageSlideShow(imageInfos, width);

    return (
        <div className="image-slide-show" style={{width: width, height: height}}>
            <MyImage
                info={prevImage}
            />
            <MyImage
                info={currImage}
            />
        </div>
    )
}

interface ImageSlideShowController {
    prevImage: ImageInfo;
    currImage: ImageInfo;
}

function useIMageSlideShow(imageInfos: ImageInfo[], imageWidth: string): ImageSlideShowController {
    if (imageInfos.length < 2) {
        throw new Error("At least 2 images are required.");
    }
    
    const width = parseInt(imageWidth.replace("px", "")); // TODO: *pxの形式で入力されることを前提としている, 要修正
    const [pos, setPos] = useState(0);

    function nextImage() {
        setPos(prev => prev + 1);
    }

    useEffect(() => {
        const intervalId = setInterval(nextImage, 3000);
        return () => clearInterval(intervalId);
    }, []);

    return {
        prevImage: imageInfos[pos % imageInfos.length].changeWidth(width),
        currImage: imageInfos[(pos + 1) % imageInfos.length].changeWidth(width),
    }
}

export default ImageSlideShow;
