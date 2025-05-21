import React from 'react';

const Cards = ({ id, img, name, price }) => {
  return (
    <div
      key={id}
      className="border-3 border-teal-800 bg-slate-100 text-black rounded-xl mb-3 cursor-pointer shadow-md overflow-hidden hover:scale-95 transition duration-200 ease-linear"
    >
      {/* Fixed height image container */}
      <div className="w-full h-[200px] overflow-hidden">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="font-bold text-xl pl-5 text-teal-400 mt-3">{name}</h1>
      <p className="pl-5 pr-3 pb-3 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quas.
      </p>

      <div className="flex justify-between px-6 pb-4">
        <h3 className="font-semibold text-xl">${price}</h3>
        <button className="bg-teal-700 text-white text-base md:text-lg px-3 py-1 rounded-md hover:bg-teal-400 transition duration-200 ease-in-out">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Cards;
