import React from "react";

const AddGigs = () => {
  return (
    <div className="add">
      <div className="container w-4/5 mx-auto ">
        <h1 className="font-bold text-3xl my-3">Add New Gig</h1>
        <div className="sections flex space-x-10 ">
          <div className="info flex flex-col  flex-1 space-y-4">
            <label htmlFor="" className="font-medium text-xl">
              Title
            </label>
            <input
              type="text"
              placeholder="e.g. I will do something I'm really good at"
              className="h-12 border-2 border-gray-400 p-2 rounded-md"
            />
            <label htmlFor="" className="font-medium text-xl">
              Category
            </label>
            <select
              name="cats"
              id="cats"
              className="h-12 border-2 border-gray-400 p-2 rounded-md"
            >
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="" className="font-medium text-xl">
              Cover Image
            </label>
            <input type="file" />
            <label htmlFor="" className="font-medium text-xl">
              Upload Images
            </label>
            <input type="file" multiple />
            <label
              htmlFor=""
              className="h-12 border-2 border-gray-400 p-2 rounded-md font-bold text-xl"
            >
              Description
            </label>
            <textarea
              name=""
              id=""
              placeholder="Brief descriptions to introduce your service to customers"
              cols="0"
              rows="16"
              className="  border-2 border-gray-400 p-2 rounded-md"
            ></textarea>
            <button className="bg-green-500 h-12 rounded-md text-white font-bold ">
              Create
            </button>
          </div>
          <div className="details flex flex-col  flex-1 space-y-4">
            <label htmlFor="" className="font-medium text-xl">
              Service Title
            </label>
            <input
              type="text"
              placeholder="e.g. One-page web design"
              className="h-12 border-2 border-gray-400 p-2 rounded-md"
            />
            <label htmlFor="" className="font-medium text-xl">
              Short Description
            </label>
            <textarea
              name=""
              id=""
              placeholder="Short description of your service"
              cols="30"
              rows="5"
              className=" border-2 border-gray-400 p-2 rounded-md "
            ></textarea>
            <label htmlFor="" className="font-medium text-xl">
              Delivery Time (e.g. 3 days)
            </label>
            <input
              type="number"
              className="h-12 border-2 border-gray-400 p-2 rounded-md"
            />
            <label htmlFor="" className="font-medium text-xl">
              Revision Number
            </label>
            <input
              type="number"
              className="h-12 border-2 border-gray-400 p-2 rounded-md"
            />
            <label htmlFor="" className="font-medium text-xl">
              Add Features
            </label>
            <input
              type="text"
              placeholder="e.g. page design"
              className="h-12 border-2 border-gray-400 p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="e.g. file uploading"
              className="h-12 border-2 border-gray-400 p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="e.g. setting up a domain"
              className="h-12 border-2 border-gray-400 p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="e.g. hosting"
              className="h-12 border-2 border-gray-400 p-2 rounded-md"
            />
            <label htmlFor="" className="font-medium text-xl">
              Price
            </label>
            <input
              type="number"
              className="h-12 border-2 border-gray-400 p-2 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGigs;
