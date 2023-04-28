import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { CgShoppingCart } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";
const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        if (showMenu && window.matchMedia("(max-width:640px)").matches) {
            setShowMenu(false)
            // console.log("called1");
        }
        else if (!showMenu && window.matchMedia("(max-width:640px)").matches) {
            setShowMenu(true)
            // console.log("called2");
        }
        else if (window.matchMedia("(min-width:640px)").matches)
            setShowMenu(true)
            // console.log("called3");
    }
    // window.addEventListener('resize',toggleMenu);

    useEffect(() => {
        toggleMenu();
    }, [])

    return (<>
        <style>
            @media screen and (min-width:640px){()=>{setShowMenu(true)} }
        </style>
        <div className='p-6 flex items-center'>
            <div className='gap-4 flex items-center flex-1'>{/*flex-1=> it will make flex-grow = 1  */}
                <img src={logo} className='flex w-10 h-10' alt="Logo" />
                <span className='font-semibold'>Amazon</span>
            </div>
            <div className='right-header flex gap-8 items-center'>
                <div onClick={toggleMenu} style={{ padding: !showMenu ? '1rem' : '1rem 0.5rem' }}>
                    <GoThreeBars />
                </div>
                <ul className='flex gap-8 font-medium header-list my-4' style={{ display: showMenu ? 'inherit' : 'none' }}>{/*gap makes a gap between items  */}
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>
                <input type="text" className='input-search outline-none w-32 border-none p-2 h-8 rounded-md' placeholder='Search' style={{ display: showMenu ? 'inherit' : 'none' }} />
                <CgShoppingCart className='cursor-pointer w-6 h-6' style={{ display: showMenu ? 'inherit' : 'none' }} />{/*Icon from react-icons library*/}
            </div>
        </div>
    </>)
}

export default Header