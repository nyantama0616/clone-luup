import GeneralProps2 from "@/commons/types/GeneralProps2";
import { IImageInfo } from "@/commons/classes/ImageInfo";
import "./ImageZoomable.css";

// TODO: Scaleする倍率を変えられるようにする
interface ImageZoomableProps extends GeneralProps2 {
    imageInfo: IImageInfo;
    isHovered?: boolean;
    rounded?: boolean;
}

// TODO: 最初にunhoveredのクラスがついてしまう
function ImageZoomable({ imageInfo, className = '', isHovered = false, rounded=true }: ImageZoomableProps): JSX.Element {
    const hoverClassName = isHovered ? 'image-zoomable-hovered' : 'image-zoomable-unhovered';
    const roundedClassName = rounded ? 'rounded-md' : '';
    const _className = `flex justify-center items-center overflow-hidden ${roundedClassName} ${className}`;
    const childClassName = `bg-center bg-cover ${hoverClassName}`;
    const bgImage = `url(${imageInfo.path})`;
    
    return (
        <div className={_className}>
            {/* TODO: Tailwindはなぜかたまに、文字列中の式展開が効かないことがある */}
            <div className={childClassName} style={{backgroundImage: bgImage, width: imageInfo.width, height: imageInfo.height}}></div>
        </div>
    );
}

export default ImageZoomable;
