import React from 'react'
import '../../Style/Footer.css'
import logo_image from '../../Assets/image/Logo/logo.png'
import pay_card from '../../Assets/image/Footer/payment_cards.png'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

function Footer() {
    const navlist = [
        {
            page_name: 'Home',
            page_link: 'home'
        },
        {
            page_name: 'Book',
            page_link: 'book'
        },
        {
            page_name: 'Blog',
            page_link: 'blog'
        },
        {
            page_name: 'About Us',
            page_link: 'aboutus'
        },

    ]
    return (
        <footer className='shadow'>
            <Container>
                <Row className='border-bottom'>
                    <Col className='d-flex flex-column p-5 gap-3 align-items-center'>
                        <img src={logo_image} alt="logo image" className='w-50' />
                        <span className=' text-muted text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam ipsum ducimus explicabo magnam, natus eos atque repellat cumque cum voluptas porro vero pariatur</span>
                        <img src={pay_card} alt="" />
                    </Col>
                    <Col className='d-flex flex-column p-5 gap-3  align-items-center'>
                        <h3 className='fw-bold text-success'>Quick Link</h3>
                        <ul className=" list-unstyled d-flex flex-column gap-2 w-100 mx-4 my-0 justify-content-evenly align-items-center">
                            {
                                navlist.map((item, index) =>
                                    <li className="nav-item" key={index}>
                                        <NavLink className='nav-link text-muted'
                                            to={`${item.page_link}`}>{item.page_name}</NavLink>
                                    </li>
                                )
                            }
                        </ul>
                    </Col>
                    <Col className='d-flex flex-column p-5 gap-3  align-items-center'>
                        <h3 className='fw-bold text-success'>Contact</h3>
                        <div className='d-flex flex-column gap-1'>
                            <span><span className='text-success fw-bold'>Email : </span><span className='text-muted'>ali.programer.1999@gmail.com</span></span>
                            <span><span className='text-success fw-bold'>Phone : </span><span className='text-muted'>09379534460</span></span>
                            <span><span className='text-success fw-bold'>Fax : </span><span className='text-muted'>011-11252210</span></span>
                            <div className='text-success fs-3 d-flex gap-2 _icons_social_'>
                                <motion.i whileTap={{ scale: .8 }} className="ri-instagram-line"></motion.i>
                                <motion.i whileTap={{ scale: .8 }} className="ri-youtube-line"></motion.i>
                                <motion.i whileTap={{ scale: .8 }} className="ri-telegram-line"></motion.i>
                                <motion.i whileTap={{ scale: .8 }} className="ri-whatsapp-line"></motion.i>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 className='text-muted p-3 mt-2 rounded-3 text-center bg-light'>Copyright ©2022 Travle(alirg) All Rights Reserved</h6>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}

export default Footer