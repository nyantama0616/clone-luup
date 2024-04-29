import ImageInfo from "@/commons/classes/ImageInfo";
import GeneralProps from "@/commons/types/GeneralProps";
import MyImage from "../../atoms/MyImage/MyImage";

// TODO: 動かす

interface ImageSliderProps extends GeneralProps {
    imageInfos: ImageInfo[];
}

function ImageSlider({ imageInfos }: ImageSliderProps) {
    const images = imageInfos.map((imageInfo, index) => (
        // TODO: 綺麗に横に並べる
        <div style={{width: 220}}>
            <MyImage
                key={index}
                info={imageInfo.changeHeight(80)}
            />
        </div>
    ));

    return (
        <div className="flex flex-nowrap items-center space-x-4">
        {/* <div className=""> */}
            {images}
        </div>
    )
}

export default ImageSlider;
