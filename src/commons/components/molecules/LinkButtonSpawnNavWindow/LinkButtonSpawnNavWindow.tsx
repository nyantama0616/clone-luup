"use client";
import React, { useState } from "react";
import LinkButtonBase, {LinkButtonProps} from "../../atoms/LinkButtonBase";
import "./LinkButtonSpawnNavWindow.css";

/*
    TODO: 
    微妙にHover時の挙動が違う
    3. Windowが右にはみ出した場合に、隠れてしまう
*/

interface LinkButtonSpawnNavWindowProps extends LinkButtonProps {
    label: string;
    navWindow: React.ReactElement;
}
function LinkButtonSpawnNavWindow({ label, navWindow, className, onMouseEnter, onMouseLeave }: LinkButtonSpawnNavWindowProps) {
    const { isHovered, handleMouseEnter, handleMouseLeave } = useLinkButtonNavWindow();
    const navWindowWithProps = React.cloneElement(navWindow, { className: "spawned" });
    // const _className = `${className} border border-red`;

    function _onMouseEnter() {
        handleMouseEnter();
        if (onMouseEnter) onMouseEnter();
    }

    function _onMouseLeave() {
        handleMouseLeave();
        if (onMouseLeave) onMouseLeave();
    }

    return (
        <LinkButtonBase
            className={className}
            onMouseEnter={_onMouseEnter}
            onMouseLeave={_onMouseLeave}
        >
            <div className="px-5 py-2 text-dark hover:text-white">
                <h3 className="text-center">{label}</h3>
                {isHovered && navWindowWithProps}
            </div>
        </LinkButtonBase>
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
    }

    return {
        isHovered,
        handleMouseEnter,
        handleMouseLeave
    };
}

export default LinkButtonSpawnNavWindow;
