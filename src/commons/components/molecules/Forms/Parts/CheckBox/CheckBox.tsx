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
    const _className = `flex flex-col md:flex-row md:space-x-6 ${className}`;

    const items = options.map((option, index) => {
        return (
            <CheckBoxItem label={option.label} checked={value.includes(option.value)} value={option.value} key={index} />
        );
    });

    return (
        <div className={_className}>
            <div className="flex md:justify-between md:w-[220px]">
                <span className="block text-xs md:text-base font-medium text-gray-700">{label}</span>

                <span className={`${requiredBgColor} text-white text-xs rounded-md w-[44px] h-[22px] text-center px-2 py-1 ml-2 md:ml-0`}>
                    {requiredText}
                </span>
            </div>

            <div className="flex flex-col space-y-3 mt-3 md:mt-0">
                {items}
                {otherOption && <OtherOption {...otherOption} />}
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
        <label className="text-base md:text-xl flex items-center space-x-4 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 md:w-8 md:h-8" onChange={() => { onSelected && onSelected(value) }} checked={checked} />
            <p>{label}</p>
        </label>
    );
}

function OtherOption({ checked, value, onSelected, onChanged }: IOtherOption) {
    return (
        <div className="flex items-center space-x-4">
            <label className="flex space-x-3 text-base md:text-xl cursor-pointer">
                <input type="checkbox" className="w-5 h-5 md:w-8 md:h-8" onChange={() => { onSelected && onSelected() }} checked={checked} />
                <p>その他:</p>
            </label>
            <input type="text" className="w-[250px] h-[56px] px-3 py-2 border border-gray-200 rounded-md" value={value} />
        </div>
    );
}

export default CheckBox;
