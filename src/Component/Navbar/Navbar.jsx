import { NavLink } from "react-router-dom";
import userDefault from "../../images/user.png";

const Navbar = () => {
    const navLinks = <>
    <NavLink
      className={({ isActive }) => (isActive ? "underline mx-2" : "mx-2")}
      to="/"
    >
      {" "}
      Home{" "}
    </NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? "underline mx-2" : "mx-2")}
      to="/blog"
    >
      {" "}
      Blog
    </NavLink>
    <NavLink
      className={({ isActive }) => (isActive ? "underline mx-2" : "mx-2")}
      to="/contact"
    >
      Contact
    </NavLink>
    </>
  return (
    <div className="">
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="flex items-center">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={userDefault} />
          </div>
        </div>
        <NavLink
          className={({ isActive }) => (isActive ? "underline mx-2" : "mx-2")}
          to="/login"
        >
          {" "}
          Log In{" "}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "underline mx-2" : "mx-2")}
          to="/register"
        >
          {" "}
          Register{" "}
        </NavLink>
      </div>
  </div>
</div>




    </div>
  );
};

export default Navbar;
