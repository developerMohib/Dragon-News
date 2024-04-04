import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../images/qZone1.png"
import qZone2 from "../../images/qZone2.png"
import qZone3 from "../../images/qZone3.png"
const RightSide = () => {
  return (
    <div>
      {/* Log In */}
      <div className="space-y-3">
        <h1 className="font-bold text-2xl">Log In </h1>
        <div>
          <button className="btn btn-outline">
            {" "}
            <FaGoogle /> Log In With Google{" "}
          </button>
        </div>
        <div>
          <button className="btn btn-outline">
            {" "}
            <FaGithub /> Log In With Google{" "}
          </button>
        </div>
      </div>
      {/* Follow Us */}
      <div className="space-y-3 mt-10">
        <h1 className="font-bold text-2xl"> Find Us On</h1>
        <div className="space-y-2">
          <a
            className="flex items-center border border-gray-400 p-3 rounded-lg hover:bg-gray-200"
            href=""
          >
            <FaFacebook className="mr-3" /> Facebook{" "}
          </a>
          <a
            className="flex items-center border border-gray-400 p-3 rounded-lg hover:bg-gray-200"
            href=""
          >
            <FaTwitter className="mr-3" /> Twitter{" "}
          </a>
          <a
            className="flex items-center border border-gray-400 p-3 rounded-lg hover:bg-gray-200"
            href=""
          >
            <FaInstagram className="mr-3" /> Instagram{" "}
          </a>
        </div>
      </div>
      {/* Kids Zone */}
      <div className="space-y-3 mt-10">
        <h1 className="font-bold text-2xl"> Q Zone </h1>
        <div>
          <div className="card bg-base-100 shadow-xl">
            <figure className="pt-10">
            <img
                src={qZone1}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <figure className="pt-10">
            <img
                src={qZone2}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <figure className="pt-10">
            <img
                src={qZone3}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
