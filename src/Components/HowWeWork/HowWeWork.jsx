
const HowWeWork = () => {
    return (
        <div className="w-10/12 mx-auto">
            <h2 className="text-5xl font-bold logoText text-center py-16">How We Work</h2>

            <div className="space-y-2 text-start text-white">
                <div className="collapse collapse-arrow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Event Planning and Coordination:
                    </div>
                    <div className="collapse-content">
                        <p>Full-service event planning for corporate meetings, conferences, seminars, and workshops.
                            On-site event coordination to ensure everything runs smoothly during the event.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Budget Management:
                    </div>
                    <div className="collapse-content">
                        <p>Financial planning and budgeting to ensure cost-effective events.
                            Expense tracking and management throughout the event planning process.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Attendee Registration and Management:
                    </div>
                    <div className="collapse-content">
                        <p>Online registration and ticketing services for attendees.
                            Managing attendee lists and tracking RSVPs.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Technology Integration:
                    </div>
                    <div className="collapse-content">
                        <p>Integration of event management software and mobile apps for registration and engagement.
                            Technical support for audiovisual and IT needs during events.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Marketing and Promotion:
                    </div>
                    <div className="collapse-content">
                        <p>
                            Event promotion and marketing services, including social media, email campaigns, and advertising.
                            Branding and promotional materials design.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Transportation and Logistics:
                    </div>
                    <div className="collapse-content">
                        <p>Transportation coordination for attendees.
                            Logistics planning, including travel arrangements and accommodation.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Virtual and Hybrid Event Solutions:
                    </div>
                    <div className="collapse-content">
                        <p>Services for planning and executing virtual or hybrid events, including webinars and online conferences.</p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default HowWeWork;