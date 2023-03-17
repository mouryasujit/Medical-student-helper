import React from "react";
import Featured from "../Componenets/Featured";
import ReactSimplyCarouselExample from "../Componenets/ReactSimplyCarousel ";
import ReactSimplyCarouselExample2 from "../Componenets/ReactSimplyCarousel2";

const Home = () => {
  return (
    <>
      <div>
        <Featured />
        <div className="trustedby flex items-center justify-center  space-x-10  p-4 mx-auto bg-gray-100 shadow-inner ">
          <span className="text-lg font-semibold text-gray-400">
            Trusted By:
          </span>
          <img src="./img/facebook.png" alt="facebook img" />
          <img src="./img/instagram.png" alt="instgram" />
          <img src="./img/twitter.png" alt="netflix" />
          <img src="./img/pinterest.png" alt="linkedin" />
        </div>

        <ReactSimplyCarouselExample />
        <div className="features bg-[#f1fcf8]">
          <div className="container w-4/5 flex mx-auto py-4 text-justify space-x-2 space-y-2">
            <div className="item flex-1  space-y-1 py-4">
              <h1 className="text-3xl font-bold ">
                A whole world of freelance talent at your fingertips
              </h1>
              <div className="title flex items-center space-x-1 font-semibold">
                <img src="./img/check.png" alt="" className="mr-2" />
                The best for every budget
              </div>
              <p className="py-2 text-gray-600">
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>
              <div className="title  flex items-center space-x-1 font-semibold ">
                <img src="./img/check.png" alt="" className="mr-2" />
                Quality work done quickly
              </div>
              <p className="py-2 text-gray-600">
                Find the right freelancer to begin working on your project
                within minutes.
              </p>
              <div className="title  flex items-center space-x-1  font-semibold">
                <img src="./img/check.png" alt="" className="mr-2" />
                Protected payments, every time
              </div>
              <p className="py-2 text-gray-600">
                Always know what you'll pay upfront. Your payment isn't released
                until you approve the work.
              </p>
              <div className="title  flex items-center space-x-1 font-semibold">
                <img src="./img/check.png" alt="" className="mr-2" />
                24/7 support
              </div>
              <p className="py-2 text-gray-600">
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>
            </div>
            <div className="item flex-1 flex items-center justify-center ">
              <video
                src="./img/bookimgAi.jpeg"
                controls
                className="h-2/3 w-5/6"
              />
            </div>
          </div>
        </div>
        <div className="features bg-[#0d084d] text-white h-[500px] flex items-center justify-center">
          <div className="container w-4/5 flex mx-auto py-4 text-justify justify-between item-center space-x-2 space-y-4 ">
            <div className="item flex-1   space-y-3 py-4">
              <h1 className="text-3xl font-bold">
                Msr <i>business</i>
              </h1>
              <h1 className=" text-gray-400 text-lg">
                A solution designed for <i>You</i>
              </h1>
              <p className=" text-gray-400 text-lg">
                Upgrade to a curated experience packed with tools and benefits,
                dedicated to businesses
              </p>
              <div className="title flex items-center">
                <img src="./img/check.png" alt="" className="px-1" />
                Connect to freelancers with proven business experience
              </div>

              <div className="title flex items-center ">
                <img src="./img/check.png" alt="" className="px-1" />
                Get matched with the perfect talent by a customer success
                manager
              </div>

              <div className="title flex items-center ">
                <img src="./img/check.png" alt="" className="px-1" />
                Manage teamwork and boost productivity with one powerful
                workspace
              </div>
              <button className="bg-green-500 rounded-md p-2 hover:bg-green-700 hover:text-white">
                Explore Liverr Business
              </button>
            </div>
            <div className="item flex-1 flex items-center justify-center">
              <img
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
                alt=""
                className="h-4/5 w-4/5"
              />
            </div>
          </div>
        </div>
        <ReactSimplyCarouselExample2 />
      </div>
    </>
  );
};

export default Home;
