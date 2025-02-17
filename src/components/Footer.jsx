// import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import SocialMedia from "./SocialMedia";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='z-auto bg-white text-green-950' id='footer'>
      <h1 className="heading pt-20 text-center uppercase text-neutral-800 font-semibold text-xl">
        تفاصيل الاتصال
      </h1>
      <SocialMedia />
      <div className="container mx-auto flex md:flex-row flex-col-reverse md:gap-20 gap-10 px-6 lg:px-20">

        {/* Useful Links */}
        <div className="md:w-1/4 w-full">
          <h3 className="text-xl font-semibold mb-4 uppercase">
            روابط مفيدة
            {/* Useful Link */}
          </h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-green-500 transition-all ease-in-out duration-200 font-thin">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-500 transition-all ease-in-out duration-200 font-thin">Goals</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-500 transition-all ease-in-out duration-200 font-thin">Gallery</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-green-500 transition-all ease-in-out duration-200 font-thin">More</a>
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
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="seatingUmbrellaOrPergolas" rel="noopener noreferrer">
                  مظلات الجلسات او البرجولات
                  {/* Seating Umbrellas or Pergolas */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="parkingShades" rel="noopener noreferrer">
                  مظلات مواقف
                  {/* Parking Shades */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="clothScreen" rel="noopener noreferrer">
                  سواتر قماش
                  {/* Cloth Screens */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="ironFence" rel="noopener noreferrer">
                  سواتر حديد
                  {/* Iron Fences */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="net" rel="noopener noreferrer">
                  شبوك
                  {/* Nets */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="remoteControlAwnings" rel="noopener noreferrer">
                  مظلات التحكم عن بعد
                  {/* Remote Control Awnings */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="winterSeatingUmbrellas" rel="noopener noreferrer">
                  مظلات الجلوس الشتوية
                  {/* Winter Seating Umbrella */}
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col items-end">
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="umbrella" rel="noopener noreferrer">
                  المظلات
                  {/* Umbrellas */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="schoolUmbrella" rel="noopener noreferrer">
                  مظلات المدارس
                  {/* School Umbrellas */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="poolUmbrella" rel="noopener noreferrer">
                  مظلات مسابح
                  {/* Swimming Pool Umbrellas */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="plasticScreen" rel="noopener noreferrer">
                  سواتر بلاستيكية
                  {/* Plastic Screens */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="tensileStructureCanopy" rel="noopener noreferrer">
                  مظلات شد انشائي
                  {/* Tensile Structure Canopies */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="outdoorGardenUmbrella" rel="noopener noreferrer">
                  مظلات خارجية للحدائق
                  {/* Outdoor Garden Umbrellas */}
                </Link>
              </li>
              <li className="mb-2">
                <Link className="uppercase hover:text-green-500 transition-all ease-in-out duration-200" to="poetryHouses" rel="noopener noreferrer">
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
          <p className='flex flex-row-reverse gap-5 font-thin'>
            <span className=" mb-2"><FaHome size={25} /></span>
            Riyadh, Saudi Arabia
          </p>
          <p className="mt-4 flex flex-row-reverse gap-5 font-thin">
            <span className=" mb-2"><FaPhoneAlt size={25} /></span> +91 123-456-7890
          </p>
          <p className="mt-4 flex flex-row-reverse gap-5 font-thin">
            <span className=" mb-2"><IoIosMail size={25} /></span> example@email.com
          </p>

        </div>



      </div>
      <div className="text-center text-sm mt-20">
        لا اله إلا الله محمد رسول الله
      </div>
      <div className="text-center text-sm my-10">
        حقوق النشر © فهد حداد 2025. جميع الحقوق محفوظة
      </div>
    </footer>
  )
}

export default Footer