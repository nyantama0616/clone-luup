function Licence() {
    return (
        <div className="px-8 w-full md:w-[1100px] flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between text-xs pb-8">
            <div className="flex space-x-4">
                <a href="#" className="hover:underline">利用規約</a>
                <a href="#" className="hover:underline">プライバシーポリシー</a>
                <a href="#" className="hover:underline">特定商取引法に基づく表示</a>
            </div>
            <p>© 2023 Luup, Inc.</p>
        </div>
    );
}

export default Licence;
