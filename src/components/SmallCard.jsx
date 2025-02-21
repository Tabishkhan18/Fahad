import React from 'react';

const SmallCard = ({ cardImage, title, description, Icon }) => {
  return (
    <div className="smallCard transition-all hover:scale-110 ease-in-out rounded-xl bg-green-50 cursor-pointer gap-5 lg:min-w-[40%] min-h-56 w-80 flex lg:flex-row flex-col  items-center justify-between">
      <img src={cardImage} className="lg:h-56 h-80 rounded-tl-xl lg:rounded-bl-xl lg:rounded-tr-none rounded-tr-xl " alt="" />
      <div className="p-5">
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