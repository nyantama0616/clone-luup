import GeneralProps2 from "@/commons/types/GeneralProps2";

interface CheckBoxOption {
    id: number;
    label: string;
    value: number;
}

interface IOtherOption {
    checked: boolean;
    value: string;
    onSelected?: () => void;
    onChanged?: (value: string) => void;
}

interface RadioButtonProps extends GeneralProps2 {
    label: string;
    required?: boolean;
    name?: string;
    value?: number[];
    options?: CheckBoxOption[];
    otherOption?: IOtherOption;
}

function CheckBox({ label, required = false, name, value = [], options = [], className = "", otherOption }: RadioButtonProps) {
    const requiredBgColor = required ? "bg-black" : "";
    const requiredText = required ? "必須" : "";
    const _className = `grid grid-cols-4 gap-8 ${className}`;

    const items = options.map((option, index) => {
        return (
            <CheckBoxItem label={option.label} checked={value.includes(option.value)} value={option.value} key={index} />
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
                    {otherOption && <OtherOption {...otherOption} />}
                </div>
            </div>
        </div>
    );
}

interface CheckBoxItemProps {
    label: string;
    checked?: boolean;
    value: number;
    onSelected?: (value: number) => void;
}

function CheckBoxItem({ label, checked = false, value, onSelected }: CheckBoxItemProps) {
    return (
        <div className="flex items-center space-x-4">
            <input type="checkbox" className="w-8 h-8" onChange={() => { onSelected && onSelected(value) }} checked={checked} />
            <label className="text-xl">{label}</label>
        </div>
    );
}

function OtherOption({ checked, value, onSelected, onChanged }: IOtherOption) {
    return (
        <div className="flex items-center space-x-4">
            <input type="checkbox" className="w-8 h-8" onChange={() => { onSelected && onSelected() }} checked={checked} />
            <label className="text-xl">その他:</label>
            <input type="text" className="w-[250px] h-[56px] px-3 py-2 border border-gray-200 rounded-md" value={value} />
        </div>
    );
}

export default CheckBox;
