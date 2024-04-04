import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div>
            <NavLink to='/' > Home </NavLink>
            <NavLink to='/blog' > Blog</NavLink>
            <NavLink to='/contact' >Contact</NavLink>
            </div>

            <div>
            <NavLink to='/login' > Log In </NavLink>
            <NavLink to='/register' > Register </NavLink>
            </div>
        </div>
    );
};

export default Navbar;