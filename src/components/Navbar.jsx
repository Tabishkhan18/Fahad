// import React from 'react';
import { Link } from 'react-router-dom'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import MobileNavbar from './MobileNavbar';
import { FaTools } from "react-icons/fa";

const items = [
    {
        label: (
            <Link className="uppercase" to="/Fahad/umbrella" rel="noopener noreferrer">
                المظلات
                {/* Umbrellas */}
            </Link>
        ),
        key: '0',
    },
    {
        label: (
            <Link className="uppercase" to="/Fahad/schoolUmbrella" rel="noopener noreferrer">
                مظلات المدارس
                {/* School Umbrellas */}
            </Link>
        ),
        key: '1',
    },
    {
        label: (
            <Link className="uppercase" to="/Fahad/poolUmbrella" rel="noopener noreferrer">
                مظلات مسابح
                {/* Swimming Pool Umbrellas */}
            </Link>
        ),
        key: '2',
    },
    {
        label: (
            <Link className="uppercase" to="/Fahad/plasticScreen" rel="noopener noreferrer">
                سواتر بلاستيكية
                {/* Plastic Screens */}
            </Link>
        ),
        key: '3',
    },
    {
        label: (
            <Link className="uppercase" to="/Fahad/tensileStructureCanopy" rel="noopener noreferrer">
                مظلات شد انشائي
                {/* Tensile Structure Canopies */}
            </Link>
        ),
        key: '4',
    },
    {
        label: (
            <Link className="uppercase" to="/Fahad/seatingUmbrellaOrPergolas" rel="noopener noreferrer">
                مظلات الجلسات او البرجولات
                {/* Seating Umbrellas or Pergolas */}
            </Link>
        ),
        key: '5',
    },
    {
        label: (
            <Link className="uppercase" to="/Fahad/parkingShades" rel="noopener noreferrer">
                مظلات مواقف
                {/* Parking Shades */}
            </Link>
        ),
        key: '6',
    },
    {
        label: (
            <Link className="uppercase" to="/Fahad/clothScreen" rel="noopener noreferrer">
                سواتر قماش
                {/* Cloth Screens */}
            </Link>
        ),
        key: '7',
    },
    {
        label: (
            <Link className="uppercase" to="/Fahad/ironFence" rel="noopener noreferrer">
                سواتر حديد
                {/* Iron Fences */}
            </Link>
        ),
        key: '8',
    },
    {
        label: (
            <Link className="uppercase" to="/Fahad/net" rel="noopener noreferrer">
                شبوك
                {/* Nets */}
            </Link>
        ),
        key: '9',
    },
    {
        label: (
            <Link className="uppercase" to="/Fahad/outdoorGardenUmbrella" rel="noopener noreferrer">
                مظلات خارجية للحدائق
                {/* Outdoor Garden Umbrellas */}
            </Link>
        ),
        key: '10',
    },
    {
        label: (
            <Link className="uppercase" to="/Fahad/poetryHouses" rel="noopener noreferrer">
                بيوت شعر
                {/* Poetry Houses */}
            </Link>
        ),
        key: '11',
    },
    {
        label: (
            <Link className="uppercase" to="/Fahad/remoteControlAwnings" rel="noopener noreferrer">
                مظلات التحكم عن بعد
                {/* Remote Control Awnings */}
            </Link>
        ),
        key: '12',
    },
    {
        label: (
            <Link className="uppercase" to="/Fahad/winterSeatingUmbrellas" rel="noopener noreferrer">
                مظلات الجلوس الشتوية
                {/* Winter Seating Umbrella */}
            </Link>
        ),
        key: '13',
    },
];


const Navbar = () => (

    <div>
        <nav className="navbar z-50 fixed top-0 right-0 left-0 flex drop-shadow-2xl justify-between items-center md:px-20 px-10 bg-green-900 h-20">
            <div className="menu hidden lg:flex">
                <ul className='flex gap-5 uppercase'>
                    <li className='text-md text-white hover:text-green-400 transition ease-in-out duration-200 px-4 py-2 cursor-pointer'>
                        <Link to='/Fahad/contact' spy={true} smooth={true} offset={-100} duration={500}>
                            تفاصيل الاتصال
                            {/* Contact Details */}
                        </Link>
                    </li>
                    <li className='text-md text-white hover:text-green-400 transition ease-in-out duration-200 px-4 py-2 cursor-pointer'>
                        <Link to='/Fahad/about' spy={true} smooth={true} offset={-100} duration={500}>
                        معلومات عنا
                        {/* About Us */}
                    </Link></li>
                    <li className='text-md text-white hover:text-green-400 transition ease-in-out duration-200 px-4 py-2 cursor-pointer'>
                        {/* <Link to='/services' spy={true} smooth={true} offset={-100} duration={500}> */}
                        <Dropdown menu={{ items, }} trigger={['click']}>
                            <Space>
                                <div className='flex cursor-pointer gap-3'>
                                    خدمات
                                    {/* Services */}
                                    <DownOutlined />
                                </div>
                            </Space>
                        </Dropdown>
                        {/* </Link> */}
                    </li>
                    <li className='text-md text-white hover:text-green-400 transition ease-in-out duration-200 px-4 py-2 cursor-pointer'>
                        <Link to='/Fahad/' spy={true} smooth={true} offset={-100} duration={500} >
                        الرائيسية
                        {/* Home */}
                    </Link></li>
                </ul>
            </div>

            <div className="logo flex gap-5 items-center font-sans font-semibold text-xl text-white">
                <FaTools size={25} />فهد حداد
            </div>
            <button className="lg:hidden"> <MobileNavbar /></button>
        </nav>
    </div>
);
export default Navbar;
