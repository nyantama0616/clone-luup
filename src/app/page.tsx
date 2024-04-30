import Header from "@/commons/components/organisms/Header/Header";
import Overview from "@/commons/components/organisms/Overview/Overview";
import Advertise from "@/commons/components/organisms/Advertise/Advertise";
import WhyLuup from "@/commons/components/organisms/WhyLuup/WhyLuup";

function HomePage() {
    return (
        <div className="flex flex-col space-y-16">
            <Header />
            <Overview />
            <Advertise />
            <WhyLuup />
        </div>
    )
}

export default HomePage;
