import GeneralProps2 from "@/commons/types/GeneralProps2";

interface TextFieldProps extends GeneralProps2 {
    label: string;
    required?: boolean;
    placeholder?: string;
    name?: string;
    value?: string;
}

// TODO: フォーカス時の色を変えたい
function TextField({ label, required = false, placeholder="", className="", name, value="" }: TextFieldProps) {
    const requiredBgColor = required ? "bg-black" : "";
    const requiredText = required ? "必須" : "";
    const _className = `flex flex-col md:flex-row md:space-x-6 ${className}`;
    const _placeholder = `例）${placeholder}`;

    return (
        <label className={_className}>
            <div className="flex items-center md:justify-between md:w-[220px]">
                <span className="block text-xs md:text-base font-medium text-gray-700">{label}</span>

                <span className={`${requiredBgColor} text-white text-xs rounded-md w-[44px] h-[22px] text-center px-2 py-1 ml-2 md:ml-0`}>
                    {requiredText}
                </span>
            </div>
            
            <input
                type="text"
                placeholder={_placeholder}
                required={required}
                name={name}
                value={value}
                className="grow h-[56px] px-3 py-2 border border-gray-200 rounded-md placeholder-gray-200 focus:ring-red focus:border-red mt-3 md:mt-0 w-full md:w-[400px]"
            />
        </label>
    );
}

export default TextField;
