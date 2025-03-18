import React from "react";

export default function SearchCompoent() {
  return (
    <div className="flex justify-center items-center ">
      <input
        type="text"
        className="p-3 w-1/1 border-2 border-gray-300 rounded-lg outline-none"
        placeholder="Search anything you want"
      />
    </div>
  );
}
