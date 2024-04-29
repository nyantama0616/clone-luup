import GeneralProps from "./GeneralProps";

interface LinkButtonProps extends GeneralProps {
    /**
     * Button contents
     */
    label: string;

    /**
     * Where to navigate to
     */
    to?: string;

    /**
     * Optional click handler
     */
    onClick?: () => void;
}

export default LinkButtonProps;
