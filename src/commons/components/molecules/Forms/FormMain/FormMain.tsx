import GeneralProps2 from "@/commons/types/GeneralProps2";
import RadioButton from "../Parts/RadioButton/RadioButton";
import QuestionForApp from "../QuestionForApp/QuestionForApp";
import QuestionForCommunity from "../QuestionForCommunity/QuestionForCommunity";
import QuestionForMedia from "../QuestionForMedia/QuestionForMedia";
import QuestionForPort from "../QuestionForPort/QuestionForPort";
import QuestionForOther from "../QuestionForOther/QuestionForOther";

import { useState } from "react";

const options = [
    {
        id: 0,
        label: "アプリや車両などサービスについて",
        value: 0,
    },
    {
        id: 1,
        label: "自治体・施設の方向け",
        value: 1,
    },
    {
        id: 2,
        label: "報道・メディアの方向け",
        value: 2,
    },
    {
        id: 3,
        label: "ポート設置のご相談",
        value: 3,
    },
    {
        id: 4,
        label: "その他",
        value: 4,
    },
];

function getForm(formType: Forms) {
    switch (formType) {
        case Forms.App:
            return <QuestionForApp />
        case Forms.Community:
            return <QuestionForCommunity />
        case Forms.Media:
            return <QuestionForMedia />
        case Forms.Port:
            return <QuestionForPort />
        default:
            return <QuestionForOther />
    }
}

function FormMain({ className = "" }: GeneralProps2) {
    const _className = `flex flex-col space-y-6 justify-start ${className}`;
    const { formType, handleSelectFormType } = useFormMain();

    const Question = getForm(formType);

    return (
        <div className={_className}>
            <p className="">下記よりお問い合わせの種類をお選びください</p>
            <RadioButton
                label="お問い合わせの種類"
                options={options}
                required
                onSelected={handleSelectFormType}
                className="border-t py-6"
                value={formType}
            />
            <div className="border-t py-6">
                {Question}
            </div>
        </div>
    );
}

enum Forms {
    App,
    Community,
    Media,
    Port,
    Other,
}

interface FormMainController {
    formType: Forms;
    handleSelectFormType: (value: number) => void;
}

function useFormMain(): FormMainController{
    const [formType, setFormType] = useState<Forms>(Forms.App);

    function handleSelectFormType(value: number) {        
        setFormType(value);
    }

    return {
        formType,
        handleSelectFormType
    };
}

export default FormMain;
