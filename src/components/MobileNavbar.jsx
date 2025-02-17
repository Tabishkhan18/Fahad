import { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
    {
        label: (
            <Link className="uppercase" to="umbrella" rel="noopener noreferrer">
                المظلات
                {/* Umbrellas */}
            </Link>
        ),
        key: '0',
    },
    {
        label: (
            <Link className="uppercase" to="schoolUmbrella" rel="noopener noreferrer">
                مظلات المدارس
                {/* School Umbrellas */}
            </Link>
        ),
        key: '1',
    },
    {
        label: (
            <Link className="uppercase" to="poolUmbrella" rel="noopener noreferrer">
                مظلات مسابح
                {/* Swimming Pool Umbrellas */}
            </Link>
        ),
        key: '2',
    },
    {
        label: (
            <Link className="uppercase" to="plasticScreen" rel="noopener noreferrer">
                سواتر بلاستيكية
                {/* Plastic Screens */}
            </Link>
        ),
        key: '3',
    },
    {
        label: (
            <Link className="uppercase" to="tensileStructureCanopy" rel="noopener noreferrer">
                مظلات شد انشائي
                {/* Tensile Structure Canopies */}
            </Link>
        ),
        key: '4',
    },
    {
        label: (
            <Link className="uppercase" to="seatingUmbrellaOrPergolas" rel="noopener noreferrer">
                مظلات الجلسات او البرجولات
                {/* Seating Umbrellas or Pergolas */}
            </Link>
        ),
        key: '5',
    },
    {
        label: (
            <Link className="uppercase" to="parkingShades" rel="noopener noreferrer">
                مظلات مواقف
                {/* Parking Shades */}
            </Link>
        ),
        key: '6',
    },
    {
        label: (
            <Link className="uppercase" to="clothScreen" rel="noopener noreferrer">
                سواتر قماش
                {/* Cloth Screens */}
            </Link>
        ),
        key: '7',
    },
    {
        label: (
            <Link className="uppercase" to="ironFence" rel="noopener noreferrer">
                سواتر حديد
                {/* Iron Fences */}
            </Link>
        ),
        key: '8',
    },
    {
        label: (
            <Link className="uppercase" to="net" rel="noopener noreferrer">
                شبوك
                {/* Nets */}
            </Link>
        ),
        key: '9',
    },
    {
        label: (
            <Link className="uppercase" to="outdoorGardenUmbrella" rel="noopener noreferrer">
                مظلات خارجية للحدائق
                {/* Outdoor Garden Umbrellas */}
            </Link>
        ),
        key: '10',
    },
    {
        label: (
            <Link className="uppercase" to="poetryHouses" rel="noopener noreferrer">
                بيوت شعر
                {/* Poetry Houses */}
            </Link>
        ),
        key: '11',
    },
    {
        label: (
            <Link className="uppercase" to="remoteControlAwnings" rel="noopener noreferrer">
                مظلات التحكم عن بعد
                {/* Remote Control Awnings */}
            </Link>
        ),
        key: '12',
    },
    {
        label: (
            <Link className="uppercase" to="winterSeatingUmbrellas" rel="noopener noreferrer">
                مظلات الجلوس الشتوية
                {/* Winter Seating Umbrella */}
            </Link>
        ),
        key: '13',
    },
];


const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    // Close menu on route change
    useState(() => {
        closeMenu();
    }, [location.pathname]);

    return (
        <>
            <div ref={menuRef} tabIndex={-1} onBlur={closeMenu} onFocus={() => setIsOpen(true)}>

                <StyledWrapper>
                    <label className="burger" htmlFor="burger">
                        <input type="checkbox" id="burger" checked={isOpen} onChange={toggleMenu} />
                        <span />
                        <span />
                        <span />
                    </label>
                </StyledWrapper>

                <OffcanvasMenu isOpen={isOpen} className='w-1/2 h-lvh'>
                    <nav>
                        <ul className='flex flex-col items-center uppercase'>
                            <li className='"text-md text-white hover:text-green-500 transition ease-in-out duration-200 px-4 py-2 rounded-full  cursor-pointer'>
                                <Link to='/' spy={true} smooth={true} offset={-100} duration={500} >
                                    الرائيسية
                                    {/* Home */}
                                </Link>
                            </li>
                            {/* <Link to='/services' spy={true} smooth={true} offset={-100} duration={500} > */}
                            <li className='text-md text-white hover:text-green-500 transition ease-in-out duration-200 px-4 py-2 cursor-pointer'>
                                <Dropdown menu={{ items }} trigger={['click']}>
                                    <Space>
                                        <div className='flex cursor-pointer gap-3'>
                                            خدمات
                                            {/* Services */}
                                            <DownOutlined />
                                        </div>
                                    </Space>

                                </Dropdown>
                            </li>
                            {/* </Link> */}
                            <li className='"text-md text-white hover:text-green-500 transition ease-in-out duration-200 px-4 py-2 rounded-full cursor-pointer'>
                                <Link to='about' spy={true} smooth={true} offset={-100} duration={500} >
                                    معلومات عنا
                                    {/* About Us */}
                                </Link>
                            </li>
                            <li className='"text-md text-white hover:text-green-500 transition ease-in-out duration-200 px-4 py-2 rounded-full  cursor-pointer'>
                                <Link to='contact' spy={true} smooth={true} offset={-100} duration={500} >
                                    تفاصيل الاتصال
                                    {/* Contact Details */}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </OffcanvasMenu>
            </div>
        </>
    );
}

const StyledWrapper = styled.div`
  .burger {
    position: relative;
    width: 40px;
    height: 30px;
    background: transparent;
    cursor: pointer;
    display: block;
    z-index: 1001; /* Ensure the hamburger is above the offcanvas menu */
  }

  .burger input {
    display: none;
  }

  .burger span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: white;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }

  .burger span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
  }

  .burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  .burger span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
  }

  .burger input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 5px;
  }

  .burger input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  .burger input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 28px;
    left: 5px;
  }
`;

const OffcanvasMenu = styled.div`
  position: fixed;
  top: 80px; /* Position the menu below the hamburger icon */
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  background: #032E15;
  transition: right 0.5s ease-in-out;
  padding: 25px;
  color: white;
  z-index: 1000; /* Ensure it's below the hamburger icon */

  nav ul {
    list-style: none;
    padding: 0;
  }

  nav ul li {
    margin: 30px 0;
  }
`;

export default MobileNavbar;