import React from "react";
import { Link } from "react-router-dom";

function MyGigs() {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className="myGigs">
      <div className="container w-4/5 mx-auto my-5">
        <div className="title flex items-center justify-between mb-5 ">
          <h1 className="font-bold text-3xl">
            {currentUser.isSeller ? "Gigs" : "Orders"}
          </h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button className="bg-green-500 px-2 py-1 text-white rounded-md hover:bg-green-400">
                Add New Gig
              </button>
            </Link>
          )}
        </div>
        <table className=" cursor-pointer w-full ">
          <tr className="h-14">
            <th className="text-left">Image</th>
            <th className="text-left">Title</th>
            <th className="text-left">Price</th>
            <th className="text-left">Sales</th>
            <th className="text-left">Action</th>
          </tr>
          <tr className="h-14 bg-blue-50">
            <td>
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="h-10 w-16"
              />
            </td>
            <td>Stunning concept art</td>
            <td>
              59.<sup>99</sup>
            </td>
            <td>13</td>
            <td>
              <img
                className="delete h-6 w-6"
                src="./img/delete.png"
                alt="delete"
              />
            </td>
          </tr>
          <tr className="h-14">
            <td>
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="h-10 w-16"
              />
            </td>
            <td>Ai generated concept art</td>
            <td>
              120.<sup>99</sup>
            </td>
            <td>41</td>
            <td>
              <img className="delete  h-6 w-6" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr className="h-14 bg-blue-50">
            <td>
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="h-10 w-16"
              />
            </td>
            <td>High quality digital character</td>
            <td>
              79.<sup>99</sup>
            </td>
            <td>55</td>
            <td>
              <img className="delete  h-6 w-6" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr className="h-14">
            <td>
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="h-10 w-16"
              />
            </td>
            <td>Illustration hyper realistic painting</td>
            <td>
              119.<sup>99</sup>
            </td>
            <td>29</td>
            <td>
              <img className="delete  h-6 w-6" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr className="h-14  bg-blue-50">
            <td>
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="h-10 w-16"
              />
            </td>
            <td>Original ai generated digital art</td>
            <td>
              59.<sup>99</sup>
            </td>
            <td>34</td>
            <td>
              <img className="delete  h-6 w-6" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr className="h-14">
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="h-10 w-16"
              />
            </td>
            <td>Text based ai generated art</td>
            <td>
              110.<sup>99</sup>
            </td>
            <td>16</td>
            <td>
              <img className="delete  h-6 w-6" src="./img/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MyGigs;
