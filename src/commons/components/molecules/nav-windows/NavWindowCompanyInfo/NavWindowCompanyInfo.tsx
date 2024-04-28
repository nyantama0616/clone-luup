import LinkButtonUnderLined from "@/commons/components/atoms/LinkButtonUnderLined/LinkButtonUnderLined";

function NavWindowCompanyInfo() {
    const width = "250px";
    
    return (
        <div className="rounded-md bg-white grid grid-cols-2 gap-4 p-8">
            <LinkButtonUnderLined
                label="企業情報"
                width={width}
            />
            
            <LinkButtonUnderLined
                label="採用情報"
                width={width}
            />
        </div>
    )
}

export default NavWindowCompanyInfo;
