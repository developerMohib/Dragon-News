import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="text-center ">
            <h1> Oops!! </h1>
            <Link to='/'>
            <button className="outline">Go Home</button>
            </Link>
            </div>
        </div>
    );
};

export default ErrorPage;