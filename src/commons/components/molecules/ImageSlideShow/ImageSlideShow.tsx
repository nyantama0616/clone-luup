import {IImageInfo} from "@/commons/classes/ImageInfo";
import GeneralProps2 from "@/commons/types/GeneralProps2";
import MyImage from "../../atoms/MyImage/MyImage";
import { useEffect, useState } from "react";
import "./ImageSlideShow.css";

/*
    TODO: Scrollするたびに再レンダリングされるため、表示がおかしくなる
    スクロールせずに、止まっているときは、結構いい感じになる
*/

interface ImageSlideShowProps extends GeneralProps2 {
    imageInfos: IImageInfo[];
}

function ImageSlideShow({ imageInfos, className = "" }: ImageSlideShowProps) {
    const { prevImage, currImage } = useIMageSlideShow(imageInfos);
    const _className = `image-slide-show ${className}`;

    return (
        <div className={_className}>
            <MyImage
                info={prevImage}
                key={Math.random().toString()}
            />

            <MyImage
                info={currImage}
                key={Math.random().toString()}
            />
        </div>
    )
}

interface ImageSlideShowController {
    prevImage: IImageInfo;
    currImage: IImageInfo;
}

function useIMageSlideShow(imageInfos: IImageInfo[]): ImageSlideShowController {
    if (imageInfos.length < 2) {
        throw new Error("At least 2 images are required.");
    }
    
    const [pos, setPos] = useState(0);

    function nextImage() {
        setPos(prev => prev + 1);
    }

    useEffect(() => {
        const intervalId = setInterval(nextImage, 3000);
        return () => clearInterval(intervalId);
    }, []);

    return {
        prevImage: imageInfos[pos % imageInfos.length],
        currImage: imageInfos[(pos + 1) % imageInfos.length],
    }
}

export default ImageSlideShow;
