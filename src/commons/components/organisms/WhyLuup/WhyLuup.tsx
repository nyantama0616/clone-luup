import React from "react";
import GhostText from "../../atoms/GhoastText/GhoastText";
import MyImage from "../../atoms/MyImage/MyImage";
import ImageInfos from "@/commons/enums/images.gen";
import LinkButton from "../../atoms/LinkButton/LinkButton";

function WhyLuup() {
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col space-y-16 p-4" style={{width: 1100}}>
                <div>
                    <GhostText text="Why LUUP" />
                    <p>LUUPが提供する価値</p>
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
                    
                    <ListItem index={2}>
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
                    <LinkButton label="Why LUUP"/>
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
        <li className="border-t pt-4">
            <h3 className="text-lg">{indexStr}</h3>
            {children}
        </li>
    );
}

export default WhyLuup;
