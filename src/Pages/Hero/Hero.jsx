import React from 'react'
import "./hero.css";
import heroimg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
const Hero = () => {
    const transition = { duration: 3, type: 'spring' }
    return (<>
        <div className='container-md grid py-0 px-8 grid-cols'>
            {/* Left */}
            <div className="left grid grid-rows-2">
                <span className='uppercase text-2xl font-semibold w-min'>Skin Protection Cream</span>
                <div className='w-min left-txt flex flex-col text-black'>
                    <span className='font-large'>Trendy Collection</span>
                    <span className='block'>Seedily say has suitable disposal and boy.<br /> Exercise joy man children rejoiced</span>
                </div>

            </div>



            {/* Middle */}
            <div className='relative middle-section flex items-baseline justify-center'>
                <motion.div
                    initial={{ bottom: '2rem' }}
                    whileInView={{ bottom: '0rem' }}
                    transition={{ duration: 3, type: 'spring' }}//maybe be the const transition
                    className="blue-circle"></motion.div>
                <motion.img
                    initial={{ bottom: '-2rem' }}
                    whileInView={{ bottom: '0rem' }}
                    transition={transition} src={heroimg} className='absolute' alt="IMG" />
                <motion.div
                    initial={{ right: '4%' }}
                    whileInView={{ right: '2%' }}
                    transition={transition}
                    className="card flex gap-4 items-center">
                    <RiShoppingBagFill />
                    <div className='signup'>
                        <span>Best Signup Offers</span>
                        <BsArrowRight />
                    </div>
                </motion.div>
            </div>



            {/* Right */}
            <div className='grid grid-rows-2 text-right'>
                <div className='flex flex-col'>
                    <span className='font-large'>1.5m</span>
                    <span className='happy-mid'>Monthly Traffic</span>
                </div>
                <div className='flex flex-col'>
                    <span className='font-large'>100K</span>
                    <span className='happy-mid'>Happy Customers</span>

                </div>
            </div>
        </div>
    </>
    )
}

export default Hero