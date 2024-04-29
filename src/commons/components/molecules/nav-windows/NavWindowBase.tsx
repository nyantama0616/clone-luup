import GeneralProps from "@/commons/types/GeneralProps";

interface NavWindowBaseProps extends GeneralProps {
    children: React.ReactNode;
    onMouseLeave?: () => void;
}

export interface NavWindowProps extends GeneralProps {
    onMouseLeave?: () => void;
}

function NavWindowBase({ children, className = "", width, onMouseLeave }: NavWindowBaseProps) {
    const _className = `rounded-md bg-white ${className}`;
    
    return (
        <div className={_className} style={{width: width}} onMouseLeave={onMouseLeave}>
            {children}
        </div>
    )
}

export default NavWindowBase;
