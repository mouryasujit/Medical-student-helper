import React from "react";
import { Link } from "react-router-dom";

const Message = () => {
  const message = " This was the message send by the buyer ";

  return (
    <div className="orders">
      <div className="container w-4/5 mx-auto my-5">
        <div className="title flex items-center justify-between mb-5 ">
          <h1 className="font-bold text-3xl">Message</h1>
        </div>
        <table className=" cursor-pointer w-full ">
          <tr className="h-14">
            <th className="text-left">Buyer</th>
            <th className="text-left">Last Message</th>
            <th className="text-left">Date</th>

            <th className="text-left">Action</th>
          </tr>
          <tr className="h-14 bg-blue-50">
            <td>Sujit Mourya</td>
            <td>
              <Link to="/message/123"> {message.substring(0, 100)}... </Link>
            </td>
            <td>1 Day ago</td>
            <td>
              <button className="bg-green-500 px-2 py-1 text-white hover:bg-green-600 rounded-md">
                Mark as read
              </button>
            </td>
          </tr>
          <tr className="h-14">
            <td>Sujit Mourya</td>
            <td>
              <Link to="/message/123"> {message.substring(0, 100)}... </Link>
            </td>
            <td>1 Day ago</td>
            <td>
              <button className="bg-green-500 px-2 py-1 text-white hover:bg-green-600 rounded-md">
                Mark as read
              </button>
            </td>
          </tr>
          <tr className="h-14 bg-blue-50">
            <td>Sujit Mourya</td>
            <td>
              <Link to="/message/123"> {message.substring(0, 100)}... </Link>
            </td>
            <td>1 Day ago</td>
            <td>
              <button className="bg-green-500 px-2 py-1 text-white hover:bg-green-600 rounded-md">
                Mark as read
              </button>
            </td>
          </tr>
          <tr className="h-14">
            <td>Sujit Mourya</td>
            <td>
              {" "}
              <Link to="/message/123"> {message.substring(0, 100)}... </Link>
            </td>
            <td>1 Day ago</td>
            <td>
              <button className="bg-green-500 px-2 py-1 text-white hover:bg-green-600 rounded-md">
                Mark as read
              </button>
            </td>
          </tr>
          <tr className="h-14  bg-blue-50">
            <td>Sujit Mourya</td>
            <td>
              <Link to="/message/123"> {message.substring(0, 100)}... </Link>
            </td>
            <td>1 Day ago</td>
            <td>
              <button className="bg-green-500 px-2 py-1 text-white hover:bg-green-600 rounded-md">
                Mark as read
              </button>
            </td>
          </tr>
          <tr className="h-14">
            <td>Sujit Mourya</td>
            <td>
              {" "}
              <Link to="/message/123"> {message.substring(0, 100)}... </Link>
            </td>
            <td>1 Day ago</td>
            <td>
              <button className="bg-green-500 px-2 py-1 text-white hover:bg-green-600 rounded-md">
                Mark as read
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Message;
