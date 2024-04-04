import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";

const Register = () => {
    return (
        <div>
            <Navbar> </Navbar>
            <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="">
            <div className="text-center">
              <h1 className="text-5xl font-bold my-5 ">Register now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="email"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              <div>
                <p>Already have an Account? </p>
                <Link className=" btn btn-ghost" to='/register' > Log in </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;