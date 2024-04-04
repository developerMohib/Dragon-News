import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div>
            <NavLink className={( {isActive} )=> isActive ? 'underline mx-2' : 'mx-2' } to='/' > Home </NavLink>
            <NavLink className={( {isActive} )=> isActive ? 'underline mx-2' : 'mx-2' } to='/blog' > Blog</NavLink>
            <NavLink className={( {isActive} )=> isActive ? 'underline mx-2' : 'mx-2' } to='/contact' >Contact</NavLink>
            </div>

            <div>
            <NavLink className={( {isActive} )=> isActive ? 'underline mx-2' : 'mx-2' } to='/login' > Log In </NavLink>
            <NavLink className={( {isActive} )=> isActive ? 'underline mx-2' : 'mx-2' } to='/register' > Register </NavLink>
            </div>
        </div>
    );
};

export default Navbar;