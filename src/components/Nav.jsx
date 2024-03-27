import { NavLink, Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import Button from "./Button";

const Nav = () => {
  return (
    <div className="fixed z-10 top-0 w-full text-clr-primary bg-white">
      <div className="navbar container mx-auto  font-work-sans mt-3 px-4 ">
        <div className="navbar-start w-full sm:w-1/2 ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {/* navbar items for mobile device */}
              <li className="*:hover:bg-green-400 hover:text-white">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "border border-clr-secondary text-clr-secondary hover:text-white"
                      : ""
                  }>
                  Home
                </NavLink>
              </li>
              <li className="*:hover:bg-green-400 hover:text-white">
                <NavLink
                  to="/listedbooks"
                  className={({ isActive }) =>
                    isActive
                      ? "border border-clr-secondary text-clr-secondary hover:text-white"
                      : ""
                  }>
                  Listed Books
                </NavLink>
              </li>
              <li className="*:hover:bg-green-400 hover:text-white">
                <NavLink
                  to="/pagestoread"
                  className={({ isActive }) =>
                    isActive
                      ? "border border-clr-secondary text-clr-secondary hover:text-white"
                      : ""
                  }>
                  Pages to Read
                </NavLink>
              </li>
              <li className="*:hover:bg-green-400 hover:text-white">
                <NavLink
                  to="/feedback"
                  className={({ isActive }) =>
                    isActive
                      ? "border border-clr-secondary text-clr-secondary hover:text-white"
                      : ""
                  }>
                  Feedback
                </NavLink>
              </li>
              <li className="*:hover:bg-green-300 hover:text-white">
                <NavLink
                  to="/donate"
                  className={({ isActive }) =>
                    isActive
                      ? "border border-clr-secondary text-clr-secondary hover:text-white"
                      : ""
                  }>
                  Donate <FaHeart size={20} color="#FF0000" />
                </NavLink>
              </li>
              <li className="mt-5 flex flex-row justify-around">
                <Button
                  message="Sign In"
                  bgColor="bg-clr-secondary"
                  textColor="text-white"
                />
                <Button
                  message="Sign Up"
                  bgColor="bg-clr-cyan"
                  textColor="text-white"
                />
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost hover:bg-green-400 text-xl sm:text-2xl font-bold hover:text-white transition ml-auto sm:ml-0">
            Book Vibe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1 font-medium lg:text-base">
            {/* navbar items for desktop device */}
            <li className="*:hover:bg-green-400 hover:text-white">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border border-clr-secondary text-clr-secondary hover:text-white"
                    : ""
                }>
                Home
              </NavLink>
            </li>
            <li className="*:hover:bg-green-400 hover:text-white">
              <NavLink
                to="/listedbooks"
                className={({ isActive }) =>
                  isActive
                    ? "border border-clr-secondary text-clr-secondary hover:text-white"
                    : ""
                }>
                Listed Books
              </NavLink>
            </li>
            <li className="*:hover:bg-green-400 hover:text-white">
              <NavLink
                to="/pagestoread"
                className={({ isActive }) =>
                  isActive
                    ? "border border-clr-secondary text-clr-secondary hover:text-white"
                    : ""
                }>
                Pages to Read
              </NavLink>
            </li>
            <li className="*:hover:bg-green-400 hover:text-white">
              <NavLink
                to="/feedback"
                className={({ isActive }) =>
                  isActive
                    ? "border border-clr-secondary text-clr-secondary hover:text-white"
                    : ""
                }>
                Feedback
              </NavLink>
            </li>
            <li className="*:hover:bg-green-300 hover:text-white">
              <NavLink
                to="/donate"
                className={({ isActive }) =>
                  isActive
                    ? "border border-clr-secondary text-clr-secondary hover:text-white"
                    : "flex flex-row items-center"
                }>
                Donate
                <FaHeart className="-ml-1" size={20} color="#FF0000" />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end ml-5 space-x-2 hidden sm:flex">
          <Button
            message="Sign In"
            bgColor="bg-clr-secondary"
            textColor="text-white"
          />
          <Button
            message="Sign Up"
            bgColor="bg-clr-cyan"
            textColor="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
