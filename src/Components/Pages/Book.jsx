import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Cover_title from '../Ui/Cover_title'
import Page_title from '../Ui/Page_title'
import Location_data from '../../Assets/Data/Location_data'
import {Location_cart} from '../Ui/Cart'
import '../../Style/Book.css'


function Book() {
    const [productData, setproductData] = useState(Location_data)

    const sort_handler = (e) => {
        const select_value = e.target.value
        if (select_value === 'price') {
            const sort_price = productData.filter(a => a.price)
            sort_price.sort(function (a, b) {
                return b.price - a.price;
            });
            setproductData(sort_price)
        }
        if (select_value === 'rate') {
            const sort_rate = productData.filter(a => a.rate)
            sort_rate.sort(function (a, b) {
                return b.rate - a.rate;
            });
            setproductData(sort_rate)
        }
        if (select_value === 'day') {
            const sort_day = productData.filter(a => a.time)
            sort_day.sort(function (a, b) {
                return b.time - a.time;
            });
            setproductData(sort_day)
        }
        if (select_value === 'default') {
            setproductData(Location_data)
        }

    }


    return (
        <Cover_title title={'Book'}>
            <Page_title page_title={'BOOK'} />
            <section className='_book_section_ py-5'>

                <Container className='d-flex justify-content-center flex-column align-items-center'>
                    <Row className='w-100'>
                        <Col sm='4' className='d-flex'>
                            <span className='fw-bold fs-5 d-flex gap-2 align-items-center'><i className="ri-sort-asc"></i> Sort By : </span>
                            <select onChange={sort_handler} className='mx-3 w-50 _sort_book_'>
                                <option value='default'>Default</option>
                                <option value='price'>Price</option>
                                <option value='rate'>Rate</option>
                                <option value='day'>Day</option>
                            </select>
                        </Col>
                    </Row>
                    <Row className='d-flex justify-content-center my-5'>
                        <Location_cart data={productData} />
                    </Row>
                </Container>

            </section>
        </Cover_title>
    )
}

export default Book