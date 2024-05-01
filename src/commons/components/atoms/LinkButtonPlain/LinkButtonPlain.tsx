import React from "react";
import LinkButtonProps from "@/commons/types/LinkButtonProps";

interface LinkButtonPlainProps extends LinkButtonProps {
    textAlign?: "left" | "center" | "right";
}

function LinkButtonPlain({ label, to="#", onClick, width="200px", textAlign="center", className="" }: LinkButtonPlainProps) {
    const _className = `rounded-md p-2 text-dark hover:bg-gray-100 cursor-pointer ${className}`;

    return (
        <div className={_className} style={{width: width}}>
            <p className={`text-base text-${textAlign}`}>{label}</p>
        </div>
    )
}

export default LinkButtonPlain;
