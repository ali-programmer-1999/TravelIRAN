import React, { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../../Style/Cart.css'


// location_cart Component

export function Location_cart({ data }) {


    useEffect(() => {
        window.scroll(0, 0)
    })
    return (
        <>
            {data.map(item =>
                <Col className='_col_location_cart_' key={item.id}>
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
                </Col>)}
        </>
    )
}



// Blog component

export function Blog_cart({ blog_data }) {
    return (
        <>
            {blog_data.map((item, index) =>
                <Col key={index} sm='4' className='_blog_cart_ shadow'>
                    <div className='_blog_img_cart_ position-relative'>
                        <img src={item.blog_img} alt="blog_image" />
                        <span className='position-absolute text-light fs-5 end-0 top-0 m-3 px-3 rounded-pill'>{item.blog_contiry_name}</span>
                        <div className='p-3 position-absolute bottom-0 text-light'>
                            <h6>{item.date_time}</h6>
                            <h5 className='fw-bold my-3'>{item.short_blog}</h5>
                            <Link to={`/blog/${item.id}`} className='btn _btn_'>Read More</Link>
                        </div>
                    </div>

                </Col>
            )}
        </>
    )
}


export function PersonLeader({ Leader_data }) {
    return (
        <>
            {Leader_data.map((item, index) =>
                <Col key={index} sm='12' md='6' lg='3' className='shadow'>
                    <div className='_leader_cart_ position-relative my-2'>
                        <i className="ri-double-quotes-r text-light position-absolute end-0 top-0 rounded-circle fs-2 py-2 px-3 m-2 "></i>
                        <img src={item.leader_img} className="mb-3" alt="" />
                        <p className='text-muted'>{item.leader_des}</p>
                        <h5 className='fw-bold text-nowrap'>{item.leader_name} /<span className='text-muted fs-6'>{item.age} age</span></h5>
                        <div className='fs-3 mt-4 d-flex gap-3 justify-content-center _loging_icons_'>
                            <motion.i whileTap={{ scale: .9 }} className="ri-instagram-line text-danger"></motion.i>
                            <motion.i whileTap={{ scale: .9 }} className="ri-telegram-fill text-info"></motion.i>
                            <motion.i whileTap={{ scale: .9 }} className="ri-whatsapp-line text-success"></motion.i>
                        </div>
                    </div>
                </Col>
            )}
        </>
    )
}