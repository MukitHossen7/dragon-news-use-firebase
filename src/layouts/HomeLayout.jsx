import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto font-Poppins">
      <header>
        <Header></Header>
        <LatestNews></LatestNews>
      </header>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="grid md:grid-cols-12 mt-20">
        <div className="col-span-3">Left side bar</div>
        <div className="col-span-6"> Middle area</div>
        <div className="col-span-3">Right side bar</div>
      </main>
    </div>
  );
};

export default HomeLayout;
