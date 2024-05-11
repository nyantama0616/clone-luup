import TextField from "../Parts/TextField/TextField";
import TextArea from "../Parts/TextArea/TextArea";
import GeneralProps2 from "@/commons/types/GeneralProps2";
import LinkButtonWithIcon from "@/commons/components/atoms/LinkButtonWithIcon/LinkButtonWithIcon";

function QuestionForCommunity({className=""}: GeneralProps2) {
    const _className = `flex flex-col space-y-6 ${className}`;
  
    return (
        <div className={_className}>
            <TextField label="メールアドレス" placeholder="info@luup.sc" required/>
            <TextField label="会社名/自治体名" placeholder="株式会社LUUP" required/>
            <TextField label="部署名" placeholder="広報部" required/>
            <TextField label="役職" placeholder="部長" />
            <TextField label="お名前" placeholder="山田太郎" required />
            <TextField label="ふりがな" placeholder="やまだたろう" required />
            <TextField label="電話番号" placeholder="123456789" required />
            <TextArea label="お問い合わせ内容" placeholder="お問い合わせの内容をご記入ください。" required />
            <LinkButtonWithIcon label="送信確認" className="w-[300px] h-[60px] mx-auto border" textAlign="center" />
        </div>
  );
}

export default QuestionForCommunity;
