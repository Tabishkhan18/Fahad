// import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { HiMiniCodeBracket } from "react-icons/hi2";
import SocialMedia from "./SocialMedia";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='z-40 bg-white text-green-950' >
      <h1 className="heading pt-20 text-center uppercase text-neutral-800 font-semibold text-xl">
        تفاصيل الاتصال
      </h1>
      <SocialMedia />
      <div className="container mx-auto flex md:flex-row flex-col-reverse md:gap-20 gap-10 px-6 lg:px-20">

        {/* Useful Links */}
        <div className="md:w-1/4 w-full">
          <h3 className="text-xl text-end font-semibold mb-4 uppercase">
            روابط مفيدة
            {/* Useful Link */}
          </h3>
          <ul className="flex flex-col items-end">
            <li className="mb-2">
              <a href="#" className="hover:text-green-500 transition-all ease-in-out duration-200">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-500 transition-all ease-in-out duration-200">Goals</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-500 transition-all ease-in-out duration-200">Gallery</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-500 transition-all ease-in-out duration-200">More</a>
            </li>

          </ul>
        </div>

        {/* Services */}
        <div className="md:w-2/4 w-full">
          <h3 className="text-xl text-end font-semibold mb-4 uppercase">
            خدمات
            {/* Services  */}
          </h3>
          <div className="flex justify-end md:gap-20 gap-5">
            <ul className="flex flex-col items-end">
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="/Fahad/seatingUmbrellaOrPergolas" rel="noopener noreferrer">
                  مظلات الجلسات او البرجولات
                  {/* Seating Umbrellas or Pergolas */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="/Fahad/parkingShades" rel="noopener noreferrer">
                  مظلات مواقف
                  {/* Parking Shades */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="/Fahad/clothScreen" rel="noopener noreferrer">
                  سواتر قماش
                  {/* Cloth Screens */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="/Fahad/ironFence" rel="noopener noreferrer">
                  سواتر حديد
                  {/* Iron Fences */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="/Fahad/net" rel="noopener noreferrer">
                  شبوك
                  {/* Nets */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="/Fahad/remoteControlAwnings" rel="noopener noreferrer">
                  مظلات التحكم عن بعد
                  {/* Remote Control Awnings */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="/Fahad/winterSeatingUmbrellas" rel="noopener noreferrer">
                  مظلات الجلوس الشتوية
                  {/* Winter Seating Umbrella */}
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col items-end">
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="/Fahad/umbrella" rel="noopener noreferrer">
                  المظلات
                  {/* Umbrellas */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="/Fahad/schoolUmbrella" rel="noopener noreferrer">
                  مظلات المدارس
                  {/* School Umbrellas */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="/Fahad/poolUmbrella" rel="noopener noreferrer">
                  مظلات مسابح
                  {/* Swimming Pool Umbrellas */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="/Fahad/plasticScreen" rel="noopener noreferrer">
                  سواتر بلاستيكية
                  {/* Plastic Screens */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="/Fahad/tensileStructureCanopy" rel="noopener noreferrer">
                  مظلات شد انشائي
                  {/* Tensile Structure Canopies */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="/Fahad/outdoorGardenUmbrella" rel="noopener noreferrer">
                  مظلات خارجية للحدائق
                  {/* Outdoor Garden Umbrellas */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="/Fahad/poetryHouses" rel="noopener noreferrer">
                  بيوت شعر
                  {/* Poetry Houses */}
                </Link>
              </li>
            </ul>

          </div>
        </div>




        {/* Get In Touch */}
        <div className="md:w-1/4 w-full flex flex-col items-end">
          <div className="logo mb-4 font-sans font-semibold text-xl uppercase">
            تواصل معنا
            {/* Get In Touch  */}
          </div>
          <p className='flex flex-row-reverse gap-5'>
            <span className=" mb-2"><FaHome size={25} /></span>
            Riyadh, Saudi Arabia
          </p>
          <p className="mt-4 flex flex-row-reverse gap-5">
            <FaPhoneAlt size={25} /><a className="mb-2 cursor-pointer hover:text-green-500 hover:underline">0510345545</a>
            {/* <FaPhoneAlt size={25} /><a href="tel:0510345545" className="mb-2 cursor-pointer hover:text-green-500 hover:underline">0510345545</a>  */}
          </p>
          <p className="mt-4 flex flex-row-reverse gap-5">
            <span className=" mb-2"><IoIosMail size={25} /></span> example@email.com
          </p>
        </div>
      </div>
      <div className="text-center md:text-3xl text-xl mt-20">
        لا اله إلا الله محمد(ﷺ) رسول الله
      </div>
      <div className="flex justify-center gap-1 md:text-sm text-xs my-10">
        This website is designed, developed and maintained by<a href="https://tabishkhan18.github.io/TechTabish/" target="_blank" className="flex items-center gap-1 font-semibold text-blue-700 hover:border-b transition-all duration-200 ease-in-out"><HiMiniCodeBracket  size={18}/>TechTabish</a>
      </div>
    </footer>
  )
}

export default Footer