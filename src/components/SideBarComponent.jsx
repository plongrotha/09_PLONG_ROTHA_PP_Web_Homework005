"use client";
import { BookMarked, House, Laugh } from "lucide-react";
import React from "react";
import { listsidebar } from "../data/listSidebar";

export default function SideBarComponent() {
  return (
    <div className="border-2 p-2">
      <div className="flex justify-center">
        <img
          className="rounded-full flex align-center justify-center"
          src={
            "https://i.pinimg.com/736x/64/72/02/647202351e78bf35105d14e92e465875.jpg"
          }
          width={150}
          height={150}
          alt=""
        />
      </div>
      <div>
        <h1 className="text-center text-2xl">Plong Rotha</h1>
      </div>

      <div className="flex flex-col w-64 h-screen justify-center items-center bg-gray-200">
        <ul className="cursor-pointer ">
          <Link>
            <li className="p-2 flex gap-2 text-red-500 hover:bg-gray-300 rounded-md">
              <House />
              Home
            </li>
          </Link>

          <Link>
            <li className="p-2 flex gap-2 text-red-500 hover:bg-gray-300 rounded-md">
              <BookMarked /> Book Categories
            </li>
          </Link>

          <Link>
            <li className="p-2 flex gap-2 text-red-500 hover:bg-gray-300 rounded-md">
              <Laugh /> Old-SchoolCartoon
            </li>
          </Link>
          {listsidebar.map((item) => (
            <li
              key={item.id}
              className="p-2 flex gap-2 text-red-500 hover:bg-gray-300 rounded-md "
            >
              {React.createElement(item.icon)} {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
