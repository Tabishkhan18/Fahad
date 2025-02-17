import React from 'react';

const SmallCard = ({ cardImage, title, description, Icon }) => {
  return (
    <div className="smallCard transition-all hover:scale-105 ease-in-out rounded-2xl bg-green-50 cursor-pointer gap-5 lg:min-w-[40%] min-h-56 w-80 flex lg:flex-row flex-col  items-center justify-between">
      <img src={cardImage} className="lg:h-56 h-80 rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-tr-none rounded-tr-2xl " alt="" />
      <div className="pe-5 lg:pb-0 pb-5">
        <p className="flex text-2xl text-green-500 font-semibold justify-end items-center w-full gap-2">
          {Icon && <Icon />} {/* Render the icon if it's provided */}
          {title}
        </p>
        <p className="text-green-950 text-end md:text-sm">{description}</p>
      </div>
    </div>
  );
};

export default SmallCard; 