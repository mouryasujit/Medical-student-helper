import React from "react";
import { Link } from "react-router-dom";

const Catcard2 = ({ items }) => {
  return (
    <>
      <Link to="/gigs?cat=design">
        <div className="project-card flex flex-col shadow-sm bg-gray-100 py-3  rounded-md ">
          <div className="img h-56 w-52">
            <img src={items.img} alt="" className="h-56 w-48 rounded-md" />
          </div>
          <div className="info flex items-center  ">
            <img src={items.img} alt="" className="h-8 w-8 rounded-full" />
            <div className="more p-3">
              <h2 className="font-bold text-lg">{items.title.slice(0, 7)}</h2>
              <p className="text-gray">{items.desc}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Catcard2;
