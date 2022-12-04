import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'react-bootstrap'
import Cover_title from '../Ui/Cover_title'
import singup_img from '../../Assets/image/Singup/Tourism_day.png'
import { Link } from 'react-router-dom'
function Singup() {
    return (
        <Cover_title title={'Singup'}>
            <Container>
                <Row>
                    <Col className='p-5' sm='12' md='5'>
                        <img src={singup_img} alt="singup_img" className='w-100' />
                    </Col>
                    <Col sm='12' md='7' className='d-flex flex-column py-5 align-items-center'>
                        <h1>Singup</h1>
                        <Form className='d-flex my-4  gap-2 flex-column'>
                            <FormGroup className='d-flex gap-2'>
                                <input type="text" className='form-control py-2' placeholder='First name' />
                                <input type="text" className='form-control' placeholder='Last name' />
                            </FormGroup>
                            <input type="email" className='form-control py-2' placeholder='Email' />
                            <input type="number" className='form-control py-2' placeholder='Phone' />
                            <FormGroup className='d-flex justify-content-center gap-3'>
                                <input type="number" className='form-control py-2 w-25' placeholder='Age' />
                                <div className='d-flex align-items-center justify-content-center gap-3 w-75' >
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" name="optradio" value="man" />Man
                                        <label className="form-check-label"></label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" name="optradio" value="woman" />Woman
                                        <label className="form-check-label"></label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" value="other" name="optradio"/>Other
                                        <label className="form-check-label"></label>
                                    </div>
                                </div>
                            </FormGroup>
                            <button className='btn btn-success'>Singup</button>
                        </Form>
                        <h5>Do you have account ? <Link  className='text-success border-0'>Login</Link></h5>
                    </Col>
                </Row>
            </Container>
        </Cover_title>
    )
}

export default Singup