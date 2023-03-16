import React from "react";

const Featured = () => {
  return (
    <div className="featured flex justify-center h-[600px] bg-green-900 text-white">
      <div className="container w-4/5 p-3 flex items-center justify-between  ">
        <div className="left flex-1 space-y-6">
          <h1 className="text-4xl font-bold font-sans">
            Find the <span className="font-thin italic ">Perfect Job</span> here
            according to your Skill
          </h1>
          <div className="search  ">
            <div className="searchInput flex items-center relative">
              <input
                type="text"
                autoFocus
                placeholder='Try "searching web devlopment Jobs"'
                className="w-4/5 h-10 px-10 text-black"
              />
              <img
                src="./img/search.png"
                alt="search img"
                className="w-6 h-6 absolute top-2 left-2 z-20"
              />
              <button className="h-10 w-max bg-green-300 px-4 text-sm font-medium">
                Search
              </button>
            </div>
          </div>
          <div className="popular space-x-3 my-6 text-sm">
            <span>Popular:</span>
            <button className="border-2 border-white rounded-3xl px-2 py-1">
              Graphic Designer
            </button>
            <button className="border-2 border-white rounded-3xl px-2 py-1">
              {" "}
              Block Chain
            </button>
            <button className="border-2 border-white rounded-3xl px-2 py-1">
              A.I. Services
            </button>
            <button className="border-2 border-white rounded-3xl px-2 py-1">
              Web Devloper
            </button>
          </div>
        </div>
        <div className="right flex-1">
          <img src="./img/man.png" alt="man img" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
