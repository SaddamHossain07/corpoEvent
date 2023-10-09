import { useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";

const Home = () => {
    const servicesData = useLoaderData()
    console.log(servicesData)
    return (
        <div>
            <div className="py-16 text-center">
                <h2 className="text-5xl font-bold logoText">Out Services</h2>
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 mt-6">
                    <Marquee className="text-xl text-white" pauseOnHover={true}>
                        Out Services for Event concept development and design to create a unique and memorable experience, Theming and décor services to enhance the event's atmosphere. We also planning and executing virtual or hybrid events, including webinars and online conferences.
                    </Marquee>
                </div>


            </div>
        </div>
    );
};

export default Home;