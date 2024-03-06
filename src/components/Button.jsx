import React from "react";

export default function Button({ type, text }) {
  return (
    <button
      type={type}
      className="bg-blue-400 text-white rounded-md h-12 transition duration-300 hover:bg-blue-500 font-bold"
    >
      {text}
    </button>
  );
}
