import React from "react";
import { Link } from "react-router-dom";

const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard w-[300px] h-max p-3 space-y-2 border-2 border-gray-200 mb-3 shadow-md">
        <img src={item.img} alt="" className="w-full h-[170px]" />
        <div className="info ">
          <div className="user flex items-center space-x-2">
            <img src={item.pp} alt="" className="w-8 h-8 rounded-full" />
            <span>{item.username}</span>
          </div>
          <p className="text-gray-500 p-2">{item.desc}</p>
          <div className="star flex items-center space-x-2">
            <img src="./img/star.png" alt="" className="h-5 w-5" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="detail flex items-center justify-between p-2">
          <img src="./img/heart.png" alt="" className="h-7 w-7" />
          <div className="price text-xs">
            <span>STARTING AT</span>
            <h2>
              $ {item.price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
