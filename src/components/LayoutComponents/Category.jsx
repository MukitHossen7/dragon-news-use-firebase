import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Category = () => {
  const [categorys, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data.data.news_category));
  }, []);
  return (
    <div>
      <h3 className="font-semibold text-xl mb-3">
        All Category({categorys.length})
      </h3>
      {categorys.map((category) => (
        <div key={category.category_id} className="my-4 flex">
          <NavLink
            to={`/category/${category.category_id}`}
            className=" py-4 px-3 w-full text-center rounded-xl"
          >
            {category.category_name}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Category;
