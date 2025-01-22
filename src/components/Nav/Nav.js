import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {

    const navigate = useNavigate();
//   const [user, loading, error] = useAuthState(auth);
//   const logout = () => {
//     signOut(auth);
//     navigate("/login");
//   };

  const menuitems = (
    <>
      <li className="">
        {" "}
        <Link to="/">Home</Link>
      </li>
      {/* <li>
        {" "}
        <Link to="/appoinment">Appoinment</Link>
      </li> */}
      <li>
        {" "}
        <Link to="/alldoctorlist">Our Doctors</Link>
      </li>
      {/* <li>
        {" "}
        <Link to="/our-department">Our Department</Link>
      </li> */}
      <li>
        {" "}
        <Link to="/health-checkup" className="rounded-lg  ">Health Check-Up Packages</Link>
      </li>
      <li>
        {" "}
        <Link to="/about">About</Link>
      </li>
      {/* {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )} */}
      {/* <li>
        {user ? (
          <button className="btn btn-sm btn-ghost" onClick={logout}>
            {" "}
            Sign Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li> */}
    </>
  );
    return (
        <div>
            <div className="sticky top-0 z-50">
      <div className="navbar bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] text-white ">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 mx-5 shadow bg-base-100 rounded-box w-52 text-green-900"
            >
              {menuitems}
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">{menuitems}</ul>
        </div>
        <div className="navbar-end lg:hidden">
        {/* <label htmlFor="dashboard-sidebar" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
        <label htmlFor="dashboard-sidebar" tabIndex={1} className="btn btn-ghost lg:hidden">
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
        </div>
      </div>
    </div>
        </div>
    );
};

export default Nav;