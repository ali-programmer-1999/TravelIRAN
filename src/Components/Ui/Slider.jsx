import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Col } from 'react-bootstrap'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export function Blog_Slider({ datablog }) {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                className="mySwiper p-4"
            >
                {datablog.map((item, index) =>
                    <SwiperSlide className="_slider_height_ rounded-3 overflow-hidden bg-gradint shadow position-relative" key={index}>
                        <img src={item.blog_img} className='w-100' alt="Blog_image" />
                        <div className="mt-3 p-3 d-flex flex-column">
                            <h6 className=" position-absolute top-0 end-0 px-4 py-1 m-3 bg-orange text-light fw-bold rounded-pill">{item.blog_contiry_name}</h6>
                            <h6 className="text-center">{item.date_time}</h6>
                            <p className="text-center">{item.short_blog}</p>
                            <Link className="_btn_" to={`/blog/${item.id}`}>Read More</Link>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );


}
export function Location_Slider({ Location_data }) {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                className="mySwiper p-4"
            >
                {Location_data.map((item, index) =>
                    <SwiperSlide  key={item.id}>
                        <Col className='_col_location_cart_ user-select-none'>
                            <div className='_location_cart_ shadow'>
                                <div className='d-flex align-items-center gap-2 fs-6'><i className="ri-map-pin-fill fs-5 _location_icons_cart_"></i> <span>{item.location}</span></div>
                                <p className='text-center mt-3 fw-bold'>{item.short_disc}</p>
                                <img src={item.imgurl} className='w-100 my-2 rounded-3' alt="" />
                                <div className='text-muted _cart_icons_group_ d-flex justify-content-between px-2 border-bottom py-3 align-items-center'>
                                    <span>{item.rate} Rate</span>
                                    <span><i className="ri-road-map-fill"></i> <span> {item.place} </span> Place</span>
                                    <span><i className="ri-calendar-event-line"></i> <span> {item.time} </span> day</span>
                                </div>
                                <div className='d-flex justify-content-between align-items-center pt-3 px-2'>
                                    <span className='fs-5 fw-bold'>{item.price}$<span className='fs-6 text-muted fw-normal'> /person</span></span>

                                    <Link className='text-light text-decoration-none text-nowrap _btn_' to={`/book/${item.id}`}>
                                        View Detile
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}
