import React from "react";

const Orders = () => {
  const currUser = {
    id: 1,
    username: "Sujit Mourya",
    isSeller: true,
  };
  return (
    <div className="orders">
      <div className="container w-4/5 mx-auto my-5">
        <div className="title flex items-center justify-between mb-5 ">
          <h1 className="font-bold text-3xl">Orders</h1>
        </div>
        <table className=" cursor-pointer w-full ">
          <tr className="h-14">
            <th className="text-left">Image</th>
            <th className="text-left">Title</th>
            <th className="text-left">Price</th>
            <th className="text-left">
              {currUser?.isSeller ? "Buyer" : "Seller"}
            </th>
            <th className="text-left">Contact</th>
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
                className="delete h-8 w-8"
                src="./img/message.png"
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
              <img className="delete  h-8 w-8" src="./img/message.png" alt="" />
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
              <img className="delete  h-8 w-8" src="./img/message.png" alt="" />
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
              <img className="delete  h-8 w-8" src="./img/message.png" alt="" />
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
              <img className="delete  h-8 w-8" src="./img/message.png" alt="" />
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
            <td>Text based ai generated art</td>
            <td>
              110.<sup>99</sup>
            </td>
            <td>16</td>
            <td>
              <img className="delete  h-8 w-8" src="./img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
