import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router'


import { Row, Col } from 'react-bootstrap'
import Product from '../elements/Product'
import Loader from '../elements/Loader'
import Message from '../elements/Message'
import Paginate from '../elements/Paginate'
import ProductCarousel from '../elements/ProductCarousel'


import { listProducts } from '../actions/productActions'



function Mainscreen() {
  const location = useLocation();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { error, loading, products, page, pages } = productList

  let keyword = location.search

  useEffect(() => {
      dispatch(listProducts(keyword))
  }, [dispatch, keyword])
  
  return (
    <div>
        {!keyword && <ProductCarousel />}

        {loading ? <Loader />
          : error ? <Message variant='danger'>{error}</Message>
            : 
            <div>
            <Row>
                {products.map(product => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
             </Row>
             <Paginate page={page} pages={pages} keyword={keyword} />
            </div>
    }

    </div>
  )
}

export default Mainscreen