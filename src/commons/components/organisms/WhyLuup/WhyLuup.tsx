import React from "react";
import GhostText from "../../atoms/GhoastText/GhoastText";
import MyImage from "../../atoms/MyImage/MyImage";
import ImageInfos from "@/commons/enums/images.gen";
import LinkButtonWithIcon from "../../atoms/LinkButtonWithIcon/LinkButtonWithIcon";
import { useDesignContext } from "@/commons/contexts/DesignContext";
import ImageSlideShow from "../../molecules/ImageSlideShow/ImageSlideShow";
import { useMediaQuery, mediaQuery } from "@/commons/hooks/useMediaQuery";

function WhyLuup() {
    const { showWhyLuup, whyLuupRef } = useDesignContext();

    const isMobile = useMediaQuery(mediaQuery.sp);

    const images = (isMobile ? [
        ImageInfos.Why0sp,
        ImageInfos.Why1sp,
        ImageInfos.Why2sp,
    ] : [
        ImageInfos.Why0,
        ImageInfos.Why1,
        ImageInfos.Why2,
    ]).map(info => info.plainObject);

    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col space-y-12 md:space-y-20 p-6 md:p-4 w-full md:w-[1100px]">
                <div ref={whyLuupRef}>
                    <GhostText text="Why LUUP" appear={showWhyLuup} className="text-5xl md:text-7xl pb-6"/>
                    <p className="text-xl md:text-2xl">LUUPが提供する価値</p>
                </div>
                
                <ol className="md:grid md:grid-cols-3 gap-8">
                    <ListItem index={1}>
                        <p>
                            日本の交通課題を解決する<br />
                            インフラと街の活性化
                        </p>
                    </ListItem>
                    
                    
                    <ListItem index={2}>
                        <p>
                            人と乗り物と街が共生できる<br />
                            安全で安心な社会実装
                        </p>
                    </ListItem>
                    
                    <ListItem index={3}>
                        <p>
                            環境負荷の低い<br />
                            持続可能な社会の実現
                        </p>
                    </ListItem>
                </ol>
                
                {/* 
                    TODO: Slide Showにする
                    Next.jsではクラスをpropsに渡したりできないらしい
                */}
                <ImageSlideShow imageInfos={images} className="w-full h-[700px]"/>

                <div className="flex flex-col items-center space-y-4">
                    <p className="text-xs md:text-base">なぜLUUPを社会実装するのか？</p>
                    <LinkButtonWithIcon
                        label="Why LUUP"
                        className="w-full md:w-[300px] h-[60px]"
                    />
                </div>
            </div>
        </div>
    );
}

interface ListItemProps {
    index: number;
    children?: React.ReactNode;
}

function ListItem({ index, children }: ListItemProps) {
    const indexStr = `${index.toString().padStart(2, '0')}.`;
    return (
        <li className="flex items-center md:block border-t py-10 md:py-0 md:pt-8 leading-loose">
            <h3 className="text-4xl md:text-5xl mr-6 md:pb-6">{indexStr}</h3>
            {children}
        </li>
    );
}

export default WhyLuup;
