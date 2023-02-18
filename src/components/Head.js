import React from "react";
import { useDispatch } from "react-redux";
import { SideBar } from "../utils/appSlice";

const Head = () => {
  const dispatcher = useDispatch();
  const handleSideBar = () => {
    dispatcher(SideBar());
  };
  return (
    <div className="h-18 flex justify-between shadow-lg align-center">
      <div className="flex">
        <img
          onClick={() => handleSideBar()}
          className="h-12 p-2 m-4 cursor-pointer"
          alt="menu-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1IMv8Bhq46KOlXysAmhxzGURj5m-WoDi_w&usqp=CAU"
        />
        <a href="/">
          <img
            className="h-20 p-2"
            alt="youtube-logo"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          />
        </a>
      </div>
      <div>
        <input
          className="w-96 h-10 mt-5 p-2 border border-gray-300 rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <button className=" h-10 mt-5 p-2 bg-gray-300 border border-gray-300 rounded-r-full">
          🔍
        </button>
      </div>
      <div>
        <img
          className="p-3 m-1 w-15 h-20"
          alt="User Profile"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wrKjpbjvQzLHlQfvKO8gsopOJBvbCEXe1A&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Head;
