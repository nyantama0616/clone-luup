import GeneralProps2 from "@/commons/types/GeneralProps2";

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
    const _className = `grid grid-cols-4 gap-8 ${className}`;

    const items = options.map((option, index) => {
        return (
            <RadioItem label={option.label} checked={option.value === value} value={option.value} key={index} onSelected={onSelected} />
        );
    });

    return (
        <div className={_className}>
            <span className="block text-base font-medium text-gray-700">{label}</span>

            <div className="col-span-3 flex space-x-4">
                <span className={`${requiredBgColor} text-white text-xs rounded-md w-[44px] h-[22px] text-center px-2 py-1`}>
                    {requiredText}
                </span>
                <div className="flex flex-col space-y-3">
                    {items}
                </div>
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

function RadioItem({ label, checked=false, value , onSelected}: RadioItemProps) {
    return (
        <div className="flex items-center space-x-4">
            <input type="radio" className="w-8 h-8" onChange={() => { onSelected && onSelected(value) }} checked={checked} />
            <label className="text-xl">{label}</label>
        </div>
    );
}

export default RadioButton;
