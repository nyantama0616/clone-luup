import GeneralProps2 from "@/commons/types/GeneralProps2";
import ImageInfo from "@/commons/classes/ImageInfo";

interface ImageZoomableProps extends GeneralProps2 {
    imageInfo: ImageInfo;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

function ImageZoomable({ imageInfo, className = '', onMouseEnter, onMouseLeave }: ImageZoomableProps): JSX.Element {
    const _className = `flex justify-center items-center overflow-hidden rounded-md ${className}`;
    // const childClassName = `bg-center bg-cover bg-[url('/images/ServiceAbout.webp')] w-[${imageInfo.width}px] h-[${imageInfo.height}px]
    //                         transition-transform duration-500 hover:scale-110`;
    const childClassName = `bg-center bg-cover bg-[url('/images/ServiceAbout.webp')] w-[800px] h-[1105px]
                            transition-transform duration-500 hover:scale-110`;

    return (
        <div className={_className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <a className={childClassName} href="#"></a>
        </div>
    );
}

export default ImageZoomable;
