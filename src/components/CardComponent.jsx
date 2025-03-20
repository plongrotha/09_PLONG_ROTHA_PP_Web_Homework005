import React from "react";

export default function CardComponent(props) {
  const { title, img } = props;
  return (
    <div className="w-[250px] relative h-[500px] rounded-md hover:shadow-lg transition duration-200 ease-in-out ">
      <button className="absolute bg-gray-300 rounded-lg left-2 top-2 p-1 ">
        Book
      </button>
      <img className="w-full h-full object-cover" img={img} alt={title} />
    </div>
  );
}
