import React, { useState } from "react";
import "./LinkButtonSpawnNavWindow.css";

/*
    TODO: 
    微妙にHover時の挙動が違う
    1. ボタンから離れてもNavWindowが消えない
    2. マスクが表示されない
*/

interface LinkButtonSpawnNavWindowProps {
    label: string;
    navWindow: React.ReactElement;
}

function LinkButtonSpawnNavWindow({ label, navWindow }: LinkButtonSpawnNavWindowProps) {
    const { isHovered, handleMouseEnter, handleMouseLeave } = useLinkButtonNavWindow();
    // const navWindowWithProps = React.cloneElement(navWindow, { className: "spawned", onMouseLeave: handleMouseLeave });
    const navWindowWithProps = React.cloneElement(navWindow, { className: "spawned" });

    return (
        <>
            <div
                className="p-2 text-dark hover:bg-gray-200 hover:text-white cursor-pointer relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <h3 className="text-center">{label}</h3>
                {isHovered && navWindowWithProps}
            </div>
        </>
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
