/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { image_url, title, details } = item;
  return (
    <div className="card bg-base-100 mt-3 border border-gray-300 ">
      <figure className="px-8 pt-8">
        <img
          src={image_url}
          alt="Shoes"
          className="rounded-xl w-full object-cover"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <p>{details}</p>
        <div className="card-actions">
          <Link
            to="/category/01"
            className="bg-[#D72050] text-white font-medium px-6 py-3"
          >
            All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
