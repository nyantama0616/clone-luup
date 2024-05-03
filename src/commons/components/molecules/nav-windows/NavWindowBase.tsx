import GeneralProps from "@/commons/types/GeneralProps";

interface NavWindowBaseProps extends GeneralProps {
    children: React.ReactNode;
    onMouseLeave?: () => void;
}

export interface NavWindowProps extends GeneralProps {
    onMouseLeave?: () => void;
}

function NavWindowBase({ children, className = "", onMouseLeave }: NavWindowBaseProps) {
    const _className = `rounded-md bg-white ${className}`;
    
    return (
        <div className={_className} onMouseLeave={onMouseLeave}>
            {children}
        </div>
    )
}

export default NavWindowBase;
