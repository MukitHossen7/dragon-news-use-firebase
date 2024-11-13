import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-4 bg-gray-100 py-3 px-3 rounded-md mt-9">
      <p className="bg-[#D72050] text-white font-medium text-lg px-5 py-2">
        Latest
      </p>
      <div>
        <Marquee pauseOnHover="true" speed="100">
          <Link className="mr-2 text-black font-medium">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Link>
          <Link className="mr-2 text-black font-medium">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
