import GeneralProps2 from "@/commons/types/GeneralProps2";
import ImageInfo from "@/commons/classes/ImageInfo";
import "./ImageZoomable.css";

interface ImageZoomableProps extends GeneralProps2 {
    imageInfo: ImageInfo;
    isHovered?: boolean;
}

// TODO: 最初にunhoveredのクラスがついてしまう
function ImageZoomable({ imageInfo, className = '', isHovered = false }: ImageZoomableProps): JSX.Element {
    const hoverClassName = isHovered ? 'image-zoomable-hovered' : 'image-zoomable-unhovered';
    const _className = `flex justify-center items-center overflow-hidden rounded-md ${className}`;
    const childClassName = `bg-center bg-cover ${hoverClassName}`;
    const bgImage = `url(${imageInfo.path})`;
    
    return (
        <div className={_className}>
            {/* TODO: Tailwindはなぜかたまに、文字列中の式展開が効かないことがある */}
            <a className={childClassName} href="#" style={{backgroundImage: bgImage, width: imageInfo.width, height: imageInfo.height}}></a>
        </div>
    );
}

export default ImageZoomable;
