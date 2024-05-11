import GeneralProps2 from "@/commons/types/GeneralProps2";
import "./RadioButton.css";

interface RadioOption {
    id: number;
    label: string;
    value: number;
}

interface RadioButtonProps extends GeneralProps2 {
    label: string;
    required?: boolean;
    name?: string;
    value?: number;
    options?: RadioOption[];
    onSelected?: (value: number) => void;
}

function RadioButton({ label, required = false, name, value=0, options=[], className="", onSelected }: RadioButtonProps) {
    const requiredBgColor = required ? "bg-black" : "";
    const requiredText = required ? "必須" : "";
    const _className = `flex flex-col md:flex-row md:space-x-6 ${className}`;

    const items = options.map((option, index) => {
        return (
            <RadioItem label={option.label} checked={option.value === value} value={option.value} key={index} onSelected={onSelected} />
        );
    });

    return (
        <div className={_className}>
            <div className="flex items-center md:items-start md:justify-between md:w-[220px]">
                <span className="block text-xs md:text-base font-medium text-gray-700">{label}</span>
                <span className={`${requiredBgColor} text-white text-xs rounded-md w-[44px] h-[22px] text-center px-2 py-1 ml-2 md:ml-0`}>
                    {requiredText}
                </span>
            </div>

            <div className="flex flex-col space-y-3 mt-3 md:mt-0">
                {items}
            </div>
        </div>
    );
}

interface RadioItemProps {
    label: string;
    checked?: boolean;
    value: number;
    onSelected?: (value: number) => void;
}

function RadioItem({ label, checked = false, value, onSelected }: RadioItemProps) {
    const subClassName = checked ? "radio-focused" : "radio-unfocused";

    return (
        <label className="text-base md:text-xl flex items-center space-x-4 cursor-pointer">
            <input type="radio" className={`appearance-none w-5 h-5 md:w-8 md:h-8 border border-gray-200 rounded-full bg-white text-white cursor-pointer ${subClassName}`} onChange={() => { onSelected && onSelected(value) }} checked={checked} />
            <p>{label}</p>
        </label>
    );
}

export default RadioButton;
