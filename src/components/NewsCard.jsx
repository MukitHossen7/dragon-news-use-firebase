/* eslint-disable react/prop-types */
import { useState } from "react";
import { CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoMdCopy } from "react-icons/io";
import { MdVisibility } from "react-icons/md";

const NewsCard = ({ newsItem }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { title, author, rating, total_view, thumbnail_url, details } =
    newsItem;

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card card-compact w-full bg-base-100  mb-7 border border-gray-300 rounded-lg">
      <div className="flex items-center justify-between space-x-2 rounded-md  bg-gray-100 py-4 px-4 mb-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{author.name}</span>
            <span className="text-xs text-gray-400 font-medium">
              {author.published_date}
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <IoMdCopy className="text-2xl" />
          <CiShare2 className="text-2xl" />
        </div>
      </div>
      <div className="px-4 space-y-4">
        <h2 className="card-title">{title}</h2>
        <figure className="">
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full h-96 object-cover rounded-xl"
          />
        </figure>
        <div className="">
          <p className="text-sm text-gray-500">
            {isExpanded ? details : details.slice(0, 200)}...
          </p>

          <button
            onClick={handleReadMore}
            className="text-red-400 font-semibold mt-2 text-sm"
          >
            Read More
          </button>
          <div className="divider"></div>
          <div className="flex items-center justify-between pb-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`${
                    index < rating.number ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span>
                {rating.number} ({rating.badge})
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <MdVisibility />
              <span>{total_view}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
