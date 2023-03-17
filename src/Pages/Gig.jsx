import React, { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

function Gig() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <div className="gig">
      <div className="container w-4/5 flex mx-auto">
        <div className="left flex flex-col space-y-3 w-[70%] pr-2">
          <span className="breadcrumbs text-xm text-gray-400">
            Msr > Graphics & Design >
          </span>
          <h1 className="font-bold text-3xl">
            I will create AI generated art for you
          </h1>
          <div className="user flex items-center space-x-2">
            <img
              className="pp w-8 h-8 rounded-full"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>Anna Bell</span>
            <div className="stars flex items-center space-x-1 ">
              <img src="/img/star.png" className="w-5 h-5 " alt="" />
              <img src="/img/star.png" className="w-5 h-5 " alt="" />
              <img src="/img/star.png" className="w-5 h-5 " alt="" />
              <img src="/img/star.png" className="w-5 h-5 " alt="" />
              <img src="/img/star.png" className="w-5 h-5 " alt="" />
              <span>5</span>
            </div>
          </div>
          <div className="slider w-[100%] ">
            <ReactSimplyCarousel
              activeSlideIndex={activeSlideIndex}
              onRequestChange={setActiveSlideIndex}
              itemsToShow={1}
              itemsToScroll={1}
              forwardBtnProps={{
                //here you can also pass className, or any other button element attributes
                style: {
                  display: " flex",
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "center",
                  background: "gray",
                  border: "none",
                  borderRadius: "50%",
                  color: "black",
                  cursor: "pointer",
                  fontSize: "20px",
                  height: 40,
                  lineHeight: 1,
                  textAlign: "center",
                  width: 40,
                },
                children: <span>{`>`}</span>,
              }}
              backwardBtnProps={{
                //here you can also pass className, or any other button element attributes
                style: {
                  marginRight: "1rem",
                  display: " flex",
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "center",
                  background: "gray",
                  border: "none",
                  borderRadius: "50%",
                  color: "black",
                  cursor: "pointer",
                  fontSize: "20px",
                  height: 40,
                  lineHeight: 1,
                  textAlign: "center",
                  width: 40,
                },
                children: <span>{`<`}</span>,
              }}
              responsiveProps={[
                {
                  itemsToShow: 1,
                  itemsToScroll: 1,
                  minWidth: 768,
                },
              ]}
              speed={600}
              easing="linear"
            >
              <div className="img" className="h-[400px] w-[450px]">
                <img
                  src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="h-full w-full px-1"
                />
              </div>
              <div className="img" className="h-[400px] w-[450px]">
                <img
                  src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="h-full w-full px-1"
                />
              </div>
              <div className="img" className="h-[400px] w-[450px]">
                <img
                  src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="h-full w-full px-1"
                />
              </div>
            </ReactSimplyCarousel>
          </div>
          <h2 className="text-2xl ">About This Gig</h2>
          <p className="text-gray-600 text-justify">
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>
          <div className="seller">
            <h2 className="text-2xl font-medium my-4">About The Seller</h2>
            <div className="user flex items-center space-x-2 ">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="h-20 w-20 rounded-full"
              />
              <div className="info flex  flex-col px-2 space-y-2">
                <span className="font-bold">Anna Bell</span>
                <div className="stars flex space-x-2 items-center">
                  <img src="/img/star.png" alt="" className="h-5 w-5" />
                  <img src="/img/star.png" alt="" className="h-5 w-5" />
                  <img src="/img/star.png" alt="" className="h-5 w-5" />
                  <img src="/img/star.png" alt="" className="h-5 w-5" />
                  <img src="/img/star.png" alt="" className="h-5 w-5" />
                  <span>5</span>
                </div>
                <button className="border-2 border-purple-500 text-purple-500 rounded-md py-1 hover:bg-purple-500 hover:text-white">
                  Contact Me
                </button>
              </div>
            </div>
            <div className="box border-2 border-gray-500  p-3 my-2">
              <div className="items flex flex-wrap justify-between  mb-3 space-y-2">
                <div className="item flex flex-col w-[300px] ">
                  <span className="title text-gray-600 font-medium">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item item flex flex-col w-[300px] ">
                  <span className="title text-gray-600 font-medium">
                    Member since
                  </span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item item flex flex-col w-[300px] ">
                  <span className="title text-gray-600 font-medium">
                    Avg. response time
                  </span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item item flex flex-col w-[300px] ">
                  <span className="title text-gray-600 font-medium">
                    Last delivery
                  </span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item item flex flex-col w-[300px]  ">
                  <span className="title text-gray-600 font-medium">
                    Languages
                  </span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p className="text-gray-500">
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2 className="font-bold text-2xl my-3">Reviews</h2>
            <div className="item shadow-md p-2 border-2 border-gray-300 my-2 space-y-3">
              <div className="user flex items-center space-x-2 ">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="h-12 w-12 rounded-full "
                />
                <div className="info ">
                  <span className="font-bold">Garner David</span>
                  <div className="country flex items-center space-x-2">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                      className="w-5 h-5"
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars flex items-center space-x-2">
                <img src="/img/star.png" alt="" className="h-5 w-5" />
                <img src="/img/star.png" alt="" className="h-5 w-5" />
                <img src="/img/star.png" alt="" className="h-5 w-5" />
                <img src="/img/star.png" alt="" className="h-5 w-5" />
                <img src="/img/star.png" alt="" className="h-5 w-5" />
                <span>5</span>
              </div>
              <p className="text-justify text-gray-500">
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful flex items-center space-x-3  ">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" className="h-5 w-5" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" className="h-5 w-5" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item shadow-md p-2 border-2 border-gray-300 my-2 space-y-3">
              <div className="user flex items-center space-x-2">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="h-12 w-12 rounded-full "
                />
                <div className="info">
                  <span className="font-bold">Sidney Owen</span>
                  <div className="country country flex items-center space-x-2">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                      alt=""
                      className="w-5 h-5"
                    />
                    <span>Germany</span>
                  </div>
                </div>
              </div>
              <div className="stars flex items-center space-x-2">
                <img src="/img/star.png" alt="" className="h-5 w-5" />
                <img src="/img/star.png" alt="" className="h-5 w-5" />
                <img src="/img/star.png" alt="" className="h-5 w-5" />
                <img src="/img/star.png" alt="" className="h-5 w-5" />
                <img src="/img/star.png" alt="" className="h-5 w-5" />
                <span>5</span>
              </div>
              <p className="text-justify text-gray-500">
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className="helpful flex items-center space-x-3">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" className="h-5 w-5" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" className="h-5 w-5" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item shadow-md p-2 border-2 border-gray-300 my-2 space-y-3">
              <div className="user flex items-center space-x-2 ">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="h-12 w-12 rounded-full "
                />
                <div className="info">
                  <span className="font-bold">Lyle Giles </span>
                  <div className="country flex space-x-2 items-center">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                      className="w-5 h-5"
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars flex items-center space-x-2">
                <img src="/img/star.png" alt="" className="w-5 h-5" />
                <img src="/img/star.png" alt="" className="w-5 h-5" />
                <img src="/img/star.png" alt="" className="w-5 h-5" />
                <img src="/img/star.png" alt="" className="w-5 h-5" />
                <img src="/img/star.png" alt="" className="w-5 h-5" />
                <span>5</span>
              </div>
              <p className="text-justify text-gray-500">
                Amazing work! Communication was amazing, each and every day he
                sent me images that I was free to request changes to. They
                listened, understood, and delivered above and beyond my
                expectations. I absolutely recommend this gig, and know already
                that Ill be using it again very very soon
              </p>
              <div className="helpful flex items-center space-x-3 ">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" className="w-5 h-5" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" className="w-5 h-5" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right  w-[30%] border-2 border-gray-400 h-max p-3 ml-auto space-y-3 sticky top-20 ">
          <div className="price flex items-center justify-between mb-3">
            <h3 className="font-bold">1 Course will be starting at</h3>
            <h2>$ 59.99</h2>
          </div>
          <p className="text-gray-600">It will give you Industry ready skill</p>
          <div className="details flex items-center justify-between sticky top-0">
            <div className="item flex space-x-2 items-center">
              <img src="/img/clock.png" alt="" className="h-5 w-5" />
              <span>365 Days Validity</span>
            </div>
            <div className="item flex items-center space-x-2">
              <img src="/img/recycle.png" alt="" className="h-6 w-6" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item flex items-center space-x-2">
              <img src="/img/greencheck.png" alt="" className="h-5 w-5 " />
              <span>Prompt writing</span>
            </div>
            <div className="item flex items-center space-x-2">
              <img
                src="/img/greencheck.png"
                className="h-5 w-5 space-x-2"
                alt=""
              />
              <span>Artwork delivery</span>
            </div>
            <div className="item flex items-center space-x-2">
              <img
                src="/img/greencheck.png"
                className="h-5 w-5 space-x-2"
                alt=""
              />
              <span>Image upscaling</span>
            </div>
            <div className="item flex items-center space-x-2">
              <img src="/img/greencheck.png" className="h-5 w-5 " alt="" />
              <span>Additional design</span>
            </div>
          </div>
          <button className="bg-green-500 w-full h-10 font-medium text-white hover:bg-green-600">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gig;
