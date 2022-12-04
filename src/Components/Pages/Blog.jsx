import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Cover_title from '../Ui/Cover_title'
import Page_title from '../Ui/Page_title'
import Blog_data from '../../Assets/Data/Blog_data'
import { Blog_cart } from '../Ui/Cart'
function Blog() {
  const [blogData, setblogData] = useState(Blog_data)
  useEffect(() => {
    window.scroll(0, 0)
  })
  return (
    <Cover_title title={'Blog'}>
      <Page_title page_title={'Blog'} />
      <section className='my-5'>
        <Container>
          <Row className='d-flex justify-content-evenly gap-5'>
            <Blog_cart blog_data={blogData} />
          </Row>
        </Container>
      </section>

    </Cover_title>
  )
}

export default Blog