import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Category from "../components/LayoutComponents/Category";

import Navbar from "../components/Navbar";
import LoginWith from "../components/LayoutComponents/LoginWith";

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
      <main className="grid md:grid-cols-12 mt-20 gap-8">
        <div className="col-span-3">
          <Category></Category>
        </div>
        <div className="col-span-6">
          <Outlet></Outlet>
        </div>
        <div className="col-span-3">
          <LoginWith></LoginWith>
        </div>
      </main>
    </div>
  );
};

export default HomeLayout;
