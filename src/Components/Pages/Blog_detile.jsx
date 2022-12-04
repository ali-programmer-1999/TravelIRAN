import React, { useEffect } from 'react'
import Blog_data from '../../Assets/Data/Blog_data'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Cover_title from '../Ui/Cover_title'
import Page_title from '../Ui/Page_title'
import { Link } from 'react-router-dom'
import {Blog_Slider} from '../Ui/Slider'


function Blog_detile() {
  const { id } = useParams()
  const blog_item = Blog_data.find(item => item.id === id)
  const { blog_contiry_name, blog_img, date_time, short_blog, blog_text } = blog_item



  return (
    <Cover_title title={short_blog}>
      <Page_title page_title={blog_contiry_name} />
      <Container>
        <Row>
          <Col sm='12' className='h-content'>
            <img src={blog_img} className='w-100 rounded-3 my-5 h-50' alt="blog_image" />
            <p className='text-muted px-3 fs-5'>{date_time}</p>
            <h2 className='fw-bold text-orange mb-4'>{short_blog}</h2>
            <p className='text-justify'>{blog_text}</p>
            <div className='d-flex justify-content-center'>
              <Link className='_btn_ text-decoration-none my-5 d-flex align-items-center gap-3' to={'/blog'}>Back to Blog <i className="ri-arrow-right-fill"></i></Link>
            </div>
            <div>
              <Blog_Slider datablog={Blog_data} />
            </div>
          </Col>
        </Row>
      </Container>
    </Cover_title>
  )
}

export default Blog_detile