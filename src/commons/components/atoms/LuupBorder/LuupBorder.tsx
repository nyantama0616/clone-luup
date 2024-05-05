import GeneralProps2 from "@/commons/types/GeneralProps2";

function LuupBorder({ className }: GeneralProps2) {
    const _className = `luup-border w-[800px] h-[280px] border border-primary-200 border-[35px] rounded-[50px] ${className}`;
    return (
        <div className={_className}>

        </div>
    );
}

export default LuupBorder;