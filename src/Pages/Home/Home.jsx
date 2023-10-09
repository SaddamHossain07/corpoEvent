import { useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import Banner from "../../Components/Banner/Banner";

const Home = () => {
    const servicesData = useLoaderData()
    console.log(servicesData)
    return (
        <div className="text-center">
            <Banner></Banner>
            <h2 className="text-5xl font-bold logoText">Out Services</h2>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 mt-6">
                <Marquee className="text-xl text-white" pauseOnHover={true}>
                    {/* Out Services for Event concept development and design to create a unique and memorable experience, Theming and décor services to enhance the event's atmosphere. We also planning and executing virtual or hybrid events, including webinars and online conferences. */}
                    {
                        servicesData.map(service => <p key={service.id}> {service.name}.   ({service.id})-</p>)
                    }
                </Marquee>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16  w-10/12 mx-auto">
                {
                    servicesData.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
            <div className="mt-10">
                <img src="https://i.ibb.co/DtvFzHr/what-our-client-sayes.png" alt="" />
            </div>
        </div>
    );
};

export default Home;