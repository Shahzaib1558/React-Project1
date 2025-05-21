import React from 'react'

const CarsCard = ({ id, img, desc }) => {
  return (
    <div
      key={id}
      className="border-3 border-teal-700 rounded-md cursor-pointer w-[350px] h-[350px] overflow-hidden"
    >
      <div className="w-full h-[190px] overflow-hidden">
        <img src={img} alt="img" className="w-full h-full object-cover block" />
      </div>
      <h3 className="font-semibold text-sm p-3">{desc}</h3>
      <p className='font-sm text-sm p-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse Corporis illo eius rerum earum.Esse Corporis illo.</p>
    </div>
  );
};

export default CarsCard;
