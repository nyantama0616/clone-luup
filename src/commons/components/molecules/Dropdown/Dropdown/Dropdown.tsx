import React, { useEffect, useState } from "react";
import GeneralProps2 from "@/commons/types/GeneralProps2";
import DropdownIcon from "./dropdown.svg";

// TODO: クリックすると緑色になるようにする
interface DropdownProps extends GeneralProps2 {
    label?: string;
    spawned?: React.ReactElement;
    border?: "border" | "border-t" | "border-b" | "border-l" | "border-r";
}

// TODO: borderの指定方法考える
function Dropdown({ label = "", spawned, className, border="border" }: DropdownProps) {
    const { isHovered, isClicked, ref, handleMouseEnter, handleMouseLeave, handleClick } = useDropdown();
    // const borderColor = isClicked ? "primary-100" : isHovered ? "gray-300" : "gray-200";
    const borderColor = isClicked ? "primary-100" : "gray-200";
    const _className = `w-full h-full ${border} rounded-md border-${borderColor} flex justify-between items-center px-4 cursor-pointer`;
    const spawnedClassName = `absolute mt-2 ${spawned?.props.className || ""}`;
    const spawnedWithProps = React.cloneElement(spawned!, { className: spawnedClassName });
    
    return (
        <div
            className={`pb-2 relative ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick} ref={ref}
        >
            <div className={_className}>
                <p>{label}</p>
                <DropdownIcon />
                {/* <div className="w-2 h-2 bg-primary-100"></div> */}
            </div>

            {isHovered && spawnedWithProps}
        </div>
    );
}

interface DropdownController {
    isHovered: boolean;
    isClicked: boolean;
    ref: React.RefObject<HTMLDivElement>;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    handleClick: () => void;
}

function useDropdown(): DropdownController {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const ref = React.createRef<HTMLDivElement>();

    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    function _documentClickHandler(e: MouseEvent) {
        if (ref.current?.contains(e.target as Node)) return;
        setIsClicked(false);
        document.body.removeEventListener("click", _documentClickHandler);
    }

    function handleClick() {
        setIsClicked(true);
        document.body.addEventListener("click", _documentClickHandler);
    }

    return {
        isHovered,
        isClicked,
        ref,
        handleMouseEnter,
        handleMouseLeave,
        handleClick
    };
}

export default Dropdown;
