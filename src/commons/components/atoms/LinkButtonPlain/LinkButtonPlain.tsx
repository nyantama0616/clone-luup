import React from "react";
import LinkButtonBase, { LinkButtonProps } from "../LinkButtonBase";

interface LinkButtonPlainProps extends LinkButtonProps {
    textAlign?: "left" | "center" | "right";
    label?: string;
}

function LinkButtonPlain({ label, to="#", textAlign="center", className="" }: LinkButtonPlainProps) {
    const _className = `flex rounded-md p-2 text-dark hover:bg-gray-100 ${className}`;

    return (
        <LinkButtonBase to={to} className={_className}>
            <div className={`flex items-center text-${textAlign} px-2`}>
                <p>{label}</p>
            </div>
        </LinkButtonBase>
    )
}

export default LinkButtonPlain;
