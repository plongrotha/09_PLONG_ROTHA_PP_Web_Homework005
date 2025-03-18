import { House } from "lucide-react";
import { BookMarked } from "lucide-react";
import { Laugh } from "lucide-react";
import { Video } from "lucide-react";
import { Music4 } from "lucide-react";
import { BicepsFlexed } from "lucide-react";
import { BookAudio } from "lucide-react";
import { Plane } from "lucide-react";
import { NotebookPen } from "lucide-react";
import { listsidebar } from "../data/listSidebar";
import React from "react";

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
          <li className="p-2 flex gap-2 text-red-500 hover:bg-gray-300 rounded-md">
            <House />
            Home
          </li>
          <li className="p-2 flex gap-2 text-red-500 hover:bg-gray-300 rounded-md">
            <BookMarked /> Book Categories
          </li>
          <li className="p-2 flex gap-2 text-red-500 hover:bg-gray-300 rounded-md">
            <Laugh /> Old-SchoolCartoon
          </li>
          {listsidebar.map((item) => (
            <li
              key={item.id}
              className="p-2 flex gap-2 text-red-500 hover:bg-gray-300 rounded-md "
            >
              {React.createElement(item.icon)} {item.name}
            </li>
          ))}
          {/* <li className="p-2 flex gap-2 text-red-500">
            <Video /> Movie & TV show
          </li>
          <li className="p-2 flex gap-2 text-red-500">
            <Music4 />
            Music
          </li>
          <li className="p-2 flex gap-2 text-red-500">
            <Music4 />
            Photography
          </li>
          <li className="p-2 flex gap-2 text-red-500">
            <BicepsFlexed />
            Sport & Fitness
          </li>
          <li className="p-2 flex gap-2 text-red-500">
            <BookAudio />
            Technology & Gedget
          </li>
          <li className="p-2 flex gap-2 text-red-500">
            <Plane />
            travel & Explorer
          </li>
          <li className="p-2 flex gap-2 text-red-500">
            <NotebookPen />
            Writing & Journaling
          </li> */}
        </ul>
      </div>
    </div>
  );
}
