"use client";

import {IImageInfo} from "@/commons/classes/ImageInfo";
import GeneralProps from "@/commons/types/GeneralProps";
import MyImage from "../../atoms/MyImage/MyImage";
import "./ImageSlider.css";

// TODO: 動かす

interface ImageSliderProps extends GeneralProps {
    imageInfos: IImageInfo[];
    itemWidth?: number;
    right?: boolean;
}

function ImageSlider({ imageInfos, className="", itemWidth=600, right=false }: ImageSliderProps) {
    const controller = useImageSlider(imageInfos);
    const slideClassName = right ? "slide-right" : "slide-left";
    const _className = `h-[100px] flex items-center relative overflow-hidden ${className}`;

    const images = controller.imageInfos.map((imageInfo, index) => (
        // TODO: 綺麗に横に並べる
        <div className={`w-[${itemWidth}px] flex-shrink-0 flex justify-center`} key={index.toString()}>
            <MyImage
                info={imageInfo}
            />
        </div>
    ));

    return (
        <div className={_className}>
            <div className={`flex ${slideClassName} absolute`}>
                {images}
            </div>
        </div>
    )
}

interface ImageSliderController {
    imageInfos: IImageInfo[];
}

function useImageSlider(initialImageInfos: IImageInfo[]): ImageSliderController {
    // TODO: 効率化できるかも
    const imageInfos = [...initialImageInfos, ...initialImageInfos];

    return {
        imageInfos,
    };
}

export default ImageSlider;
