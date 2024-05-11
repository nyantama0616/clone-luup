import GeneralProps2 from "@/commons/types/GeneralProps2";

interface TextFieldProps extends GeneralProps2 {
    label: string;
    required?: boolean;
    placeholder?: string;
    name?: string;
    rows?: number;
    value?: string;
}

function TextArea({ label, required = false, placeholder = "", className = "", name, rows=11, value="" }: TextFieldProps) {
    const requiredBgColor = required ? "bg-black" : "";
    const requiredText = required ? "必須" : "";
    const _className = `flex flex-col md:flex-row md:space-x-6 ${className}`;
    const _placeholder = `${placeholder}`;

    return (
        <label className={_className}>
            <div className="flex md:justify-between md:w-[220px]">
                <span className="block text-xs md:text-base font-medium text-gray-700">{label}</span>

                <span className={`${requiredBgColor} text-white text-xs rounded-md w-[44px] h-[22px] text-center px-2 py-1 ml-2 md:ml-0`}>
                    {requiredText}
                </span>
            </div>

            <textarea
                placeholder={_placeholder}
                required={required}
                name={name}
                rows={rows}
                value={value}
                className="grow p-6 border border-gray-200 rounded-md placeholder-gray-200 focus:ring-red focus:border-red mt-3 md:mt-0"
            />
        </label>
    );
}

export default TextArea;
