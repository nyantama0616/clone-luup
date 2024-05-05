import "./GhostText.css";
import GeneralProps2 from "@/commons/types/GeneralProps2";

interface GhostTextProps extends GeneralProps2 {
    text: string;
    appear?: boolean;
}

function GhostText({ text, className, appear = false }: GhostTextProps) {
    const ghostTextClassName = appear ? "ghost-appear" : "ghost-disappear";
    const _className = `${ghostTextClassName} ${className}`;
    
    return (
        <h1 className={_className}>
            {text}
        </h1>
    )
}

export default GhostText;
