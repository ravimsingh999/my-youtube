import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { CloseSideBar } from "../utils/appSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CloseSideBar());
  }, []);

  const [searchParams] = useSearchParams();

  console.log(searchParams.get("v"));

  return (
    <div>
      <iframe
        className="p-4 m-2 ml-6"
        width="900"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
