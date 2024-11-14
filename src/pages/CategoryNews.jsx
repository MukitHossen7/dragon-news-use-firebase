import { useLoaderData } from "react-router-dom";

const CategoryNews = () => {
  const categoryNews = useLoaderData();
  console.log(categoryNews);
  return (
    <div>
      <h3 className="font-semibold text-xl mb-3">Dragon News Home</h3>
    </div>
  );
};

export default CategoryNews;
