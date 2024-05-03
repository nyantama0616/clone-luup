"use client";
import React, { useState } from "react";
import "./LinkButtonSpawnNavWindow.css";

/*
    TODO: 
    微妙にHover時の挙動が違う
    1. ボタンから離れてもNavWindowが消えない
    2. マスクが表示されない
    3. Windowが右にはみ出した場合に、隠れてしまう
*/

interface LinkButtonSpawnNavWindowProps {
    label: string;
    navWindow: React.ReactElement;
}
function LinkButtonSpawnNavWindow({ label, navWindow }: LinkButtonSpawnNavWindowProps) {
    const { isHovered, handleMouseEnter, handleMouseLeave } = useLinkButtonNavWindow();
    const navWindowWithProps = React.cloneElement(navWindow, { className: "spawned" });

    return (
        <div
            className="pb-2 relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="p-2 text-dark hover:bg-gray-200 hover:text-white cursor-pointer">
                <h3 className="text-center">{label}</h3>
                {isHovered && navWindowWithProps}
            </div>
        </div>
    )
}

interface LinkButtonSpawnNavWindowController {
    isHovered: boolean;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
}

function useLinkButtonNavWindow(): LinkButtonSpawnNavWindowController {
    const [isHovered, setIsHovered] = useState(false);
    
    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
        console.log("handleMouseLeave");
        
    }

    return {
        isHovered,
        handleMouseEnter,
        handleMouseLeave
    };
}

export default LinkButtonSpawnNavWindow;
