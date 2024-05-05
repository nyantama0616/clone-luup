import Image from 'next/image';
import LuupIcon from "@/commons/assets/icons/luup.svg"; // TODO: public/に置きたい
import TwitterIcon from "@/commons/assets/icons/twitter.svg"; // TODO: public/に置きたい
import InstagramIcon from "@/commons/assets/icons/instagram.svg";
import NoteIcon from "@/commons/assets/icons/note.svg";
import LinkButtonPlain from '../../atoms/LinkButtonPlain/LinkButtonPlain';
import LinkButtonWithIcon from '../../atoms/LinkButtonWithIcon/LinkButtonWithIcon';

function Footer() {
    return (
        <footer className="w-full flex">
            <div className="height h-full grow rounded-md bg-gray-400 grid grid-cols-4 gap-4 p-16 text-white">
                <div className="flex flex-col space-y-4">
                    <div className="w-32 h-16 relative">
                        <LuupIcon className="w-full h-full fill-white"/>
                    </div>

                    <p>株式会社LUUP</p>
                    
                    <p>
                        東京都千代田区神田佐久間町三丁目21番地24
                        AKIHABARA CENTRAL SQUARE ４階
                    </p>
                    
                    <div>
                        <p>Follow us</p>
                        <div className="mt-2 flex space-x-4">
                            {/* TODO: コンポーネント化する */}
                            <a className="w-10 h-10 border rounded-full flex justify-center items-center hover:bg-white">
                                <div className="w-5 h-5 relative">
                                    <TwitterIcon className="w-full h-full fill-white hover:fill-gray-400"/>
                                </div>
                            </a>
                            
                            <a className="w-10 h-10 border rounded-full flex justify-center items-center hover:bg-white">
                                <div className="w-5 h-5 relative">
                                    <InstagramIcon className="w-full h-full fill-white hover:fill-gray-400"/>
                                </div>
                            </a>
                            
                            {/* TODO: Noteをちゃんと表示する */}
                            <a className="w-10 h-10 border rounded-full flex justify-center items-center hover:bg-white">
                                <div className="w-5 h-5 relative">
                                    <NoteIcon className="w-full h-full fill-white hover:fill-gray-400"/>
                                </div>
                            </a>
                        </div>
                    </div>

                    <p>
                        <a href="#">日本語</a> / <a href="#">English</a>
                    </p>

                </div>
                
                <div className="">
                    <FooterLinkButton label="Why LUUP"/>
                    <ul className="pl-4">
                        <li><FooterLinkButton label="ー 街を活性化する次世代インフラ"/></li>
                        <li><FooterLinkButton label="ー 街との共生のために"/></li>
                        <li><FooterLinkButton label="ー 持続可能な社会の構築に向けて"/></li>
                    </ul>
                    <FooterLinkButton label="サービス" />
                    <FooterLinkButton label="ポートマップ" />
                    <FooterLinkButton label="ポートマップ" />
                    <FooterLinkButton label="News" />
                    <FooterLinkButton label="企業情報" />
                    <FooterLinkButton label="ポート設置をご検討の方へ" />
                </div>
                
                <div className="">
                    <FooterLinkButton label="LUUP Letter" />
                    <FooterLinkButton label="採用情報" />
                    <FooterLinkButton label="ヘルプセンター" />
                    <FooterLinkButton label="プレスキットダウンロード" />
                </div>
                
                <div className="">
                    <LinkButtonWithIcon label="ポート設置リクエスト" className="text-white hover:bg-white hover:text-gray-400"/>
                </div>
            </div>
            
            <div className="h-full flex flex-col items-center">
                <a className="w-[50px] h-[50px] border rounded-full mt-2 flex justify-center items-center cursor-pointer" href="#">
                    <div className="w-6 h-6 relative">
                        <Image src="/icons/arrow-top.svg" alt="Arrow right" layout="fill" />
                    </div>
                </a>
                <p className="rotate-90 whitespace-nowrap translate-y-10">Page Top</p>
            </div>
        </footer>
    );
}

interface FooterLinkButtonProps {
    label: string;
    to?: string;
}

function FooterLinkButton({ label, to }: FooterLinkButtonProps) {
    return (
        <LinkButtonPlain label={label} to={to} className="text-white hover:text-gray-400" />
    );
}



export default Footer;
