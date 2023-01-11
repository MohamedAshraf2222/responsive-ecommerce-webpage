import React from 'react'
import Hero from '../../assets/testimonialHero.png'
import './testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { TestimonialsData } from '../../products';



const Testimonials = () => {
    return (
        <>
            <div className="py-16 px-8 flex flex-col items-center">
                <div className="grid grid-monials">
                    <div className='flex flex-col gap-4 justify-end'>
                        <span className='uppercase text-monials font-bold'>top Rated</span>
                        <span className='text-monials-sm'>SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN REJOICED.</span>
                    </div>
                    <img className='img-monials' src={Hero} alt="" />
                    <div className='flex flex-col gap-4 items-end justify-end'>
                        <span className='uppercase text-monials font-bold'>100K</span>
                        <span className='uppercase text-monials-sm'>happy customers with us</span>
                    </div>

                </div>
                <span className='uppercase text-monials font-bold'>Reviews</span>
                <div className="mon w-full pb-8">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        slidesPerGroup={1}
                        loop={false}
                        // style="padding:2rem;"
                        className='p-8'
                        breakpoints={{
                            856:{slidesPerView:3},
                            640 :{slidesPerView:2},
                            0 : {slidesPerView:1}
                        
                        }}  
                    >
                        {TestimonialsData.map((testimonial) => (

                            <SwiperSlide className=''>
                                <div className='swiper-monials swiper-slide-monials'>
                                    <img src={testimonial.image} alt="" />
                                    <span className='mt-8 text-center'>{testimonial.comment}</span>
                                    <hr />
                                    <span className='font-medium'>{testimonial.name}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Testimonials