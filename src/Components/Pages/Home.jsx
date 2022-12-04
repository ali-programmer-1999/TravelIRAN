import React, { useState, useEffect } from 'react'

// assest 
import about_img from '../../Assets/image/Home/section_5/pexels-alex-azabache-3214958.jpg'
import Home_section1_img from '../../Assets/image/Home/banner_image.png'
import Home_serve_img from '../../Assets/image/Home/Sec2_vector_img.png'

// component 
import { Container, Row, Col, Form, FormGroup } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { Location_cart, Blog_cart, PersonLeader } from '../Ui/Cart'
import CountUp from 'react-countup'

// data 
import Service_data from '../../Assets/Data/Home_service_data'
import Home_Book_data from '../../Assets/Data/Home_Book_data'
import Leader_data from '../../Assets/Data/Leader_data'
import Location_data from '../../Assets/Data/Location_data'
import Blog_data from '../../Assets/Data/Blog_data'

// style css
import '../../Style/Home.css'
import Cover_title from '../Ui/Cover_title'


function Home() {
    const [get_dataBook, set_get_dataBook] = useState(null)
    const [location_book, set_location_book] = useState()
    const [person_book, set_person_book] = useState('')
    const [indate_book, set_indate_book] = useState('')
    const [outdate_book, set_outdate_book] = useState('')

    // form send data to data base

    const Bookhandler = (e) => {
        e.preventDefault()
        const json_data_book = {
            locaiton: location_book,
            date_in: indate_book,
            date_out: outdate_book,
            person: person_book,
        }
        set_get_dataBook(json_data_book)
    }
    //#############################

    // data from data base
    const [blog_data, set_blog_data] = useState(Blog_data.slice(0, 3))
    const [location_data, set_location_data] = useState(Location_data)
    useEffect(() => {
        const filter_location = location_data.filter(item => item.rate >= 4)
        set_location_data(filter_location.slice(0, 3))
        //#########################
    }, [])


    return (
        <Cover_title title='Home'>
            <section>
                <Container>
                    <Row className='_section_1_ my-5'>
                        <Col md='12' lg='6' className='d-flex align-items-center'><img src={Home_section1_img} className="w-100" alt="" /></Col>
                        <Col md='12' lg='6' className='d-flex justify-content-center gap-3 flex-column p-5 my-5 order-lg-first align-items-center align-items-lg-start'>
                            <h4 className='text-success fw-bold'>Explore the World!</h4>
                            <h1 className=' fw-bolder display-4  text-center text-lg-start'>Let's Make Your best trip Ever!</h1>
                            <p className='text-muted  text-center text-lg-start'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, commodi ullam? Aliquam vitae maiores odio, natus error cum quisquam nihil quidem numquam </p>
                            <motion.button whileTap={{ scale: .9 }} className='w-50 btn btn-success rounded-pill p-2 shadow'>Show Books</motion.button>
                        </Col>

                    </Row>
                    {/* section_2  */}

                    <Row className='_section_book_ shadow'>
                        <Col sm='12' className='d-flex justify-content-center mt-4'>
                            <ul className='_icons_list_book_ d-flex justify-content-evenly w-100 bg-light'>
                                {Home_Book_data.map((item, index) =>
                                    <li key={index} className=' list-unstyled'>
                                        <img src={item.img_icons} className='d-block mx-auto mb-2' alt="icons" />
                                        <span className='fs-6 fw-bold'>{item.title_icons}</span>
                                    </li>)}
                            </ul>
                        </Col>
                        <Col sm='12' className='mt-4 d-flex justify-content-center align-items-center gap-3 flex-column'>
                            <Form onSubmit={Bookhandler} className='w-100 d-flex align-items-center flex-column'>
                                <FormGroup className='d-flex justify-content-evenly flex-wrap mb-3 w-100 gap-3'>
                                    <FormGroup>
                                        <h5>Location</h5>
                                        <select onChange={(e) => set_location_book(e.target.value)}>
                                            <option value="">...</option>
                                            <option value="Iran">Iran</option>
                                            <option value="Chaina">Chaina</option>
                                            <option value="Dubai">Dubai</option>
                                            <option value="Thailand">Thailand</option>
                                            <option value="Italy">Italy</option>
                                            <option value="France">France</option>
                                            <option value="Switzerland">Switzerland</option>
                                            <option value="Turkey">Turkey</option>
                                            <option value="Canada">Canada</option>
                                            <option value="Mexic">Mexic</option>
                                            <option value="Argantina">Argantina</option>
                                            <option value="Bresil">Bresil</option>
                                            <option value="Egypt">Egypt</option>
                                            <option value="Cameroon">Cameroon</option>
                                            <option value="Kenya">Kenya</option>
                                            <option value="Australian">Australian</option>
                                        </select>
                                    </FormGroup>
                                    <FormGroup>
                                        <h5>Adults</h5>
                                        <input type="number" defaultValue='1' onChange={(e) => { set_person_book(e.target.value) }} />
                                    </FormGroup>
                                    <FormGroup>
                                        <h5>Check in</h5>
                                        <input type="date" onChange={(e) => { set_indate_book(e.target.value) }} />
                                    </FormGroup>
                                    <FormGroup>
                                        <h5>Check out</h5>
                                        <input type="date" onChange={(e) => { set_outdate_book(e.target.value) }} />
                                    </FormGroup>
                                </FormGroup>
                                <button type='submit' className='btn text-light w-25 _btn_ p-3 mt-2'>Book</button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='_section_serve_'>
                <Container>
                    <Row>
                        <Col sm='12' lg='6' className='_serve_service_ overflow-hidden mb-4'>
                            <h3 className='fw-bold'>WHAT WE SERVE</h3>
                            <h1 className='display-3 fw-bolder text-center'>TOP VALUES FOR YOU!</h1>
                        </Col>
                        <Col sm='12' lg='6' className='d-flex justify-content-center'><img src={Home_serve_img} className='w-100' alt="" /></Col>
                    </Row>
                    <Row className='mt-5 p-5 d-flex justify-content-center gap-4 flex-md-row gap-lg-5'>
                        {
                            Service_data.map((item, index) =>
                                <Col sm='12' md='5' lg='3' className='_service_box_' key={index}>
                                    <img src={item.image_service} alt="icons_service" className='w-25' />
                                    <h4 className='fw-bolder'>{item.title_service}</h4>
                                    <p className='text-center text-muted'>{item.text_service}</p>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </section>

            <section className='_secton_location_'>
                <div className='location_content'>

                    <Container className='py-5'>
                        <Row className='_location_content_row_'>
                            <h2 className='text-center my-4 fw-bolder text-capitalize'>explorer wonderful experience</h2>
                            <h1 className='text-center display-4 fw-bolder text-light text-capitalize'>Visit Popular Destinations in the World</h1>
                        </Row>
                        <Row className='d-flex justify-content-center'>
                            <Location_cart data={location_data} />
                        </Row>
                    </Container>
                </div>

            </section>

            <section className='py-5 _section_about_'>
                <Container>
                    <Row>
                        <Col sm='12' lg='6'><img src={about_img} className="rounded-3" alt="" /></Col>
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

            <section className='_section_article_'>
                <Container>
                    <Row>
                        <h3 className='fw-bold text-success text-center'>NEWS & ARTICLES</h3>
                        <h1 className='text-capitalize text-center fw-bolder my-2'>Stay Update with IRANTravel.</h1>
                    </Row>
                    <Row className='mt-5 d-flex justify-content-evenly'>
                        <Blog_cart blog_data={blog_data} />
                    </Row>
                </Container>
            </section>
        </Cover_title>
    )
}

export default Home