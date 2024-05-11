import TextField from "../Parts/TextField/TextField";
import CheckBox from "../Parts/CheckBox/CheckBox";
import TextArea from "../Parts/TextArea/TextArea";
import GeneralProps2 from "@/commons/types/GeneralProps2";
import LinkButtonPlain from "@/commons/components/atoms/LinkButtonPlain/LinkButtonPlain";
import LinkButtonWithIcon from "@/commons/components/atoms/LinkButtonWithIcon/LinkButtonWithIcon";

const optionsForReport = [
    {
        id: 1,
        label: "取材を希望(対面)",
        value: 1,
    },
    {
        id: 2,
        label: "取材をご希望(電話・Web",
        value: 2,
    },
    {
        id: 3,
        label: "データや素材の提供をご希望",
        value: 3,
    },
    {
        id: 4,
        label: "転載許諾をご希望",
        value: 4,
    },
];

const otherOptionForReport = {
    checked: false,
    value: "",
}

const optionsForWhereLuup = [
    {
        id: 1,
        label: "メディア（TV、新聞、雑誌、Web、ラジオなど)",
        value: 1,
    },
    {
        id: 2,
        label: "SNS（Twitter、Instagramなど）",
        value: 2,
    },
    {
        id: 3,
        label: "広告",
        value: 3,
    },
    {
        id: 4,
        label: "検索エンジン",
        value: 4,
    },
    {
        id: 5,
        label: "クチコミや知人の紹介",
        value: 5,
    },
    {
        id: 6,
        label: "過去に使ったことがある",
        value: 6,
    },
    {
        id: 7,
        label: "街中のポートを見た",
        value: 7,
    },
    {
        id: 8,
        label: "電動キックボードや電動アシスト自動車が走行しているところを見た",
        value: 8,
    },
];

const otherOptionForWhereLuup = {
    checked: false,
    value: "",
}

function QuestionForMedia({className=""}: GeneralProps2) {
    const _className = `flex flex-col space-y-6 ${className}`;
  
    return (
        <div className={_className}>
            <TextField label="メールアドレス" placeholder="info@luup.sc" required/>
            <TextField label="お名前" placeholder="山田太郎" required/>
            <TextField label="ふりがな" placeholder="やまだたろう" required/>
            <TextField label="貴社名" placeholder="株式会社LUUP" required/>
            <TextField label="貴社媒体・番組名" placeholder="" required />
            <TextField label="電話番号" placeholder="123456789" required />
            <CheckBox label="ご希望の取材形態" required options={optionsForReport} otherOption={otherOptionForReport}/>
            <CheckBox label="ご希望の取材形態" required options={optionsForWhereLuup} otherOption={otherOptionForWhereLuup}/>
            <TextArea label="お問い合わせ内容" placeholder="お問い合わせの内容をご記入ください。" required/>
            <LinkButtonWithIcon label="送信確認" className="w-[300px] h-[60px] mx-auto border" textAlign="center"/>
        </div>
  );
}

export default QuestionForMedia;
