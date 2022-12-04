import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'react-bootstrap'
import loging_img from '../../Assets/image/Logo/logo.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../../Style/Loging.css'

function Loging(props) {
  return (
    <Container>
      <Row>
        <Col sm='12' className='d-flex justify-content-center'><img src={loging_img} className="w-75" alt="" /></Col>
        <Col sm='12' className='d-flex justify-content-center my-3 mt-4 fs-3 text-success fw-bold'>User Loging</Col>
        <Col sm='12' className='d-flex justify-content-center'>
          <Form className='_login_from_ d-flex flex-column align-items-center gap-2'>
            <FormGroup>
              <input type="text" placeholder='Email' />
            </FormGroup>
            <FormGroup>
              <input type="text" placeholder='Password' />
              <p className='text-success ps-2 _link_text_'>Forget password?</p>
            </FormGroup>
            <motion.button whileTap={{ scale: .9 }} type='submit' className='_btn_ btn w-100'>LOGING</motion.button>
            <div className='mt-4'>
              <p className='m-0'>Don't Have an Account?</p>
              <p className='mt-0 _link_text_ text-center'><Link className='text-success' onClick={props.closer} to={'/singup'}>Create Account!</Link></p>
            </div>
          </Form>
        </Col>
        <Col sm='12' className='fs-3 d-flex gap-3 justify-content-center _loging_icons_'>
          <motion.i whileTap={{ scale: .9 }} className="ri-instagram-line text-danger"></motion.i>
          <motion.i whileTap={{ scale: .9 }} className="ri-telegram-fill text-info"></motion.i>
          <motion.i whileTap={{ scale: .9 }} className="ri-whatsapp-line text-success"></motion.i>
          <motion.i whileTap={{ scale: .9 }} className="ri-youtube-fill text-danger"></motion.i>
        </Col>
      </Row>
    </Container>
  )
}

export default Loging