import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import logo from './logo.png'
//import diablo from './diablo2.png'
//<img src={diablo} alt="diablo" class="diablo-image" width="140px" />

function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
        <Navbar expand="xl" bg="dark">
          <Container>
            <LinkContainer to="">
              <Navbar.Brand>
                <img src={logo} alt="d2fast.com" class="logo-image" width="250px" />
              </Navbar.Brand>
              
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse  expand="xxl" id="basic-navbar-nav">
              
              
            <SearchBox />&nbsp;&nbsp;

              <Nav className="ml-auto">
              <NavDropdown title='Items 🗡️' id='products'>
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


   
              &nbsp;<LinkContainer to="/cart">
                <Nav.Link><i className="fas fa-shopping-cart"></i><b class="cart-text">&nbsp;Cart</b></Nav.Link>
              </LinkContainer>
              &nbsp;
              <LinkContainer to="/contact">
                <Nav.Link><i class="fa-solid fa-comment-dots"></i><b class="cart-text">&nbsp;Cart</b></Nav.Link>
              </LinkContainer>


              &nbsp;
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to ='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                </NavDropdown>

              ): (

                <LinkContainer to="/profile">
                  <Nav.Link><i class="fa fa-sign-in" aria-hidden="true"></i><b class="log">👤LOG IN / REGISTER</b></Nav.Link>
               </LinkContainer>
              )}
              &nbsp;
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to ='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to ='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  
                  <LinkContainer to ='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>         
                </NavDropdown>
              )}

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </header>
  )
}

export default Header

