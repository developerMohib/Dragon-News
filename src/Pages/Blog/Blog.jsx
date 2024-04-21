import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import RightSide from "../../Component/RightSide/RightSide";

const Blog = () => {
  const newsBlog = useLoaderData();
  const {id} = useParams();
//   console.log(id, 'id paici kina' , typeof id );
  const findBlog = newsBlog.find(bbb => bbb._id == id );
// console.log(findBlog, 'check')
  return (
    <div>
      <Navbar> </Navbar>
      <div className="md:grid grid-cols-5 md:gap-16">
        <div className="col-span-4">
        <img src={findBlog.image_url} alt="" />
        <div className="flex justify-between" >
            <span>comment : {findBlog.total_view} </span>
        </div>
        <div className="flex justify-between" >
            <span> Ratings : {findBlog.rating.number}</span>
            <span> {findBlog.rating.badge}</span>
        </div>
        <div className="flex justify-between" >
            <span> {findBlog.others_info.is_todays_pick}</span>
            <span> {findBlog.others_info.is_trending}</span>
        </div>
        <p className="text-2xl " > {findBlog.title} </p>
        <p> {findBlog.details} </p>
        <div>
            <img className="w-16 rounded-full" src={findBlog.author.img} alt="" />
            <p> Name : {findBlog.author.name} </p>
            <p> Published Date : {findBlog.author.published_date} </p>
        </div>
        </div>

        <div className="grid-cols-1">
          <RightSide> </RightSide>
        </div>
      </div>
    </div>
  );
};

export default Blog;
