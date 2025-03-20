import React, { useState, useEffect } from "react";
import Image from "next/image";

const categories = [
  "Home",
  "Book Categories",
  "Old-School Cartoons",
  "Movies & TV Shows",
  "Music",
  "Photography",
  "Sports & Fitness",
  "Technology & Gadgets",
  "Travel & Exploration",
  "Writing & Journaling",
];

const fetchItems = async () => {
  return [
    {
      id: 1,
      type: "Book",
      title: "Whisper of the Heart",
      image: "/whisper.jpg",
    },
    { id: 2, type: "Cartoon", title: "Study Time", image: "/study.jpg" },
  ];
};

export default function Dashboard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems().then(setItems);
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 p-5 border-r">
        <div className="flex flex-col items-center mb-5">
          <Image
            src="/avatar.png"
            width={80}
            height={80}
            alt="Avatar"
            className="rounded-full"
          />
          <h2 className="mt-2 text-lg font-bold">Black Monster</h2>
          <p className="text-sm text-gray-500">blackmonster@xyz.com</p>
        </div>
        <nav>
          {categories.map((cat, index) => (
            <div
              key={index}
              className="py-2 px-4 hover:bg-gray-200 cursor-pointer rounded"
            >
              {cat}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-5">
        <input
          type="text"
          placeholder="Search anything you want to"
          className="w-full p-2 border rounded mb-4"
        />
        <div className="grid grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item.id} className="p-4 border rounded-lg">
              <Image
                src={item.image}
                width={200}
                height={250}
                alt={item.title}
                className="rounded"
              />
              <h3 className="mt-2 font-bold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
