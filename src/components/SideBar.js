import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  // const [isOpen, setIsOpen] = useState(true);
  const isSideBarOpen = useSelector((store) => store.app.isSideBarOpen);
  //setIsOpen(isSideBarOpen);
  if (!isSideBarOpen) return null;
  return (
    <div className="w-48 shadow-lg">
      <div className="mt-2">
        <ul className="p-2">
          <Link to="/">
            <li className="font-bold">Home</li>
          </Link>
          <li>Shorts</li>
          <li>Originals</li>
          <li>Music</li>
        </ul>
      </div>
      <div className="mt-2">
        <ul className="p-2">
          <li>Library</li>
          <li>History</li>
          <li>Watch later</li>
          <li>Downloads</li>
        </ul>
      </div>
      <div className="mt-2">
        <ul className="p-2">
          <li>Explore</li>
          <li>Trending</li>
          <li>Live</li>
          <li>Gaming</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
