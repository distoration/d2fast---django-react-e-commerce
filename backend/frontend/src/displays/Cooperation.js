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
        <div class='container-fluid'>
        <div class="card">
                      <div class="card col-6 col-md-12">
                              <div class="card-content">
                                
                                  <div class="card-title">
                                  <h1 class="who-text">BECOME OUR VIP CUSTOMER🤝</h1>&nbsp;&nbsp;&nbsp;
                                          
                                  </div>
                                  <p><small> 
                                        <h3>Why should you be our regular customer?</h3>
                                            On our telegram group regularly hold various raffles for our customers, you can even win the highest runes in the game! Our goal is to create a great community of fans of the game diablo 2. We do not focus only on the sale of game items, but also the organization of various events, tournaments, leagues related to the game. 


                                        <br></br><br></br><br></br>
                                        <h3>We create our own community</h3>
                                        We will create a mule account to hold the item(s) you ordered. The login and password of this account will be e-mailed to the e-mail address that you’ve provided at checkout.

                                        After you have received the email, it is your responsibility to remove the items from the mule account before it expires. Mules expire 10 days after creation if nobody has logged into them. It is important that you get your items within that period of time.

                                        <br></br><br></br><br></br>
                                        <h3>How to do if i need help with transfer items?</h3>
                                        If you need help with transfer items from delivered account feel free to email us or msg via facebook with game name and password

                                        <br></br><br></br><br></br>
                                        <h3>Are your items unperm (duped)?</h3>
                                        All of our items are perm and legit. Our items will never vanish.

                                        <br></br><br></br><br></br>
                                        <h3>What is Low order Fee?</h3>
                                        Low order fee is added due to paypals fee for low orders, we wouldnt get almost any cash for orders under 1$, all of it would be taken by paypal. The limit is 1$, if you cross it low order fee wont be added.

                                        <br></br><br></br><br></br>
                                        <h3>What payment methods do you accept?</h3>
                                        We accept payments via:
                                        Paypal
                                        Credit/Debet Card via Paypal
                                        Cryptocurrencies (Bitcoin, Ethereum, Litecoin)
                                    </small></p>

                              </div>
                          </div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <p class="bdr"></p>

                      <div class="card-footer row m-0">
                      </div>
            
                  </div>
              </div>
        </div>
  )
}

export default Mainscreen
