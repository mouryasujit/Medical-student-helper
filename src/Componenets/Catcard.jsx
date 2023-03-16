import React from "react";
import { Link } from "react-router-dom";

const Catcard = ({ items }) => {
  return (
    <>
      <Link to="/gigs?cat=design">
        <div
          className="catCard h-64 w-52 flex relative backdrop-blur-md backdrop-brightness-150 rounded-md"
          key={items.id}
        >
          <img
            src={items.img}
            alt=""
            className="brightness-50 h-64 w-48 rounded-md"
          />
          <div className="info w-4/5 p-2 flex flex-col absolute top-0 left-0  text-white ">
            <span className="title font-bold text-xl ">{items.title}</span>
            <span className="desc font-semibold">{items.desc}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Catcard;
