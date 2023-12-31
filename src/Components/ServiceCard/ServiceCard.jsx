import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { id, name, image, short_description, price } = service
    return (
        <div className="card card-compact shadow-xl">
            <figure><img className="h-48 w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">${price}</div>
                </h2>
                <p className="text-justify">{
                    short_description.slice(0, 125)}........</p>
                <Link to={`/service-detail/${id}`}>
                    <button className="btn text-white w-full border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">View Detail</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;