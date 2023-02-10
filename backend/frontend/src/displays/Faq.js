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
                      <div class="heading text-center"> 
                          <div class="head1">Frequently asked questions (FAQ) 🤔❓</div>
                          <p class="bdr"></p>
                      </div>
                      <div class="card-body">
                          <div class="row m-5 pt-0">
                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-truck fa-3x"></i>
                                      <div class="card-title">
                                         DARMOWA DOSTAWA
                                      </div>
                                      <p><small>Na każde zamówienie od <b>199zł</b> do <b>30kg</b> wysyłka jest darmowa.</small></p>
                                    
                                  </div>
                              </div>

                              
                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-gift fa-3x"></i>
                                      <div class="card-title">
                                          GRATISY
                                          
                                      </div>
                                      <p><small>Na każde zamówienie <b>od 100 zł</b> przysługuje prezent od firmy.</small></p>

                                  </div>
                              </div>
                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-handshake fa-3x"></i>
                                      <div class="card-title">
                                          ODBIÓR OSOBISTY JEST MOŻLIWY
                                      </div>
                                      <p><small>Prosimy wcześniej o informację o odbiorze.</small></p>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-unlock fa-3x"></i>
                                      <div class="card-title">
                                          GODZINY PRACY FIRMY
                                      </div>
                                      <p><small> godziny otwarcia naszej firmy: <b>10:00 - 17:00</b></small></p>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-gem fa-3x"></i>
                                      <div class="card-title">
                                         ZBIERAJ PUNKTY
                                      </div>
                                      <p><small>Za każdy zakup dostajesz różną ilość punktów, za które możesz wymieniać produkty w naszym sklepie.</small></p>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-bank fa-3x"></i>
                                      <div class="card-title">
                                          NASZE KONTO BANKOWE:
                                      </div>
                                      <p><small>10 1050 0099 7603 1234 5678 9123</small></p>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-user fa-3x"></i>
                                      <div class="card-title">
                                          ZAREJESTRUJ SIĘ I RÓB ZAKUPY
                                      </div>
                                      <p><small>Aby zrobić zakupy w naszym sklepie musisz się zarejestrować.</small></p>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-key fa-3x"></i>
                                      <div class="card-title">
                                          JEŚLI ZAPOMNIAŁEŚ HASŁA
                                      </div>
                                      <p><small>Jeśli zapomniałeś hasła do swojego konta, przy okienku logowania znajdziesz "zapomniałem hasła".</small></p>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-hourglass fa-3x"></i>
                                      <div class="card-title">
                                          CZAS REALIZACJI ZAMÓWIENIA
                                      </div>
                                      <p><small>Wysyłka w naszym sklepie wciągu 2 dni roboczych.</small></p>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-dollar fa-3x"></i>
                                      <div class="card-title">
                                          MINIMALNA KWOTA ZAMÓWIENIA
                                      </div>
                                      <p><small>W naszym sklepie możesz kupić nawet jeden produkt, ale pamiętaj, że darmowa wysyłka zaczyna się od <b>199zł</b>.</small></p>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-exchange fa-3x"></i>
                                      <div class="card-title">
                                          REKLAMACJE
                                      </div>
                                      <p><small>Wszystkie informacje na temat reklamacji znajdziesz poniżej:</small></p>
                                      <div class="learn-more">
                                          <p>
                                              <small>
                                                   Pokaż więcej
                                                  <label><i class="fas fa-angle-right"></i></label>
                                              </small>
                                          </p>
                                      </div>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-share-alt fa-3x"></i>
                                      <div class="card-title">
                                          NASZE SOCIAL MEDIA:<br />
                                          
                                        </div>
                                        <p><small>Skontaktuj się z nami na Facebooku czy innych social mediach!</small></p>
                                        <div class="learn-more">
                                                <p>
                                                <p>
                                                    <label class="footer-right">
                                                      <a href="https://www.facebook.com/domesticopl/"><i class="fab fa-instagram"></i></a>&nbsp;&nbsp;&nbsp;
                                                      <a href="https://www.facebook.com/domesticopl/"><i class="fab fa-facebook-square"></i></a>&nbsp;&nbsp;&nbsp;
                                                      <a href="https://www.facebook.com/domesticopl/"><i class="fab fa-linkedin"></i></a>&nbsp;&nbsp;&nbsp;
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
                                      <i class="fas fa-scroll fa-3x"></i>
                                      <div class="card-title">
                                          REGULAMIN SKLEPU
                                      </div>
                                      <p><small>Poznaj regulamin naszego sklepu internetowego.</small></p>
                                      <div class="learn-more">
                                          <p>
                                              <small>
                                                   Pokaż regulamin
                                                  <label><i class="fas fa-angle-right"></i></label>
                                              </small>
                                          </p>
                                      </div>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-house fa-3x"></i>
                                      <div class="card-title">
                                          INFORMACJE O FIRMIE
                                      </div>
                                      <p><small>Wszystkie informacje o naszej firmie znajdziesz poniżej:</small></p>
                                      <div class="learn-more">
                                          <p>
                                              <small>
                                                   Pokaż więcej
                                                  <label><i class="fas fa-angle-right"></i></label>
                                              </small>
                                          </p>
                                      </div>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-credit-card  fa-3x"></i>
                                      <div class="card-title">
                                          METODY PŁATNOŚCI
                                      </div>
                                      <p><small>Zapłaty za zakupiony towar można dokonać na wiele sposobów.</small></p>
                                      <div class="learn-more">
                                          <p>
                                              <small>
                                                   Pokaż więcej
                                                  <label><i class="fas fa-angle-right"></i></label>
                                              </small>
                                          </p>
                                      </div>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-commenting fa-3x"></i>
                                      <div class="card-title">
                                          NIE BÓJ SIĘ PYTAĆ!
                                      </div>
                                      <p><small>Jeśli nie ma na liście Twojego zapytania, nie bój się zadzwonić lub napisać!</small></p>
                                      <div class="learn-more">
                                          <p>
                                              <small>
                                                   Kontakt z firmą
                                                  <label><i class="fas fa-angle-right"></i></label>
                                              </small>
                                          </p>
                                      </div>
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
