import GeneralProps2 from "@/commons/types/GeneralProps2";
import ImageInfo from "@/commons/classes/ImageInfo";

interface ImageZoomableProps extends GeneralProps2 {
    imageInfo: ImageInfo;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

function ImageZoomable({ imageInfo, className = '', onMouseEnter, onMouseLeave }: ImageZoomableProps): JSX.Element {
    const _className = `flex justify-center items-center overflow-hidden rounded-md ${className}`;
    const childClassName = `bg-center bg-cover transition-transform duration-500 hover:scale-110`;
    const bgImage = `url(${imageInfo.path})`;
    
    return (
        <div className={_className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {/* TODO: Tailwindはなぜかたまに、文字列中の式展開が効かないことがある */}
            <a className={childClassName} href="#" style={{backgroundImage: bgImage, width: imageInfo.width, height: imageInfo.height}}></a>
        </div>
    );
}

export default ImageZoomable;
