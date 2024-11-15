import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";
import LoginWith from "../components/LayoutComponents/LoginWith";

const NewsDetails = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto font-Poppins mb-6">
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 gap-6 mt-10">
        <section className="col-span-9">
          <h3 className="font-semibold text-xl">Dragon News</h3>
          {data.map((item) => (
            <Card key={item._id} item={item}></Card>
          ))}
        </section>
        <aside className="col-span-3">
          <LoginWith></LoginWith>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
