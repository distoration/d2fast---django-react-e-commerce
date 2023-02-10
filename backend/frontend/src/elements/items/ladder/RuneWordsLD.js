import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router'



import amulets from '../../../displays/amulets.png'
import armors from '../../../displays/armors.png'
import belts from '../../../displays/belts.png'
import boots from '../../../displays/boots.png'
import charms from '../../../displays/charms.png'
import gloves from '../../../displays/gloves.png'
import helms from '../../../displays/helms.png'
import rings from '../../../displays/rings.png'
import runes from '../../../displays/runes.png'
import runewords from '../../../displays/runewords.jpeg'
import setitems from '../../../displays/setitems.jpeg'
import shields from '../../../displays/shields.jpeg'
import weapons from '../../../displays//weapons.jpeg'
import jewels from '../../../displays/jewels.png'
import gears from '../../../displays/gears.png'
import socketable from '../../../displays/socketable.png'
import keysorgan from '../../../displays/keysorgan.png'



import { Container, Row, Col, NavDropdown, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import Badge from 'react-bootstrap/Badge';


import Product from '../../../elements/Product'   
import Loader from '../../../elements/Loader'
import Message from '../../../elements/Message'
import Paginate from '../../../elements/Paginate'
import ProductCarousel from '../../../elements/ProductCarousel'


import { listProducts } from '../../../actions/productActions'

let word = "Runewords"


function Mainscreen() {
  const location = useLocation();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const back = <Link to='/d2r-ladder-items' className='btn btn-dark my-3'>Go Back</Link>

  const { error, loading, products, page, pages } = productList

  let keyword = location.search

  useEffect(() => {
      dispatch(listProducts(keyword))

  }, [dispatch, keyword])
  
  return (
    <div>
        <h1>{back}<Badge bg="info">{word}</Badge></h1>

        <div class='container-fluid'>                           
                          <div class="row m-6 pt-0">                     
                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                        <label><a href="/d2r-ladder-items/runewords-ladder/runewords-armors/"><img src={armors} alt="domestico.pl" class="logo-image" width="130%"  /></a></label>                                  </div>
                              </div>


                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                     <label><a href="/d2r-ladder-items/runewords-ladder/runewords-helms/"><img src={helms} alt="domestico.pl" class="logo-image" width="130%"  /></a></label>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                <label><a href="/d2r-ladder-items/runewords-ladder/runewords-shields/"><img src={shields} alt="domestico.pl" class="logo-image" width="130%"  /></a></label>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                        <label><a href="/d2r-ladder-items/runewords-ladder/runewords-weapons/"><img src={weapons} alt="domestico.pl" class="logo-image" width="130%"  /></a></label>
                                  </div>
                              </div>
                          </div>
                      <div class="card-footer row m-0">
                      </div>
              </div>
        </div>
  )
}

export default Mainscreen
