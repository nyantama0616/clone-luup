import "./GhostText.css";

interface GhostTextProps {
    text: string;
}

function GhostText({ text }: GhostTextProps) {
    const fadeIn = 'fade-in';
    const _className = `text-dark text-4xl font-bold ${fadeIn}`;
    return (
        <h1 className={_className}>
            {text}
        </h1>
    )
}

export default GhostText;
