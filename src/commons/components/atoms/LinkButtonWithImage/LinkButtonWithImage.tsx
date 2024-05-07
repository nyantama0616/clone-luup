import React from "react";
import MyImage from "../MyImage/MyImage";
import LinkButtonBase, { LinkButtonProps } from "../LinkButtonBase";
import { IImageInfo } from "@/commons/classes/ImageInfo";
import ArrowRightIcon from "@/commons/assets/icons/arrow-right.svg";
interface LinkButtonWithImageProps extends LinkButtonProps {
    /**
     * Button contents
     */
    label: string;
    imageInfo: IImageInfo;
}

//TODO: h-11消したい
function LinkButtonWithImage({ label, to, className, imageInfo }: LinkButtonWithImageProps) {
    const _className = `
    rounded-md border border-neutral-200 justify-between items-center gap-2.5 inline-flex pl-2 pr-4
    text-dark hover:bg-dark hover:text-white transition-colors duration-500 ${className}
    `;

    return (
        <LinkButtonBase to={to} className={_className}>
            <div className="flex space-x-4 items-center">
                <MyImage info={imageInfo} className="w-[130px] h-[115px] my-2"/>
                <p>{label}</p>
            </div>
            <ArrowRightIcon className="w-6" />
            {/* <div className="bg-primary-100 w-2 h-2"></div> */}
        </LinkButtonBase>
    )
}

export default LinkButtonWithImage;
