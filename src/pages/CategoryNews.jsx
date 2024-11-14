import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();

  return (
    <div>
      <h3 className="font-semibold text-xl mb-3">Dragon News Home</h3>
      {news.map((newsItem) => (
        <NewsCard key={newsItem._id} newsItem={newsItem}></NewsCard>
      ))}
    </div>
  );
};

export default CategoryNews;
