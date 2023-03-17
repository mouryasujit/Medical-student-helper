import React from "react";
import { Link } from "react-router-dom";

const Singlemessage = () => {
  return (
    <div className="message">
      <div className="container w-4/5 mx-auto">
        <span className="breadcrumbs">
          <Link to="/messages">Messages</Link> > Sujit Mourya >
        </span>
        <div className="messages my-5 flex flex-col w-full ">
          <div className="item flex space-x-3 ">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <p className="h-max w-1/2 bg-gray-300 rounded-r-md rounded-bl-md my-2 p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item owner flex space-x-3   w-[600px] ml-auto h-max ">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-10 h-10 rounded-full order-2 ml-2"
            />
            <p className="h-max w-full bg-blue-300 rounded-l-md rounded-br-md my-2 p-4 order-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item flex space-x-3 ">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <p className="h-max w-1/2 bg-gray-300 rounded-r-md rounded-bl-md my-2 p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item owner flex space-x-3   w-[600px] ml-auto h-max ">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-10 h-10 rounded-full order-2 ml-2"
            />
            <p className="h-max w-full bg-blue-300 rounded-l-md rounded-br-md my-2 p-4 order-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item flex space-x-3 ">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <p className="h-max w-1/2 bg-gray-300 rounded-r-md rounded-bl-md my-2 p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item owner flex space-x-3   w-[600px] ml-auto h-max ">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-10 h-10 rounded-full order-2 ml-2"
            />
            <p className="h-max w-full bg-blue-300 rounded-l-md rounded-br-md my-2 p-4 order-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
        </div>
        <hr />
        <div className="write w-full flex items-center justify-evenly my-3">
          <textarea
            type="text"
            placeholder="write a message"
            className="w-[70%] min-h-[100px] border-2 border-gray-400 rounded-md p-2"
          />
          <button className="bg-green-500 py-1 px-2 text-white rounded-md">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Singlemessage;
