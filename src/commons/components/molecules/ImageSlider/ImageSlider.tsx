"use client";

import { useEffect, useState } from "react";
import {IImageInfo} from "@/commons/classes/ImageInfo";
import GeneralProps from "@/commons/types/GeneralProps";
import MyImage from "../../atoms/MyImage/MyImage";
import "./ImageSlider.css";

// TODO: 動かす

interface ImageSliderProps extends GeneralProps {
    imageInfos: IImageInfo[];
}

function ImageSlider({ imageInfos, width="220px", height="80px" }: ImageSliderProps) {
    const _width = parseInt(width.replace("px", ""));
    const _height = parseInt(height.replace("px", ""));
    const controller = useImageSlider(imageInfos);

    const images = controller.imageInfos.map((imageInfo, index) => (
        // TODO: 綺麗に横に並べる
        <div style={{width: _width}} key={index.toString()}>
            <MyImage
                info={imageInfo}
            />
        </div>
    ));

    return (
        <div className="flex flex-nowrap items-center space-x-16 slide-left">
        {/* <div className="flex flex-nowrap items-center space-x-16"> */}
            {images}
        </div>
    )
}

interface ImageSliderController {
    imageInfos: IImageInfo[];
}

function useImageSlider(initialImageInfos: IImageInfo[]): ImageSliderController {
    const [imageInfos, setImageInfos] = useState<IImageInfo[]>(initialImageInfos);

    function slide() {
        setImageInfos(prev => {
            const newImageInfos = [...prev];
            const first = newImageInfos.shift();
            newImageInfos.push(first!);
            return newImageInfos;
        });
    }

    useEffect(() => {
        const interval = setInterval(slide, 3000);
        return () => clearInterval(interval);
    }, []);

    return {
        imageInfos,
    };
}

export default ImageSlider;
