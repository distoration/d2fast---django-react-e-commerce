import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router'
import Badge from 'react-bootstrap/Badge';


import { Row, Col } from 'react-bootstrap'
import Product from '../../../elements/Product'
import Loader from '../../../elements/Loader'
import Message from '../../../elements/Message'
import Paginate from '../../..//elements/Paginate'
import ProductCarousel from '../../../elements/ProductCarousel'


import { listProductsAll } from '../../../actions/productActions'

let word = "Runes"

function Mainscreen() {
  const location = useLocation();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { error, loading, products, page, pages} = productList
  const back = <Link to='/d2r-ladder-items' className='btn btn-dark my-3'>Go Back</Link>

  const filtered = products.filter(product => {
    return product.category === "runes";
  });


  let keyword = location.search

  useEffect(() => {
      dispatch(listProductsAll(keyword))

  }, [dispatch, keyword])


  
  return (
    <div>
        <h1>{back}<Badge bg="info">{word}</Badge></h1>
        {loading ? <Loader />
          : error ? <Message variant='danger'>{error}</Message>
            : 
            <div>



                <Row>
                    {filtered.map(product => (

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



//take_category = Product.objects.filter(category="category").all()