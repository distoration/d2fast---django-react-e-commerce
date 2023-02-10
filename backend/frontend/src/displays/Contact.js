import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router'



import { Container, Row, Col } from 'react-bootstrap'
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




        <div class='container-fluid'>
                  <div class="card">
                      <div class="heading text-center"> 
                          <div class="head2">Contact Us ✉️</div>
                          <p class="bdr"></p>
                      </div>
                      <div class="card-body">
                          <div class="row m-5 pt-0">
                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                    <a href="https://telegram.me/PatrykSza"><i class="fab fa-telegram fa-3x" aria-hidden="true"></i></a>
                                      <div class="card-title">
                                         Contact us on Telegram

                                      </div>
                                      <p><small>Do you have a question? Text us on <b>Telegram!</b></small></p>
                                      <div class="learn-more">
                                            <p>
                                                <small>
                                                    <a 
                                                        href="https://telegram.me/PatrykSza">        
                                                        <i 
                                                            class="fab fa-telegram fa-1x" 
                                                            aria-hidden="true">
            
                                                        </i>

                                                        <b 
                                                            class='telegram-contact'>
                                                            &nbsp;
                                                            Telegram
                                                        </b>
                                                    </a>
                                                </small>
                                            </p>
                                        </div>
                                  </div>
                              </div>

                              
                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="far fa-envelope fa-3x"></i>
                                      <div class="card-title">
                                          Send to us an email
                                          
                                      </div>
                                      <p><small>If you have any question just send us an email!</small></p>
                                      <div class="learn-more">
                                          <p>
                                              <small>
                                                    <a class="far fa-envelope" href="mailto:contact@charsid2.com"></a> contact@charsid2.com

                                              </small>
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-share-alt fa-3x"></i>
                                      <div class="card-title">
                                        Our Social Media:<br />
                                          
                                        </div>
                                        <p><small>Get in touch with us on Facebook or other social media!</small></p>
                                        <div class="learn-more">
                                                <p>
                                                <p>
                                                    <label class="footer-right">
                                                      <a href="https://www.facebook.com/domesticopl/"><i class="fab fa-instagram"></i></a>&nbsp;&nbsp;&nbsp;
                                                      <a href="https://www.facebook.com/d2fast.com.shop/"><i class="fab fa-facebook-square"></i></a>&nbsp;&nbsp;&nbsp;
                                                      <a href="https://www.facebook.com/domesticopl/"><i class="fab fa-youtube-square"></i></a>&nbsp;&nbsp;&nbsp;
                                                      <a href="https://www.facebook.com/domesticopl/"><i class="fa-brands fa-tiktok"></i></a>&nbsp;&nbsp;
                                                  </label>
                                              </p>
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                    <i class="fas fa-moon fa-3x" aria-hidden="true"></i>

                                      <div class="card-title">
                                         You are welcome to contact us at any time<br />
                                          
                                        </div>
                                        <p><small>We try to respond to messages at any time of the day as quickly as possible.</small></p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="card-footer row m-0">
                      </div>
            
                  </div>
              </div>
        </div>
  )
}

export default Mainscreen
