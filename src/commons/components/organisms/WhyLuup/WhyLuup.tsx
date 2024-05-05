import React from "react";
import GhostText from "../../atoms/GhoastText/GhoastText";
import MyImage from "../../atoms/MyImage/MyImage";
import ImageInfos from "@/commons/enums/images.gen";
import LinkButtonWithIcon from "../../atoms/LinkButtonWithIcon/LinkButtonWithIcon";
import { useDesignContext } from "@/commons/contexts/DesignContext";

import "./WhyLuup.css";

function WhyLuup() {
    const { showWhyLuup, whyLuupRef } = useDesignContext();

    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col space-y-20 p-4 w-[1100px]">
                <div ref={whyLuupRef}>
                    <GhostText text="Why LUUP" appear={showWhyLuup} className="text-7xl pb-6"/>
                    <p className="text-2xl">LUUPが提供する価値</p>
                </div>
                
                <ol className="grid grid-cols-3 gap-8">
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
                <MyImage info={ImageInfos.Why0} />

                <div className="flex flex-col items-center space-y-4">
                    <p>なぜLUUPを社会実装するのか？</p>
                    <LinkButtonWithIcon
                        label="Why LUUP"
                        className="w-[300px] h-[60px]"
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
        <li className="border-t pt-8 leading-relaxed">
            <h3 className="text-5xl pb-6">{indexStr}</h3>
            {children}
        </li>
    );
}

export default WhyLuup;
