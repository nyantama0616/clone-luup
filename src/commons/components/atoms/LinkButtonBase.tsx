import GeneralProps2 from "@/commons/types/GeneralProps2";

export interface LinkButtonProps extends GeneralProps2 {
    to?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

interface LinkButtonBaseProps extends LinkButtonProps {
    children: React.ReactNode;
    to?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

// TODO: aタグで実装したほうがいいかも
function LinkButtonBase({ className, children, to="#", onMouseEnter, onMouseLeave }: LinkButtonBaseProps) {
    const _className = `${className}`;

    return (
        <a href={to} className={_className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {children}
        </a>
    );
}

export default LinkButtonBase;
