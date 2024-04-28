import LinkButtonUnderLined from "@/commons/components/atoms/LinkButtonUnderLined/LinkButtonUnderLined";

function NavWindowPortMap() {
    const width = "100px";
    
    return (
        <div className="rounded-md bg-white grid grid-cols-4 gap-4 p-8">
            <LinkButtonUnderLined
                label="東京"
                width={width}
            />
            
            <LinkButtonUnderLined
                label="大阪"
                width={width}
            />
            
            <LinkButtonUnderLined
                label="横浜"
                width={width}
            />
            
            <LinkButtonUnderLined
                label="京都"
                width={width}
            />

            {/* TODO: 「その他の街」を追加する */}
        </div>
    )
}

export default NavWindowPortMap;
