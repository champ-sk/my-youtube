import React from "react";

const ChatMsg = ({ name, msg, avatar }) => {
  return (
    <div className="flex items-start gap-2 mb-2 animate-fadeIn">
      <img
        className="w-8 h-8 rounded-full"
        alt="user"
        src={avatar}
      />
      <div className="max-w-[75%] bg-white rounded-xl px-4 py-2 shadow-md">
        <div className="font-semibold text-sm text-blue-700">{name}</div>
        <div className="text-sm break-words whitespace-pre-wrap text-gray-800">{msg}</div>
      </div>
    </div>
  );
};


export default ChatMsg;
