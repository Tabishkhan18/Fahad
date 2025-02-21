// import React from 'react'
import { Link } from "react-router-dom";
import "./Gallary.css";

const GallaryCard = ({ image, title, href }) => {
    return (
        <div className="card mt-10 w-80 md:w-2/3 h-96 ">
            <div className="card-details flex justify-center items-center">
                <img className="object-cover h-96 rounded-xl" src={image} alt="" />
                <p className="absolute text-green-950 mt-40 rounded-lg px-4 py-2 bg-white/50 backdrop-blur-md  text-title">{title}</p>
            </div>
            <Link to={href} className="card-button rounded-lg w-[75%] md:w-[40%]">
                المزيد من الصور
            </Link>
        </div>
    )
}

export default GallaryCard
