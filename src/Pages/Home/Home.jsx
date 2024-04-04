import Marquee from "react-fast-marquee";
import Header from "../../Component/Header/Header";
import LeftSide from "../../Component/LeftSide/LeftSide";
import RightSide from "../../Component/RightSide/RightSide";
import Navbar from "../../Component/Navbar/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CiShare2,CiBookmark,CiStar } from "react-icons/ci";
import { MdRemoveRedEye } from "react-icons/md";
import { BiLike } from "react-icons/bi";

const Home = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(`/news.json`)
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  console.log(news);
  return (
    <div>
      <Header> </Header>
      <div className="flex">
        <button className=" btn btn-secondary">Breaking News</button>
        <Marquee pauseOnHover={true}>
          <Link to="/login">
            {" "}
            I can be a React component, multiple React components, or just some
            text.{" "}
          </Link>
        </Marquee>
      </div>
      <div>
        <Navbar> </Navbar>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-10">
        <div>
          <LeftSide> </LeftSide>
        </div>

        <div className="md:col-span-2">
          <h1> This is Middle Section {news.length} </h1>
          {news.slice(0, 3).map((sNews) => (
            <>
              <div key={sNews.category_id}>
                <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                  <div className="flex justify-between space-x-4">
                    <div className="flex gap-4">
                    <img
                      alt=""
                      src={sNews.author.img}
                      className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                    />
                    <div className="flex flex-col space-y-1">
                      <a className="text-sm font-semibold">
                        {" "}
                        {sNews.author.name}{" "}
                      </a>
                      <span className="text-xs dark:text-gray-600">
                        {sNews.author.published_date}
                      </span>
                    </div>
                    </div>

                    <div className="space-x-2">
                      <button
                        aria-label="Share this post"
                        type="button"
                        className="p-2 text-center"
                      >
                        <CiShare2 />
                      </button>
                      <button
                        aria-label="Bookmark this post"
                        type="button"
                        className="p-2"
                      >
                        <CiBookmark />
                      </button>
                    </div>
                  </div>
                  <div>
                    <h2 className="mb-1 text-xl font-semibold">
                      {" "}
                      {sNews.title}{" "}
                    </h2>
                    <img
                      src={sNews.thumbnail_url}
                      alt=""
                      className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
                    />
                    <p className="text-sm dark:text-gray-600">
                      {" "}
                      {sNews.details}{" "}
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-between">
                    <div className="space-x-2">
                      <button
                        aria-label="Share this post"
                        type="button"
                        className="p-2 text-center"
                      >
                        <CiStar />
                      </button>
                    </div>
                    <div className="flex space-x-2 text-sm dark:text-gray-600">
                      <button
                        type="button"
                        className="flex items-center p-1 space-x-1.5"
                      >
                        <MdRemoveRedEye />
                        <span>30</span>
                      </button>
                      <button
                        type="button"
                        className="flex items-center p-1 space-x-1.5"
                      >
                        <BiLike />
                        <span>283</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

        <div>
          <RightSide> </RightSide>
        </div>
      </div>
    </div>
  );
};

export default Home;
