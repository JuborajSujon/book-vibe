import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="fixed top-0 w-full">
      <div className="navbar container mx-auto  font-work-sans mt-4 px-4">
        <div className="navbar-start">
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
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1 *:text-lg font-semibold">
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
                    : ""
                }>
                Donate
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn bg-clr-secondary">Sign In</Link>
          <Link className="btn bg-clr-cyan ml-4">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
