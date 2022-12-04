import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import Cover_title from '../Ui/Cover_title'
import Page_title from '../Ui/Page_title'
import { Rating } from 'react-simple-star-rating'
import { useParams } from 'react-router-dom'
import Location_data from '../../Assets/Data/Location_data'
import '../../Style/Location_detile.css'
import { Location_Slider } from '../Ui/Slider'
import { useDispatch, useSelector } from 'react-redux'
import { choiceOrder } from '../Redux/sliceCart'


function Location_detile() {
    const { id } = useParams()
    const find_Cart = Location_data.find(item => item.id === id)
    const { category, location, imgurl, place, time, rate, description, price, location_short, person } = find_Cart
    const [adults, set_Adults] = useState(person)
    const [rating, setRating] = useState(rate)
    const [count_person, set_count_person] = useState(1)
    const order_have = useSelector((state) => state.cart.Order_cart)

    // choise item 
    const dispatch = useDispatch()
    const ChoiseHandler = () => {
        dispatch(choiceOrder({
            category, location, imgurl, place, time, price, count_person, id
        }))
        if (order_have) {
            toast.success('plase chaek list order!');
        }
        else {
            toast.success('Your order has been registered!');
        }
    }


    useEffect(() => {
        window.scroll(0, 350)
    })

    return (
        <Cover_title title={location}>
            <Page_title page_title={location} />
            <Container className='py-5 '>
                <Row className='_location_detile_ bg-gradint rounded-3 p-0 my-5 overflow-hidden shadow'>
                    <Col sm='12' lg='6' className='p-0'>
                        <img className='w-100 rounded-start h-100 img-cover' src={imgurl} alt="" />
                    </Col>
                    <Col sm='12' lg='6' className='px-5 py-4 d-flex flex-column gap-3'>
                        <div className='border-bottom d-flex justify-content-between align-items-center fs-6 pb-4'>
                            <h3 className='text-success fw-bold'>{location} <span className='bg-orange end-0 top-0 px-3 py-1 rounded-pill text-light fs-6'>{category}</span></h3>

                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <h6 className='m-0 text-orange'>Rate({rate})</h6>
                                <Rating
                                    initialValue={rating}
                                />
                            </div>
                        </div>
                        <div>
                            <div className='text-muted d-flex justify-content-evenly py-2 align-items-center'>
                                <span><i className="ri-road-map-fill"></i> <span> {place} </span> Place</span>
                                <span><i className="ri-calendar-event-line"></i> <span>{time} </span> day</span>
                            </div>
                            <p className=' py-2 fw-bold '>{location_short}</p>
                        </div>
                        <div className='d-flex align-items-center justify-content-between gap-2 px-3'>
                            <h3 className='fw-bold'>{price} $ <span className='text-muted fs-6'>/person</span></h3>
                            <div className='d-flex'>
                                <span className='text-orange fs-5 text-nowrap'> Adults : </span>
                                <input type="number" className='border-0 w-50 border-bottom px-2 fs-5 mx-2 rounded-2' max='10' min='1' defaultValue={1} onChange={(e) => { set_count_person(e.target.value) }} />
                            </div>
                        </div>
                        <button className='_btn_' onClick={ChoiseHandler}>Book Location</button>
                    </Col>
                </Row>

                {/* slider  */}
                <Row className='my-5 border-bottom border-top'>
                    <Location_Slider Location_data={Location_data} />
                </Row>


                {/* Description  */}
                <Row className='my-5'>
                    <Col>
                        <h3 className='text-muted fw-bold border-bottom p-3'>Description</h3>
                        <p className='px-3 border-bottom pb-5'>{description}</p>


                        {/* Form  */}
                        <div className='_form_comment_ w-100 p-5 mt-4 d-flex flex-column justify-content-center'>
                            <div>
                                <h4>Write your opinion</h4>
                                <span className='text-orange'>Your email address will not be published. Required sections are marked *</span>
                            </div>
                            <Form>

                                <div className='d-flex flex-column'>

                                    <div className='_form_group_'>
                                        <label>FristName</label>
                                        <input type="text" />
                                    </div>

                                    <div className='_form_group_'>
                                        <label>LastName</label>
                                        <input type="text" />
                                    </div>

                                    <div className='_form_group_'>
                                        <label>Email</label>
                                        <input type="email" />
                                    </div>
                                    <div className='d-flex justify-content-center'>

                                        <Rating />
                                    </div>

                                    <button type='submit' className='_btn_ mt-3'>Send</button>

                                </div>
                                <div className='_form_group_'>
                                    <label>Type your textarea</label>
                                    <textarea></textarea>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>


            </Container>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                draggable
                theme="light"
            />

        </Cover_title>
    )
}

export default Location_detile