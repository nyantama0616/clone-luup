import "./GhostText.css";

interface GhostTextProps {
    text: string;
    size?: number;
}

function GhostText({ text, size=4 }: GhostTextProps) {
    const fadeIn = 'fade-in';
    const _className = `text-dark text-${size}xl font-bold ${fadeIn}`;
    return (
        <h1 className={_className}>
            {text}
        </h1>
    )
}

export default GhostText;
