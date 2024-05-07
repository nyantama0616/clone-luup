import ArrowRightIcon from "@/commons/assets/icons/arrow-right.svg";
import "./AwesomeButton.css";

interface AwesomeButtonProps {
    label: string;
    isHovered?: boolean;
}
function AwesomeButton({ label, isHovered = false }: AwesomeButtonProps) {
    const textClassName = isHovered ? "awesome-button-text" : "";
    const iconClassName = isHovered ? "awesome-button-icon" : "";
    return (
        // TODO: override-hiddenが効かない
        <button className="w-full flex justify-between items-center px-1 override-hidden">
            <p className={textClassName}>{label}</p>
            <ArrowRightIcon className={iconClassName} />
        </button>
    );
}

// function useAwsomeButton() {
    
// }

export default AwesomeButton;
