
import moment from 'moment';
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div className='text-center mb-10 mt-2 space-y-2'>
            <img className='mx-auto' src={logo} alt="" />
            <h1> Jerujalem without fear or favor </h1>
            <p> {moment().format("dddd, MMMM D YYYY")} </p>
        </div>
    );
};

export default Header;