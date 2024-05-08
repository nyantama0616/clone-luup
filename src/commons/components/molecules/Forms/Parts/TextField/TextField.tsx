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
    const requiredTag = required ? <span className="bg-black text-white text-xs rounded-md w-[50px] text-center px-2 py-1">必須</span> : null;
    const _className = `grid grid-cols-4 gap-8 items-center ${className}`;
    const _placeholder = `例）${placeholder}`;

    return (
        <label className={_className}>
            <span className="block text-base font-medium text-gray-700">{label}</span>
            
            <div className="col-span-3 flex items-center space-x-4">
                {requiredTag}
                <input
                    type="text"
                    placeholder={_placeholder}
                    required={required}
                    name={name}
                    value={value}
                    className="grow h-[56px] px-3 py-2 border border-gray-200 rounded-md placeholder-gray-200 focus:ring-red focus:border-red"
                />
            </div>
        </label>
    );
}

export default TextField;
