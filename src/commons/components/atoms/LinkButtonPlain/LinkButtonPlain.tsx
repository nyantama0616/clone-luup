import React from "react";
import LinkButtonBase, { LinkButtonProps } from "../LinkButtonBase";

interface LinkButtonPlainProps extends LinkButtonProps {
    textAlign?: "left" | "center" | "right";
    label?: string;
}

function LinkButtonPlain({ label, to="#", textAlign="center", className="" }: LinkButtonPlainProps) {
    const _className = `flex rounded-md h-11 p-2 text-dark hover:bg-gray-100 ${className} border`;

    return (
        <LinkButtonBase to={to} className={_className}>
            <div className={`font-normal font-['Inter'] text-${textAlign}`}>
                {label}
            </div>
        </LinkButtonBase>
    )
}

export default LinkButtonPlain;
