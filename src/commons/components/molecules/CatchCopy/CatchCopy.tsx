import MyImage from "../../atoms/MyImage/MyImage";
import ImageInfos from "@/commons/enums/images.gen";

// TODO: フォントサイズもっと大きくする

function CatchCopy() {
    return (
        <div className="text-dark">
            <p className="mb-4 text-xl">
                街中を
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
