import GeneralProps2 from "@/commons/types/GeneralProps2";
import {IImageInfo} from "@/commons/classes/ImageInfo";

interface MyImage2Props extends GeneralProps2 {
    imageInfo: IImageInfo;
}

function MyImage2({ imageInfo, className = '' }: MyImage2Props): JSX.Element {
    const _className = `flex justify-center items-center overflow-hidden rounded-l-md ${className}`;
    const childClassName = `bg-center bg-cover`;
    const bgImage = `url(${imageInfo.path})`;
    
    return (
        <div className={_className}>
            <div className={childClassName} style={{backgroundImage: bgImage, width: imageInfo.width, height: imageInfo.height}}></div>
        </div>
    );
}

export default MyImage2;
