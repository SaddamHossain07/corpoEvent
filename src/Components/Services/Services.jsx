import Marquee from "react-fast-marquee";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";

const Services = ({ servicesData }) => {
    return (
        <div className="mt-16">
            <h2 className="text-5xl font-bold logoText">Our Services</h2>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 mt-6">
                <Marquee className="text-xl text-white" pauseOnHover={true}>
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
        </div>
    );
};

export default Services;