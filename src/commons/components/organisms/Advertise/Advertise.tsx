import ImageSlider from "../../molecules/ImageSlider/ImageSlider";
import ImageInfos from "@/commons/enums/images.gen";

function Advertise() {
    const firstAds = [
        ImageInfos.AdApa,
        ImageInfos.AdFamilymart,
        ImageInfos.AdJrNishi,
        ImageInfos.AdJrHigashi,
        ImageInfos.AdJrNishi,
        ImageInfos.AdLawson,
        ImageInfos.AdLumine,
        ImageInfos.AdMaruetsu,
        ImageInfos.AdMitsuifudosan,
    ].map(info => info.changeHeight(80).plainObject);

    const secondAds = [
        ImageInfos.AdMoriTrust,
        ImageInfos.AdMitubishijisho,
        ImageInfos.AdNewotani,
        ImageInfos.AdNomurafudosan,
        ImageInfos.AdSankeiOther,
        ImageInfos.AdSankei,
        ImageInfos.AdTobu,
        ImageInfos.AdToyokoinn,
    ].map(info => info.changeHeight(80).plainObject);

  return (
    <div className="flex flex-col space-y-8">
        <ImageSlider imageInfos={firstAds}/>
        <ImageSlider imageInfos={secondAds}/>
    </div>
  );
}

export default Advertise;
