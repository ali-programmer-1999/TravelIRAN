import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { cancelOrder } from '../Redux/sliceCart'
import { Link } from 'react-router-dom'
function Order(props) {
    const item = useSelector((state) => state.cart.Order_cart)
    const dispatch = useDispatch()
    const cancelHanler = () => {
        dispatch(cancelOrder(undefined))
    }
    return (
        <>
            {item === undefined ?
                <Container className='d-flex justify-content-center align-items-center h-75'>
                    <Row>
                        <Col className='d-flex justify-content-center flex-column'>
                            <h2 className='fw-bold'>Please select a location</h2>
                            <Link className='_btn_' onClick={props.closer} to={'/book/'}>Book</Link>
                        </Col>
                    </Row>
                </Container>

                : <Container>
                    <Row className='d-flex flex-column gap-1'>
                        <Col><h4 className='text-center fw-bold border-bottom py-1'>{item.category} : {item.location}</h4></Col>
                        <Col>
                            <img src={item.imgurl} className='w-100 rounded-3 _order_img_' alt="order_image" />
                        </Col>
                        <Col className='d-flex justify-content-evenly p-2 align-items-center _icons_order_'>
                            <span><i className="ri-road-map-fill"></i> <span> {item.place} </span> Place</span>
                            <span><i className="ri-calendar-event-line"></i> <span> {item.time} </span>day</span>
                            <span><i className="ri-user-line"></i> <span> {item.count_person} </span>person</span>
                        </Col>

                        <Col className='p-3 d-flex justify-content-center flex-column align-items-center'>
                            <h5 className='text-center w-50 border-bottom pb-2'>Price : {item.price}</h5>
                            <h4 className='fw-bold text-center pt-1'>Total price : {item.count_person * item.price} $</h4>
                        </Col>
                        <Col className='border-bottom d-flex justify-content-center flex-column'>
                            <div className='d-flex justify-content-center btn-group pb-1'>
                                <Link className='btn btn-danger w-50 p-2' onClick={cancelHanler} >Cancel</Link>
                                <Link to={`/book/${item.id}`} className='btn btn-info w-50'>View Detile</Link>
                            </div>
                            <Link className='btn btn-success'>Finaly</Link>
                        </Col>
                        <Col className='p-2'>
                            <div className='d-flex justify-content-center align-items-center flex-column '>
                                <i className="ri-error-warning-fill fs-3 text-warning"></i><span className='text-warning text-center px-4'> n addition,  groups and toolbars shouldgroups and toolbars should</span>
                            </div>
                            <div className='d-flex justify-content-center align-items-center gap-2'>
                                <i className="ri-phone-fill fs-4"></i><span className='text-'> 01132450000</span>
                            </div>
                            <div className='d-flex justify-content-center align-items-center gap-2'>
                                <i className="ri-mail-send-line fs-4"></i><span className='text-'> ali.programer.1999@gmail.com</span>
                            </div>

                        </Col>
                    </Row>
                </Container>}
        </>
    )
}

export default Order