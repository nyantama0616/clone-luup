import Dropdown from "../Dropdown/Dropdown";
import countries from "./countries";
import GeneralProps2 from "@/commons/types/GeneralProps2";

function DropdownOtherCountry({ className }: GeneralProps2) {
    const countryItems = countries.map((country, index) => (
        <ListItem key={index} country={country} />
    ));

    const _className = `text-black ${className}`;

    return (
        <Dropdown
            label="その他の街"
            className={_className}
            spawned={
                // TODO: box-shadowつけたいけど、子要素にまでshadowがついてしまう...
                <div className="w-full rounded-md bg-white py-2">
                    <ul>
                        {countryItems}
                    </ul>
                </div>
            }
        />
    );
}

interface ListItemProps {
    country: string;
}

function ListItem({ country }: ListItemProps) {
    return (
        <li className="flex h-[40px] overflow-y-scroll hover:bg-gray-100">
            <a href="#" className="flex items-center w-full p-4">{country}</a>
        </li>
    );
}

export default DropdownOtherCountry;
