import TextField from "../Parts/TextField/TextField";
import RadioButton from "../Parts/RadioButton/RadioButton";
import TextArea from "../Parts/TextArea/TextArea";
import GeneralProps2 from "@/commons/types/GeneralProps2";
import LinkButtonPlain from "@/commons/components/atoms/LinkButtonPlain/LinkButtonPlain";

const options = [
    {
        id: 1,
        label: "機体について",
        value: 1,
    },
    {
        id: 2,
        label: "アプリについて",
        value: 2,
    },
    {
        id: 3,
        label: "故障について",
        value: 3,
    },
    {
        id: 4,
        label: "事故やトラブルについて",
        value: 4,
    },
    {
        id: 5,
        label: "その他",
        value: 5,
    },
];

function QuestionForApp({className=""}: GeneralProps2) {
    const _className = `flex flex-col space-y-6 ${className}`;
  
    return (
        <div className={_className}>
            <TextField label="お名前" placeholder="山田太郎" required/>
            <TextField label="ふりがな" placeholder="やまだたろう" required/>
            <TextField label="メールアドレス" placeholder="info@luup.sc" required/>
            <TextField label="電話番号" placeholder="123456789" required />
            <RadioButton label="お問い合わせ内容" required options={options} />
            <TextArea label="お問い合わせ詳細" placeholder="お問い合わせの内容をご記入ください。" required/>
            <LinkButtonPlain label="送信確認" className="w-1/3 h-[60px] mx-auto border" />
        </div>
  );
}

export default QuestionForApp;
