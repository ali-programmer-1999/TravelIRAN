import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Cover_title from '../Ui/Cover_title'
import Page_title from '../Ui/Page_title'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
import about_img from '../../Assets/image/Home/section_5/pexels-alex-azabache-3214958.jpg'
import about_img_1 from '../../Assets/image/AboutUs/image_1.jpg'
import about_img_2 from '../../Assets/image/AboutUs/image_2.jpg'
import '../../Style/Aboutus.css'
import word_img from '../../Assets/image/AboutUs/travel_concept.png'
import Iframe from 'react-iframe'
import { PersonLeader } from '../Ui/Cart'

import Leader_data from '../../Assets/Data/Leader_data'



function About_Us() {
    return (
        <Cover_title title={"About_Us"}>
            <Page_title page_title={'About us'} />
            
            {/* section 1 */}
            <section>
                <Container>
                    <Row className='my-5 py-4'>
                        <Col sm='12' md='7' className='d-flex gap-2  p-5 flex-column justify-content-center'>
                            <h3 className='text-orange fw-bold'>PLAN YOUR TRIP WITH US</h3>
                            <h1 className='text-success display-3 fw-bolder'>READY FOR AN UNFORGETABLE TOUR?</h1>
                            <Link className='_btn_ w-50' to={'/book'}>Book Now</Link>
                        </Col>
                        <Col sm='12' md='4'><img src={word_img} className='w-100' alt="" /></Col>
                    </Row>
                </Container>
            </section>

            {/* section 2 */}
            <section className='py-5 _section_about_ rounded-3'>
                <Container>
                    <Row>
                        <Col sm='12' lg='6' className='position-relative'>
                            <img src={about_img} className="rounded-3" alt="aboutus" />
                            <img src={about_img_1} alt="aboutus" className='_aboutus_image1_' />
                            <img src={about_img_2} alt="aboutus" className='_aboutus_image2_' />
                        </Col>
                        <Col sm='12' lg='6' className='pe-4 pt-4 d-flex justify-content-center flex-column align-items-center'>
                            <h3 className='fw-bold text-success'>About IRANTravel</h3>
                            <h1 className='text-capitalize display-4 fw-bolder my-2 text-center'>World Best Travel Agency Company Since 1999.</h1>
                            <p className='text-muted mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo aut temporibus sequi ex expedita quasi nemo. Nam debitis eos porro, architecto magnam obcaecati!</p>
                            <div className='d-flex flex-column gap-2 my-5'>
                                <span className='d-flex align-items-center gap-2'>
                                    <i className="ri-checkbox-circle-fill fs-4 text-success text-center"></i> <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit quis?</span>
                                </span>
                                <span className='d-flex align-items-center gap-2'>
                                    <i className="ri-checkbox-circle-fill fs-4 text-success text-center"></i> <span>officiis sed, repudiandae quae id natus nam iste in labore tempore esse.</span>
                                </span>
                                <span className='d-flex align-items-center gap-2'>
                                    <i className="ri-checkbox-circle-fill fs-4 text-success text-center"></i> <span> Nisi alias quasi praesentium iusto possimus aspernatur tenetur commodi repellendus dicta maiores necessitatibus optio eveniet .</span>
                                </span>
                            </div>
                            <div className='d-flex justify-content-between gap-5 flex-column flex-lg-row'>
                                <span className='d-flex flex-column fs-6 text-muted text-center align-items-center'>
                                    <span className='display-6 fw-bolder text-success'>
                                        <CountUp end={22} />
                                        +
                                    </span>
                                    Year Experience
                                </span>
                                <span className='d-flex flex-column fs-6 text-muted text-center align-items-center'>
                                    <span className='display-6 fw-bolder text-success'>
                                        <CountUp end={80} />
                                        +
                                    </span>
                                    Destination Collaboration
                                </span>
                                <span className='d-flex flex-column fs-6 text-muted text-center align-items-center'>
                                    <span className='display-6 fw-bolder text-success'>
                                        <CountUp end={100} />
                                        K
                                    </span>
                                    Happy Customers
                                </span>
                            </div>

                        </Col>

                    </Row>
                </Container>
            </section>

            {/* section 3 */}
            <section>
                <Container>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2 className='text-center my-4 fw-bolder text-capitalize text-orange'>explorer activities</h2>
                        <h1 className='text-center w-75 display-4 fw-bolder text-success text-capitalize'>Making Adventure Tours, Activities Affordable.</h1>
                    </Row>
                    <Row>
                        <Col className='my-4 postion-relative'>
                            <Iframe url="http://www.youtube.com/embed/7lvXbfNBIQg"
                                position="relative"
                                width="100%"
                                className=" rounded-3 shadow"
                                height="600"
                            />

                        </Col>
                    </Row>
                </Container>
            </section>

            {/* section 4 */}
            <section className='_section_leader_'>
                <div className='_leader_content_'>
                    <Container>
                        <Row className='p-3 py-5 _location_content_row_'>
                            <h2 className='text-center my-4 fw-bolder text-capitalize'>REVIEW & TESTIMONIALS</h2>
                            <h1 className='text-center display-4 fw-bolder text-light text-capitalize'>What Our Customers Are Saying About Us</h1>
                        </Row>
                        <Row>
                            <PersonLeader Leader_data={Leader_data} />
                        </Row>
                    </Container>
                </div>
            </section>
            
        </Cover_title>
    )
}

export default About_Us