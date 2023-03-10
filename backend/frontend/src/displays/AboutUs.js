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
                                  <h1 class="who-text">KIM JESTE艢MY? 馃檪</h1>&nbsp;&nbsp;&nbsp;
                                          
                                  </div>
                                  <p><small>Sklep chemii importowanej <b class="domestico">DOMESTICO</b> to miejsce z niezwykle bogat膮 ofert膮 handlow膮. W naszym asortymencie odnajdziecie Pa艅stwo produkty zwi膮zane z chemi膮 gospodarcz膮 oraz kosmetykami, kt贸re sprowadzamy z zagranicy tylko od zaufanych producent贸w wiod膮cych na rynku marek. Nasza hurtownia skupia si臋 na imporcie towar贸w z kraj贸w Europy Zachodniej.

                                            Pocz膮tkowo produkty sprowadzali艣my wy艂膮cznie z Niemiec, natomiast wraz z rozwojem i poszerzaniem si臋 grona naszych klient贸w rozwin臋li艣my ofert臋 handlow膮. Aktualnie artyku艂y chemiczne dla gospodarstwa domowego oraz kosmetyki sprowadzamy r贸wnie偶 z Anglii, Belgii oraz Holandii. W naszym bogatym asortymencie posiadamy produkty takich wiod膮cych marek jak: Ariel, Persil, Vizir, Lenor, Softlan, Nivea, Rexona oraz wiele innych. W naszej ofercie odnajd膮 Pa艅stwo proszki do prania, p艂yny do p艂ukania, 艣rodki do mycia naczy艅, pod艂贸g oraz okien, ko艅cz膮c na kosmetykach piel臋gnacyjnych takich jak szampony, od偶ywki oraz 偶ele do mycia cia艂a.

                                            Na rynku istniejemy ju偶 wiele lat, dlatego te偶 posiadamy kontakty do zaufanych producent贸w i dystrybutor贸w. Jeste艣my rzeteln膮 i uczciw膮 firm膮 a nasze produkty pochodz膮 zawsze z pewnego 藕r贸d艂a. Najwa偶niejsza jest dla nas obs艂uga klienta, skuteczno艣膰 oraz najwy偶sza jako艣膰, a to wszystko w atrakcyjnej, konkurencyjnej cenie. Posiadamy grono sta艂ych i zadowolonych ze wsp贸艂pracy z nasz膮 hurtowni膮 klient贸w.

                                            Serdecznie zapraszamy r贸wnie偶 Pa艅stwa do owocnych zakup贸w!
                                            
                                    </small></p>

                              </div>
                          </div>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <p class="bdr"></p>
                      <div class="card-body">
                          <div class="row m-5 pt-0">
                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-truck fa-3x"></i>
                                      <div class="card-title">
                                         DARMOWA DOSTAWA
                                      </div>
                                      <p><small>Na ka偶de zam贸wienie od <b>199z艂</b> do <b>30kg</b> wysy艂ka jest darmowa.</small></p>
                                    
                                  </div>
                              </div>

                              
                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-gift fa-3x"></i>
                                      <div class="card-title">
                                          GRATISY
                                          
                                      </div>
                                      <p><small>Na ka偶de zam贸wienie <b>od 100 z艂</b> przys艂uguje prezent od firmy.</small></p>

                                  </div>
                              </div>
                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-handshake fa-3x"></i>
                                      <div class="card-title">
                                          ODBI脫R OSOBISTY JEST MO呕LIWY
                                      </div>
                                      <p><small>Prosimy wcze艣niej o informacj臋 o odbiorze.</small></p>
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
                                      <p><small>Za ka偶dy zakup dostajesz r贸偶n膮 ilo艣膰 punkt贸w, za kt贸re mo偶esz wymienia膰 produkty w naszym sklepie.</small></p>
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
                                          ZAREJESTRUJ SI臉 I R脫B ZAKUPY
                                      </div>
                                      <p><small>Aby zrobi膰 zakupy w naszym sklepie musisz si臋 zarejestrowa膰.</small></p>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-key fa-3x"></i>
                                      <div class="card-title">
                                          JE艢LI ZAPOMNIA艁E艢 HAS艁A
                                      </div>
                                      <p><small>Je艣li zapomnia艂e艣 has艂a do swojego konta, przy okienku logowania znajdziesz "zapomnia艂em has艂a".</small></p>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-hourglass fa-3x"></i>
                                      <div class="card-title">
                                          CZAS REALIZACJI ZAM脫WIENIA
                                      </div>
                                      <p><small>Wysy艂ka w naszym sklepie wci膮gu 2 dni roboczych.</small></p>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-dollar fa-3x"></i>
                                      <div class="card-title">
                                          MINIMALNA KWOTA ZAM脫WIENIA
                                      </div>
                                      <p><small>W naszym sklepie mo偶esz kupi膰 nawet jeden produkt, ale pami臋taj, 偶e darmowa wysy艂ka zaczyna si臋 od <b>199z艂</b>.</small></p>
                                  </div>
                              </div>

                              <div class="card col-12 col-md-3">
                                  <div class="card-content">
                                      <i class="fas fa-exchange fa-3x"></i>
                                      <div class="card-title">
                                          REKLAMACJE
                                      </div>
                                      <p><small>Wszystkie informacje na temat reklamacji znajdziesz poni偶ej:</small></p>
                                      <div class="learn-more">
                                          <p>
                                              <small>
                                                   Poka偶 wi臋cej
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
                                        <p><small>Skontaktuj si臋 z nami na Facebooku czy innych social mediach!</small></p>
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
