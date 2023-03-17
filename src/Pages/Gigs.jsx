import React, { useState } from "react";
import Gigdata from "../Componenets/Gigdata";
import Gigcard from "../Componenets/Gigcard";

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setsort] = useState("Sales");

  const reSort = (type) => {
    setOpen(false);
    setsort(type);
  };
  return (
    <div className="gigs flex justify-center">
      <div className="container w-4/5 py-6 px-0 flex flex-col space-y-2">
        <span className="bredcrums text-gray-400  text-sm">
          MSR > GRAPHICS DESIGN>
        </span>
        <h1 className="font-extrabold text-2xl">AI ARTIST</h1>
        <p className="text-gray-400 text-sm">
          Explore the Jobs in Here with your relevant scheme
        </p>
        <div className="menu flex items-center justify-between">
          <div className="left  space-x-3">
            <span className="text-gray-400 ">Budget:</span>
            <input
              type="number"
              name=""
              id=""
              placeholder="Min price"
              className=" w-24 border-2 border-gray-100 text-black rounded-sm"
            />
            <input
              type="number"
              name=""
              id=""
              placeholder="Max price"
              className=" w-24 border-2 border-gray-100 text-black rounded-sm"
            />
            <button className="bg-green-600 px-2 py-1 text-white rounded-md hover:bg-green-500">
              Apply
            </button>
          </div>

          <div className="right flex items-center space-x-3 relative cursor-pointer">
            <span className="text-gray-500">Sortby:</span>
            <span className="font-bold">
              {sort === "Sales" ? "Best Jobs" : "Newest"}
            </span>
            <img
              src="./img/down.png"
              alt="Down arrow"
              className={
                open
                  ? "w-5 h-5 rotate-180 transition-all duration-500"
                  : "w-5 h-5 transition-all duration-500"
              }
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="right-menu flex    flex-col absolute top-5 left-12 my-3 w-max bg-white p-3 shadow-md rounded-md space-y-2  ">
                {sort === "Sales" ? (
                  <span
                    className="hover:bg-gray-300 px-2 hover:rounded-md"
                    onClick={() => reSort("CreatedAt")}
                  >
                    Newest
                  </span>
                ) : (
                  <span
                    className="hover:bg-gray-300 px-2 hover:rounded-md"
                    onClick={() => reSort("Sales")}
                  >
                    Best Jobs
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="container flex w-full justify-between  flex-wrap py-4 ">
          {Gigdata.map((gig) => {
            return (
              <>
                <Gigcard key={gig.id} item={gig} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
