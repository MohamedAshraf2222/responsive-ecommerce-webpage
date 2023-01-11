import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { SliderProducts } from "../../products.js";
import './slider.css';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { m } from 'framer-motion';
// import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
const Slider = () => {
    return (<>
        <div className="relative swiper-container">
            <Swiper
                className='swiper-slider'
                modules={[Pagination, Navigation]}
                // loopFillGroupWithBlank={true}
                navigation={true}
                spaceBetween={40}
                slidesPerView={3}
                slidesPerGroup={1}
                loop={true}
                breakpoints={{
                    856:{slidesPerView:3},
                    640 :{slidesPerView:2},
                    500 : {slidesPerView:2},
                    0 : {slidesPerView:1}
                }} 
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                {/* <i className="icon-arrow-long-right review-swiper-button-next"></i>
                <i className="icon-arrow-long-left review-swiper-button-prev"></i>
                <IoIosArrowBack/>
                <IoIosArrowForward/> */}
                {SliderProducts.map((slide, i) => (
                    <SwiperSlide className='swiper-slide-slider'>
                        <div className="left-side pl-1 flex flex-col justify-between">
                            <div className='name flex flex-col'>
                                <span className='font-semibold uppercase'>{slide.name}</span>
                                <span>{slide.datail}</span>
                            </div>
                            <span>{slide.price}$</span>
                            <div>Shop Now</div>

                        </div>
                        <img src={slide.img} alt="IMG" className='img-p' />
                    </SwiperSlide>
                ))}

            </Swiper>

        </div>
    </>
    )
}

export default Slider