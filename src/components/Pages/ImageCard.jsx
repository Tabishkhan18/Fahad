import { useState } from 'react'
import { IoMdExpand } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
const ImageCard = ({ image }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      {/* Image Card */}
      <div className="relative shadow-lg rounded-lg overflow-hidden md:w-80 w-40">
        <img src={image} alt="Nature" className="w-full object-cover" />
        <button
          onClick={() => setIsOpen(true)}
          className="absolute bottom-0 text-green-950 bg-white hover:bg-neutral-200 p-2 rounded-lg cursor-pointer"
        >
          <IoMdExpand size={25}/>

        </button>

      </div>

      {/* Fullscreen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <img src={image} alt="Fullscreen" className="max-w-full max-h-full" />
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 bg-white text-black p-2 rounded-full shadow-lg hover:bg-neutral-200 cursor-pointer"
          >
            <RxCross2 size={30}/>
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageCard