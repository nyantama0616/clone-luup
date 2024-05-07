import Dropdown from "../Dropdown/Dropdown";
import GeneralProps2 from "@/commons/types/GeneralProps2";
import periods from "./periods";

function DropdownPeriod({ className }: GeneralProps2) {
    const periodElements = periods.map((months, index) => (
        <Section key={index} months={months} />
    ));

    const _className = ` ${className}`;

    return (
        <Dropdown
            label="期間で検索"
            className={_className}
            spawned={
                <div className="w-full rounded-md bg-white py-2 h-[400px] overflow-y-scroll">
                    <div className="bg-gray-100 mb-2"><h5 className="pl-3">全期間</h5></div>
                    {periodElements}
                </div>
            }
        />
    )
}

interface SectionProps {
    months: string[];
}
function Section({ months }: SectionProps) {
    return (
        <ul className="border-t py-2">
            {months.map((month, index) => (
                <li key={index} className="flex"><a className="hover:bg-gray-100 w-full px-3 py-1" href="#">{month}</a></li>
            ))}
        </ul>
    );
}

export default DropdownPeriod;
