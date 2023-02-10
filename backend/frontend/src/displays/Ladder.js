import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router'



import amulets from './amulets.png'
import armors from './armors.png'
import belts from './belts.png'
import boots from './boots.png'
import charms from './charms.png'
import gloves from './gloves.png'
import helms from './helms.png'
import rings from './rings.png'
import runes from './runes.png'
import runewords from './runewords.jpeg'
import setitems from './setitems.jpeg'
import shields from './shields.jpeg'
import weapons from './weapons.jpeg'
import jewels from './jewels.png'
import gears from './gears.png'
import socketable from './socketable.png'
import keysorgan from './keysorgan.png'
import mercgear from './mercgear.png'



import { Container, Row, Col, NavDropdown, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

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
        <div class='container-fluid'>                          
                      <div class="heading text-center"> 
                      
                        <div class="realm">
                            
                            <NavDropdown title='CHOOSE SERVER 🌎' id='changerealm'>
                                <LinkContainer to ='/d2r-ladder-items'>
                                    <NavDropdown.Item>D2R (Ladder)</NavDropdown.Item>
                                </LinkContainer>

                                <LinkContainer to ='/d2r-non-ladder-items'>
                                    <NavDropdown.Item>D2R (Non-Ladder)</NavDropdown.Item>
                                </LinkContainer>

                                <LinkContainer to ='/d2r-hardcore-items'>
                                    <NavDropdown.Item>D2R (Hardcore HC) </NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        </div>
                          <div class="head1">D2R <a class="ladder-items-text">LADDER⚔️</a></div>   

                          
                                     
                      </div>
                          <div class="row m-6 pt-0">
                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <label><a href="/d2r-ladder-items/amulets-ladder"><img src={amulets} alt="domestico.pl" class="logo-image" width="130%"  /></a></label>
                                  </div>
                              </div>

                              
                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                        <label><a href="/d2r-ladder-items/armors-ladder"><img src={armors} alt="domestico.pl" class="logo-image" width="130%"  /></a></label>                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                     <label><a href="/d2r-ladder-items/belts-ladder"><img src={belts} alt="domestico.pl" class="logo-image" width="130%"  /></a></label>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                    <label><a href="/d2r-ladder-items/boots-ladder"><img src={boots} alt="domestico.pl" class="logo-image" width="130%"  /></a></label>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                     <label><a href="/d2r-ladder-items/charms-ladder"><img src={charms} alt="domestico.pl" class="logo-image" width="130%"  /></a></label>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                     <label><a href="/d2r-ladder-items/gloves-ladder"><img src={gloves} alt="domestico.pl" class="logo-image" width="130%"  /></a></label>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                     <label><a href="/d2r-ladder-items/helms-ladder"><img src={helms} alt="domestico.pl" class="logo-image" width="130%"  /></a></label>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                        <label><a href="/d2r-ladder-items/rings-ladder"><img src={rings} alt="domestico.pl" class="logo-image" width="130%"  /></a></label>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                     <label><a href="/d2r-ladder-items/runes-ladder"><img src={runes} alt="domestico.pl" class="logo-image" width="130%"  /></a></label>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                        <label><a href="/d2r-ladder-items/runewords-ladder"><img src={runewords} alt="domestico.pl" class="logo-image" width="130%"  /></a></label>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                        <label><a href="/d2r-ladder-items/set-items-ladder"><img src={setitems} alt="domestico.pl" class="logo-image" width="130%"  /></a></label>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                <label><a href="/d2r-ladder-items/shields-ladder"><img src={shields} alt="domestico.pl" class="logo-image" width="130%"  /></a></label>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                        <label><a href="/d2r-ladder-items/weapons-ladder"><img src={weapons} alt="domestico.pl" class="logo-image" width="130%"  /></a></label>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                        <label><a href="/d2r-ladder-items/jewels-ladder"><img src={jewels} alt="domestico.pl" class="logo-image" width="130%"  /></a></label>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                        <label><a href="/d2r-ladder-items/full-gears-ladder"><img src={gears} alt="domestico.pl" class="logo-image" width="130%"  /></a></label>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                        <label><a href="/d2r-ladder-items/socketable-bases-ladder"><img src={socketable} alt="domestico.pl" class="logo-image" width="130%"  /></a></label>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                        <label><a href="/d2r-ladder-items/keys-organs-ladder"><img src={keysorgan} alt="domestico.pl" class="logo-image" width="130%"  /></a></label>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                        <label><a href="/d2r-ladder-items/full-mercenary-gear"><img src={mercgear} alt="domestico.pl" class="logo-image" width="130%"  /></a></label>
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
