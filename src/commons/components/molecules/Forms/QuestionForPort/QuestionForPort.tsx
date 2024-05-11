import GeneralProps2 from "@/commons/types/GeneralProps2";

function QuestionForPort({ className = "" }: GeneralProps2) {
    const _className = `${className}`;

    return (
        <div className={_className}>
            ポート設置については専用の<a className="text-primary-200" href="#">ご相談フォーム</a>よりお問い合わせください
        </div>
    );
}

export default QuestionForPort;
