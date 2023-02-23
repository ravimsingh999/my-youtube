import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessege } from "../utils/chatSlice";
import { generateRandomMessages, generateRandomName } from "../utils/helper";
import ChatMessege from "./ChatMessege";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessege({
          name: generateRandomName(),
          message: generateRandomMessages(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full h-[440px] mt-4 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessege key={i} name={c.name} messege={c.message} />
        ))}
      </div>
      <form
        className="w-full  mt-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessege({
              name: "Ravi Singh",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-80 border border-gray-500"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="mx-4 p-2 bg-green-200">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
