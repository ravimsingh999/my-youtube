import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../config";
import { SideBar } from "../utils/appSlice";
import { cacheSearch } from "../utils/searchSlice";

const Head = () => {
  const dispatcher = useDispatch();
  const [search, setSearch] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const cachedSearchedData = useSelector((store) => store.search);
  const handleSideBar = () => {
    dispatcher(SideBar());
  };

  useEffect(() => {
    if (cachedSearchedData[search])
      setSearchSuggestions(cachedSearchedData[search]);
    else {
      const x = setTimeout(() => findSuggetions(), 200);
      return () => {
        clearTimeout(x);
      };
    }
  }, [search]);

  const findSuggetions = async () => {
    const results = await fetch(YOUTUBE_SEARCH_API + search);
    const json = await results.json();
    setSearchSuggestions(json[1]);
    //console.log(json[1]);
    dispatcher(
      cacheSearch({
        [search]: json[1],
      })
    );
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
      <div className="flex">
        <div>
          <input
            className="w-96 h-10 mt-5 p-2 border border-gray-300 rounded-l-full"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onMouseOver={() => setShowSuggestion(true)}
            onMouseOut={() => setShowSuggestion(false)}
          />
          {showSuggestion && (
            <div
              className="fixed bg-white w-96 rounded-lg absolute"
              onMouseOver={() => setShowSuggestion(true)}
              onMouseOut={() => setShowSuggestion(false)}
            >
              <ul>
                {searchSuggestions.map((name) => (
                  <li
                    key={name}
                    className="border border-gray-200 p-2 rounded-lg hover:bg-gray-200"
                    onClick={() => setSearch(name)}
                  >
                    🔍 {name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
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
