import LuupIcon from "@/commons/assets/icons/luup.svg";
import LinkButtonWithIcon from "../../atoms/LinkButtonWithIcon/LinkButtonWithIcon";
import { useDesignContext, HeaderStatus } from "@/commons/contexts/DesignContext";
import { useState } from "react";
import ImageInfos from "@/commons/enums/images.gen";
import LinkButtonImage from "../../atoms/LinkButtonImage/LinkButtonImage";
import TwitterIcon from "@/commons/assets/icons/twitter.svg";
import InstagramIcon from "@/commons/assets/icons/instagram.svg";
import LinkButtonPlain from "../../atoms/LinkButtonPlain/LinkButtonPlain";
import "./Header.css";

function HeaderForMobile() {
    const { headerStatus } = useDesignContext();
    const { showDetail, toggleDetail, showMenus, handleClickToggle } = useHeaderForMobile();
    const showLuupIcon = headerStatus == HeaderStatus.SECOND || showDetail;

    const headerClassName = headerStatus === HeaderStatus.CLOSED ? "disappear" : "appear";

    const navItem = showDetail ? <HeaderDetailCloseButton onClick={toggleDetail} /> : <>
        <LinkButtonWithIcon label="ポート設置のご相談" className="w-[168px] text-xs" />
        <HeaderToggleButton onClick={toggleDetail}/>
    </>;

    const bgColor = showDetail ? "header-fade-in" : "";

    return (
        <header className={`w-full fixed top-0 flex flex-col ${bgColor} ${headerClassName}`}>
            <div className="flex justify-between w-full">
                <div className="w-20 h-16 relative ml-6">
                    {showLuupIcon && <LuupIcon className="w-full h-full fill-black" />}
                </div>

                <nav className="flex mr-6 items-center space-x-2">
                    {navItem}
                </nav>
            </div>
            
            {showDetail && <HeaderDetail showMenus={showMenus} handleClickToggle={handleClickToggle}/>}
        </header>
    );
}

interface ButtonProps {
    onClick?: () => void;
}

function HeaderToggleButton({ onClick }: ButtonProps) {
    return (
        <button className="w-11 h-11 rounded-full bg-primary-200 flex justify-center items-center" onClick={onClick}>
            <div className="w-6 h-3 border-y border-white"/>
        </button>
    );

}

function HeaderDetailCloseButton({ onClick }: ButtonProps) {
    return (
        <button className="w-11 h-11 rounded-full border border-gray-200 bg-white flex justify-center items-center" onClick={onClick}>
            <div className="absolute w-9 h-px bg-primary-200 transform rotate-[20deg]" />
            <div className="absolute w-9 h-px bg-primary-200 transform -rotate-[20deg]" />
        </button>
    );

}

interface HeaderDetailProps {
    showMenus: { [index: number]: boolean };
    handleClickToggle(index: number): void;
}
function HeaderDetail({ showMenus, handleClickToggle }: HeaderDetailProps) {
    return (
        <div className="w-full bg-white drop-shadow-md p-6 flex flex-col space-y-24">
            <div className="w-full">
                <ToggleButton id={0} onClick={handleClickToggle} label="Why LUUP" menus={whyLuupMenus} showMenus={showMenus[0]} borderTop/>
                <ToggleButton id={1} onClick={handleClickToggle} label="サービス" menus={serviceMenus} showMenus={showMenus[1]} />
                <ToggleButton id={2} onClick={handleClickToggle} label="ポートマップ" menus={portMapMenus} showMenus={showMenus[2]} />
                <LinkButtonPlain label="News" className="h-[60px] border-b"/>
                <ToggleButton id={3} onClick={handleClickToggle} label="企業情報" menus={companyInfoMenus} showMenus={showMenus[3]} />
            </div>
            
            <div className="text-xs">
                <h5>Appダウンロード</h5>
                <div className="flex space-x-6 items-center">
                    <LinkButtonImage imageInfo={ImageInfos.AppStore.changeWidth(120)} />
                    <LinkButtonImage imageInfo={ImageInfos.GooglePlay.changeWidth(150)} />
                </div>

                <h5 className="mt-8 mb-1">Follow us</h5>
                <div className="flex space-x-4">
                    <a className="w-10 h-10 border border-dark rounded-full flex justify-center items-center hover:bg-dark" href="#">
                        <div className="w-5 h-5 relative">
                            <TwitterIcon className="w-full h-full fill-dark hover:fill-white" />
                        </div>
                    </a>

                    <a className="w-10 h-10 border border-dark rounded-full flex justify-center items-center hover:bg-dark" href="#">
                        <div className="w-5 h-5 relative">
                            <InstagramIcon className="w-full h-full fill-dark hover:fill-white" />
                        </div>
                    </a>
                </div>
            </div>
            
            <p className="text-xs text-gray-300 mt-8">© 2023 Luup, Inc.</p>
        </div>
    )
}

interface HeaderForMobileController {
    showDetail: boolean;
    showMenus: boolean[];
    handleClickToggle(index: number): void;
    toggleDetail: () => void;
}

function useHeaderForMobile(): HeaderForMobileController {
    const [showDetail, setShowDetail] = useState(false);
    const [showMenus, setShowMenus] = useState([false, false, false, false]);

    function toggleDetail() {
        // HeaderDetailの表示中は、スクロールを無効に！
        // TODO: ここに書くべきではない
        if (!showDetail) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        setShowDetail(!showDetail);
    }

    function handleClickToggle(index: number) {
        setShowMenus(prev => {
            const _prev = [...prev];
            _prev[index] = !_prev[index];
            return _prev;
        });
    }

    return {
        showDetail,
        toggleDetail,
        showMenus,
        handleClickToggle,
    };
}
export default HeaderForMobile;

interface ToggleButtonProps {
    id: number;
    label: string;
    menus: string[];
    showMenus?: boolean;
    onClick: (id: number) => void;
    borderTop?: boolean;
}
function ToggleButton({ id, label, menus, onClick, showMenus=false, borderTop=false }: ToggleButtonProps) {
    const _menus = showMenus && menus.map((menu, index) => {
        return <LinkButtonPlain label={menu} className="ml-4 h-[40px] text-sm" key={index} />
    });

    const hidden = !showMenus ? "" : "hidden";
    const _borderTop = borderTop ? "border-t" : "";

    return (
        <div className={`border-b relative ${_borderTop}`} onClick={() => {onClick(id)}}>
            <LinkButtonPlain label={label} className="h-[60px]"/>
            {_menus}
            <div className="w-6 h-6 border rounded-full absolute top-[30px] translate-y-[-50%] right-4 flex justify-center items-center pointer-events-none">
                <div className="absolute w-3 h-px bg-primary-200 transform" />
                <div className={`absolute w-3 h-px bg-primary-200 transform rotate-90 ${hidden}`} />
            </div>
        </div>
    )
}

const whyLuupMenus = [
    "Why LUUP",
    "街を活性化する次世代インフラ",
    "街との共生のために",
    "持続可能な社会の構築に向けて",
];

const serviceMenus = [
    "サービスについて",
    "交通ルール",
    "モビリティ紹介",
    "LUUPのご利用方法",
    "ヘルプセンター",
    "プレスキットダウンロード",
];

const portMapMenus = [
    "東京",
    "大阪",
    "横浜",
    "京都",
    "仙台",
    "宇都宮",
    "名古屋",
    "神戸",
    "広島",
    "福岡",
];

const companyInfoMenus = [
    "企業情報",
    "採用情報",
];
