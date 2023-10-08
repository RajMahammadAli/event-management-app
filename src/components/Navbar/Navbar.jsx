import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaBeer, FaUser } from "react-icons/fa";

export default function () {
  const { user, userLogOut } = useContext(AuthContext);
  const handleLogOut = () => {
    userLogOut();
  };
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-pink-500" : ""
        }
      >
        <span className="mr-2 text-base font-bold">Home</span>
      </NavLink>

      <NavLink
        to="/Store"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-pink-500" : ""
        }
      >
        <span className="mr-2 text-base font-bold">Store</span>
      </NavLink>
      <NavLink
        to="/ClassSchedule"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-pink-500" : ""
        }
      >
        <span className="mr-2 text-base font-bold">ClassSchedule</span>
      </NavLink>

      <NavLink
        to="/Features"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-pink-500" : ""
        }
      >
        <span className="mr-2 text-base font-bold">About Us</span>
      </NavLink>
    </>
  );

  return (
    <>
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <Link to="/" className="cursor-pointer normal-case text-xl">
              <img
                className="w-28"
                src="https://i.ibb.co/D7gft7R/Pink-Minimalist-Yoga-Center-Logo-1.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="flex justify-center items-center space-x-3">
                <div className="flex justify-center items-center">
                  <div className="mr-2">
                    <p>{user.displayName}</p>
                  </div>
                  <div>
                    {user.photoURL ? (
                      <img
                        className="w-12 rounded-full"
                        src={user.photoURL}
                      ></img>
                    ) : (
                      <FaUser></FaUser>
                    )}
                  </div>
                </div>
                <button onClick={handleLogOut} className="btn mr-2">
                  log out
                </button>
              </div>
            ) : (
              <div>
                <Link to="/register" className="btn mr-2">
                  Register
                </Link>
                <Link to="/login" className="btn">
                  Log In
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
