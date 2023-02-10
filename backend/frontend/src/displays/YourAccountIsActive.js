import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router'
import { Container, Row, Col, NavDropdown, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


import Message from '../elements/Message'



import { listProducts } from '../actions/productActions'

import diablo4 from './diablo4.jpg'


function Mainscreen() {
  const location = useLocation();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)



  const Buttone = <button class="login-button"onClick={() => navigate('/login')}>LOG IN!</button>
  let keyword = "Congratulations! Your account has been activated! Now you can"
  let login_keyword = "!"
  

  
  return (
    <div>


        <Message variant='success'>{keyword} {Buttone}</Message>


        <img src={diablo4} alt="d2fast.com" class="logo-image" width="100%" />

    </div>
  )
}

export default Mainscreen