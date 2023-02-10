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

import diablo3 from './diablo3.jpg'


function Mainscreen() {
  const location = useLocation();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)

  let keyword = "Registered Done! \ please go to you email inbox and click on \
  received activation link to confirm and complete the registration. Check your spam folder."
  
  return (
    <div>


        <Message variant='success'>{keyword}</Message>

        <img src={diablo3} alt="d2fast.com" class="logo-image" width="100%" />

    </div>
  )
}

export default Mainscreen