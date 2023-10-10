import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import HowWeWork from "../../Components/HowWeWork/HowWeWork";

const Home = () => {
    const servicesData = useLoaderData()

    return (
        <div className="text-center">
            <Banner></Banner>
            <Services servicesData={servicesData}></Services>
            <div className="border-y-2 mt-16">
                <img className="w-full" src="https://i.ibb.co/9sfBrTj/banner.jpg" alt="" />
            </div>
            <HowWeWork></HowWeWork>
            <div className="mt-10">
                <img src="https://i.ibb.co/DtvFzHr/what-our-client-sayes.png" alt="" />
            </div>

        </div>
    );
};

export default Home;