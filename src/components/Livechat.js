import React, { useEffect, useState } from "react";
import ChatMsg from "./ChatMsg";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import generate, { getRandomMessage, getRandomAvatar } from "../utils/helper";

const Livechat = () => {
  const dispatch = useDispatch();
  const liveMes = useSelector((store) => store.chat.messages);
  const [input, setInput] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessages({
          name: generate(),
          msg: getRandomMessage(),
          avatar: getRandomAvatar(),
        })
      );
    }, 2000);

    return () => clearInterval(timer);
  }, [dispatch]);

  useEffect(() => {
    const chatContainer = document.getElementById("chatContainer");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
      setScrollPosition(chatContainer.scrollTop);
    }
  }, [liveMes]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    const trimmedInput = input.trim();
    if (trimmedInput) {
      dispatch(
        addMessages({
          name: "You",
          msg: trimmedInput,
          avatar: "https://i.pravatar.cc/150?img=3", // Replace with your avatar logic
        })
      );
      setInput(""); // Clears the input field
    }
  };

  return (
    <div className="w-full h-[600px] ml-2 p-4 rounded-lg bg-gradient-to-b from-slate-50 to-slate-200 flex flex-col border border-gray-300">
      <div
        id="chatContainer"
        className="overflow-y-scroll flex-1 mb-2 p-2 border rounded bg-white"
      >
        {liveMes.map((m, i) => (
          <ChatMsg key={i} name={m.name} msg={m.msg} avatar={m.avatar} />
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          className="border border-gray-400 rounded p-2 flex-1"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Livechat;
