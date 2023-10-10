import Marquee from "react-fast-marquee";
const About = () => {
    return (
        <div>
            <h2 className="text-5xl font-bold logoText text-center mt-16">About Us</h2>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-4 mt-10">
                <Marquee className="text-xl text-white" pauseOnHover={true}>
                    Welcome to corpoEvent, where memorable corporate events come to life!
                </Marquee>
            </div>
            <div className="w-10/12 mx-auto">
                <p className="pt-10 text-justify mb-10">
                    At corpoEvent, we specialize in crafting exceptional corporate events that leave a lasting impression. With a passion for perfection and an unwavering commitment to excellence, we take pride in being your go-to partner for all your event management needs. <br /> <br />

                    Our Expertise:
                    Conferences and Seminars: Transform your ideas into thought-provoking conferences and enlightening seminars. We ensure every detail is meticulously planned to create an environment where ideas can flourish. <br /> <br />

                    Trade Shows and Expos:
                    Elevate your brand presence with captivating trade shows and expos. Our team has the experience to turn your exhibition space into an engaging and dynamic showcase of your products and services. <br /> <br />

                    Team Building Workshops:
                    Foster team spirit and unity through our innovative team building workshops. We design activities that challenge, inspire, and unite your employees for improved collaboration. <br /> <br />

                    Product Launches:
                    Launch your latest innovations in style with our product launch expertise. From captivating presentations to immersive experiences, we ensure your product receives the attention it deserves. <br /> <br />

                    Corporate Meetings:
                    Seamlessly execute corporate meetings that are both productive and efficient. We handle all the logistics, so you can focus on what truly matters: the content of your meeting. <br /> <br />

                    Award Ceremonies:
                    Recognize and celebrate excellence within your organization with our meticulously planned award ceremonies. We create a memorable atmosphere that highlights the achievements of your team. <br /> <br />

                    <span className="text-2xl font-bold mb-10">Why Choose corpoEvent? </span>
                    <br /> <br />
                    Experience:
                    With years of experience in the industry, we bring a wealth of knowledge to every event we undertake. Our seasoned professionals ensure everything runs smoothly, from concept to execution. <br />
                    <br />

                    Creativity:
                    We thrive on innovation and creativity. Our team is dedicated to bringing fresh and imaginative ideas to the table, ensuring that your event stands out from the rest. <br /> <br />

                    Customization: We understand that every client and event is unique. We work closely with you to tailor our services to your specific needs, ensuring that your vision becomes a reality. <br /> <br />

                    Attention to Detail:
                    We sweat the small stuff so you don't have to. From venue selection and logistics planning to on-site management, we leave no stone unturned in our pursuit of excellence. <br /> <br />

                    Client Satisfaction:
                    Our ultimate goal is your satisfaction. We measure our success by the smiles on our clients' faces and the success of their events. <br /> <br />

                    At corpoEvent, we don't just plan events; we create experiences that leave a lasting impact. Whether you're hosting a large conference, an intimate corporate meeting, or anything in between, trust us to make it extraordinary. <br /> <br />

                    Let's collaborate to turn your corporate event vision into a reality. Contact us today to discuss how we can make your next event a resounding success.
                </p>
            </div>
        </div>
    );
};

export default About;