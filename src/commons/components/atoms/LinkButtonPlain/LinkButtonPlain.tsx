import React from "react";
import LinkButtonProps from "@/commons/types/LinkButtonProps";

function LinkButtonPlain({ label, to="#", onClick, width="200px" }: LinkButtonProps) {
    return (
        <div className={`rounded-md p-2 items-center text-dark hover:bg-gray-100 cursor-pointer`} style={{width: width}}>
            <p className="text-base text-center">{label}</p>
        </div>
    )
}

export default LinkButtonPlain;
