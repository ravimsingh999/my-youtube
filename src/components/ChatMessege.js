import React from "react";

const ChatMessege = ({ name, messege }) => {
  return (
    <div className="flex items-center shadow-md p-1">
      <img
        className="w-8 h-8 mt-1"
        alt="user-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wrKjpbjvQzLHlQfvKO8gsopOJBvbCEXe1A&usqp=CAU"
      />
      <span className="px-2 font-bold text-sm">{name}</span>
      <span className="text-sm">{messege}</span>
    </div>
  );
};

export default ChatMessege;
