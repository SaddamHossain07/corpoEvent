import { useLoaderData, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";

const ServiceDetail = () => {
    const services = useLoaderData()
    const { id } = useParams()

    const service = services.find(service => service.id == id)
    const { name, image, short_description, price } = service

    return (
        <div className="min-h-screen">

            <h2 className="text-5xl font-bold logoText mt-16 text-center">Service Details</h2>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 mt-6">
                <Marquee className="text-xl text-white" pauseOnHover={true}>
                    {short_description}
                </Marquee>
            </div>
            <div className="w-10/12 mx-auto flex gap-6 pt-10">
                <div className="w-8/12 rounded">
                    <img className="w-full" src={image} alt="" />
                </div>
                <div className="w-4/12">
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <h3 className="text-xl font-semibold text-blue-600 mt-6">Price : ${price}</h3>

                    <button className="btn btn-primary w-full mt-10">Book Now</button>
                </div>
            </div>
            <div className="w-10/12 mx-auto mt-6 mb-16">
                <p className="text-justify">{short_description}</p>
            </div>

        </div>
    );
};

export default ServiceDetail;