import LinkButtonUnderLined from "@/commons/components/atoms/LinkButtonUnderLined/LinkButtonUnderLined";

function NavWindowService() {
    const width = "280px";
    
    return (
        <div className="rounded-md bg-white grid grid-cols-3 gap-4 p-8">
            <LinkButtonUnderLined
                label="サービスについて"
                width={width}
            />
            
            <LinkButtonUnderLined
                label="交通ルール"
                width={width}
            />
            
            <LinkButtonUnderLined
                label="モビリティ紹介"
                width={width}
            />
            
            <LinkButtonUnderLined
                label="LUUPのご利用方法"
                width={width}
            />
            
            <LinkButtonUnderLined
                label="ヘルプセンター"
                width={width}
            />
            
            <LinkButtonUnderLined
                label="プレスキットダウンロード"
                width={width}
            />
        </div>
    )
}

export default NavWindowService;
