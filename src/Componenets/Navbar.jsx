import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [bgwhit, setbgwhite] = useState(false);
  const [open, SETopen] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setbgwhite(true) : setbgwhite(false);
  };
  useEffect(() => {
    const changeBg = () => {
      window.addEventListener("scroll", isActive);
      return () => {
        window.removeEventListener("scroll", isActive);
      };
    };
    changeBg();
  }, []);
  const { pathname } = useLocation();
  const currUser = {
    id: 1,
    username: "Sujit Mourya",
    isSeller: true,
  };
  return (
    <div
      className={
        bgwhit || pathname !== "/"
          ? "navbar flex h-16 items-center cursor-pointer bg-white text-black sticky top-0 transition duration-700 ease-in-out  z-50"
          : "navbar flex h-16 items-center cursor-pointer bg-green-900 text-white sticky top-0 z-50"
      }
    >
      <div className="container md:w-4/5  mx-auto flex justify-between items-center px-3 py-1   ">
        <div className="logo">
          <Link to="/">
            <span className=" text-3xl font-semibold ">MSR</span>
          </Link>
          <span className="text-4xl  font-bold text-green-700">.</span>
        </div>
        <div className="links flex  space-x-3 font-medium items-center ">
          <span>Jobs</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          {!currUser?.isSeller && <span>Enterpreneur</span>}
          {!currUser && (
            <button className=" border-2 border-white px-3 py-1 text-sm rounded-md hover:bg-green-500 hover:text-white   ">
              Join
            </button>
          )}
          {currUser && (
            <div className="user flex items-center relative  ">
              <span className="bg-red-700 rounded-full text-white h-7 w-7 flex items-center justify-center font-bold mx-1">
                {currUser.username.charAt(0)}{" "}
              </span>
              <span onClick={() => SETopen(!open)}>{currUser?.username}</span>
              {open && (
                <div className="options absolute top-12 right-0 p-5 bg-white rounded-xl text-gray-600 flex flex-col border-2 border-gray-500 space-y-1 w-52 shadow-md transition duration-700 ease-in-out">
                  {currUser?.isSeller && (
                    <>
                      <Link
                        to="/mygigs"
                        className="hover:bg-gray-400 hover:rounded-md p-2"
                      >
                        Jobs
                      </Link>
                      <Link
                        to="/add"
                        className="hover:bg-gray-400 hover:rounded-md p-2"
                      >
                        Add Jobs
                      </Link>
                    </>
                  )}
                  <Link
                    to="/orders"
                    className="hover:bg-gray-400 hover:rounded-md p-2"
                  >
                    Selected
                  </Link>
                  <Link
                    to="/messages"
                    className="hover:bg-gray-400 hover:rounded-md p-2"
                  >
                    Message
                  </Link>
                  <Link
                    to="/"
                    className="hover:bg-gray-400 hover:rounded-md p-2"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
