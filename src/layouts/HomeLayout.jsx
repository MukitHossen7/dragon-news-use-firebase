import Header from "../components/Header";
import LatestNews from "../components/LatestNews";

const HomeLayout = () => {
  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
      <header>
        <Header></Header>
      </header>
      <div>
        <LatestNews></LatestNews>
      </div>
    </div>
  );
};

export default HomeLayout;
