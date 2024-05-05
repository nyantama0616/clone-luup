import MyImage from "../../atoms/MyImage/MyImage";
import ImageInfos from "@/commons/enums/images.gen";
import GeneralProps2 from "@/commons/types/GeneralProps2";
// TODO: フォントサイズもっと大きくする

interface CatchCopyProps extends GeneralProps2 {

}
function CatchCopy({ className }: CatchCopyProps) {
    const _className = `flex flex-col text-dark space-y-2 ${className}`;
    return (
        <div className={_className}>
            <p className="mb-4 text-3xl leading-normal">
                街じゅうを
                <br />
                「駅前化」する
                <br />
                インフラをつくる
            </p>

            <MyImage
                info={ImageInfos.Logo.changeWidth(140)}
            />
        </div>
    );
}

export default CatchCopy;
