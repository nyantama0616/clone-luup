import GeneralProps2 from "@/commons/types/GeneralProps2";

export interface LinkButtonProps extends GeneralProps2 {
    to?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

interface LinkButtonBaseProps extends LinkButtonProps {
    children: React.ReactNode;
    to?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

// TODO: aタグで実装したほうがいいかも
function LinkButtonBase({ className, children, to="#", onClick, onMouseEnter, onMouseLeave }: LinkButtonBaseProps) {
    const _className = `${className}`;

    return (
        <a href={to} className={_className} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {children}
        </a>
    );
}

export default LinkButtonBase;
