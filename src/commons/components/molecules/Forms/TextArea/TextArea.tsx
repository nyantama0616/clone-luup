import GeneralProps2 from "@/commons/types/GeneralProps2";

interface TextFieldProps extends GeneralProps2 {
    label: string;
    required?: boolean;
    placeholder?: string;
    name?: string;
    rows?: number;
}

function TextArea({ label, required = false, placeholder = "", className = "", name, rows=11 }: TextFieldProps) {
    const requiredBgColor = required ? "bg-black" : "";
    const requiredText = required ? "必須" : "";
    const _className = `grid grid-cols-4 gap-8 ${className}`;
    const _placeholder = `${placeholder}`;

    return (
        <label className={_className}>
            <span className="block text-base font-medium text-gray-700">{label}</span>

            <div className="col-span-3 flex space-x-4">
                <span className={`${requiredBgColor} text-white text-xs rounded-md w-[44px] h-[22px] text-center px-2 py-1`}>
                    {requiredText}
                </span>

                <textarea
                    placeholder={_placeholder}
                    required={required}
                    name={name}
                    rows={rows}
                    className="grow p-6 border border-gray-200 rounded-md placeholder-gray-200 focus:ring-red focus:border-red"
                />
            </div>
        </label>
    );
}

export default TextArea;
