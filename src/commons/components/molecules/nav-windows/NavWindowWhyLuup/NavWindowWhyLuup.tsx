import LinkButtonUnderLined from "@/commons/components/atoms/LinkButtonUnderLined/LinkButtonUnderLined";

function NavWindowWhyLuup() {
    const width = "300px";
    
    return (
        <div className="rounded-md bg-white grid grid-cols-3 gap-4 p-8" style={{width: 1000}}>
            <LinkButtonUnderLined
                label="Why LUUP"
                width={width}
            />
            
            {/* TODO: 他の方法を考える */}
            <div></div>
            <div></div>
            
            <LinkButtonUnderLined
                label="待ちを活性化する次世代インフラ"
                width={width}
            />
            
            <LinkButtonUnderLined
                label="街との共生のために"
                width={width}
            />
            
            <LinkButtonUnderLined
                label="持続可能な社会の構築に向けて"
                width={width}
            />
        </div>
    )
}

export default NavWindowWhyLuup;
