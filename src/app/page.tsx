import Header from "@/commons/components/organisms/Header/Header";
import Overview from "@/commons/components/organisms/Overview/Overview";
import Advertise from "@/commons/components/organisms/Advertise/Advertise";

function HomePage() {
    return (
        <div className="flex flex-col space-y-8">
            <Header />
            <Overview />
            <Advertise />
        </div>
    )
}

export default HomePage;
