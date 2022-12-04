import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Logo_img from '../../Assets/image/Logo/logo.png'
import "../../Style/Header.css"
import Sidebar from '../Ui/Sidebar'
import Loging from '../Pages/Loging'
import Order from '../Ui/Order'
import Singup from '../Pages/Singup'
import { useSelector } from 'react-redux'

function Header() {
    const [sidebar_log, setsidebar_login] = useState(false)
    const [sidebar_order, setsidebar_order] = useState(false)

    const badge_icons = useSelector((state) => state.cart.Order_cart)

    const _list_nav_active_ = (e) => {
        const item = e.target
        item.classList.remove('acitve_nav_link')
        item.classList.add("acitve_nav_link")
    }

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


    // sidebar
    let Siderhandler;
    if (sidebar_order) {
        Siderhandler = <Sidebar side_active={400} sidebar_closer={() => { setsidebar_order(false) }}><Order closer={() => { setsidebar_order(false) }} /></Sidebar>
    }
    else if (sidebar_log) {
        Siderhandler = <Sidebar side_active={400} sidebar_closer={() => { setsidebar_login(false) }}><Loging closer={() => { setsidebar_login(false) }} /></Sidebar>
    }
    else {
        Siderhandler = <Sidebar side_active={0}></Sidebar >
    }



    return (
        <header >
            <Container>
                <Row className='mt-2'>
                    <Col sm="9" className='_nav_head_ d-flex align-items-center gap-2'><span className=''>Need help ?</span> <i className="ri-phone-fill _header_icons_"></i><span>Call: </span><span> 09379534460</span></Col>
                    <Col sm='3' className=' d-flex gap-3 justify-content-center '>
                        <i className="ri-instagram-line text-danger fs-4"></i>
                        <i className="ri-telegram-fill text-info fs-4"></i>
                        <i className="ri-whatsapp-line text-success fs-4"></i>
                        <i className="ri-youtube-fill text-danger fs-4"></i>
                    </Col>
                </Row>
            </Container>
            <div className='bg-light'>
                <Container>
                    <Row className=' mt-2 py-2 rounded-3 _navigation_'>
                        <Col sm='3'>
                            <NavLink to={'/'}>
                                <img className='_logo_' src={Logo_img} alt="" />
                            </NavLink>
                        </Col>
                        <Col className='d-flex align-items-center'>
                            <ul className="d-flex w-100 mx-4 my-0 justify-content-evenly align-items-center list-unstyled">
                                {
                                    navlist.map((item, index) =>
                                        <li className="nav-item" key={index}>
                                            <NavLink className='nav-link fw-bold text-success'
                                                to={`${item.page_link}`}>{item.page_name}</NavLink>
                                        </li>
                                    )
                                }
                            </ul>
                        </Col>
                        <Col sm='3'>
                            <div className='_icons_nav_'>
                                <span onClick={() => { setsidebar_login(true) }} className='fs-3 text-success'><i className="ri-user-line"></i></span>
                                <span onClick={() => { setsidebar_order(true) }} className='fs-3 text-success position-relative'>
                                    <i className="ri-book-read-line"></i>
                                    {badge_icons !== undefined ?
                                        <div className="spinner-grow spinner-grow-sm position-absolute _badge_ bg-danger" role="status">
                                        </div>
                                        : null}
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {Siderhandler}
            </div>
        </header >
    )
}

export default Header