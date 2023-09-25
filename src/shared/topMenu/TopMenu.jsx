import './topMenu.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../assets/images/main-logo.png";
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaMagnifyingGlass, FaCartShopping, FaUnlock } from "react-icons/fa6";
import { useEffect, useState, useContext } from 'react';
import { OpenModalContext } from "../../context/OpenModalContext";
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';

/*======================================*/
/*======================================*/
/*======================================*/

const TopMenu = () => {

  const { showCartModal,setShowCartModal, setShowRegisterModal } = useContext(OpenModalContext);

  const { existUser } = useContext(AuthContext);

  const {
    cart , 
        setCart,
        handleClick,
        productsInTable,
        setProducsInTable,
        productCounter,
        setProductCounter,
        isDiseable,
        setIsDesable,
        isBtnEmptyCart,
        setIsBtnEmptyCart,
        handleIncreaseCounter,
        handleDecreaseCounter,
        handleDelte,
        handleDelteAllItems,
        isBodyHidden, setIsBodyHidden} = useContext(CartContext);








  // in order to make active class when navigate pages
  const [url, setUrl] = useState(null);

  // in order to close the menu and go smoothly when click on link inside it
  const [expanded, setExpanded] = useState(false);

  const location = useLocation("/");

  // give active class for link depend on location,and change the overflow of body depend is cart modal show or not
  useEffect(() => {
    // const body = document.querySelector('body');
    // body.style.overflow = isBodyHidden ? 'hidden' : 'visible';
   // setIsBodyHidden(false)

  




    setUrl(location.pathname); 


  }, [location]);



  // console.log("isBodyHidden from top : " + isBodyHidden);
  // console.log("showCartModal from top : " + showCartModal);
 
 
 















  return (
    <div className='topmenu'>
      {/* make at the top of page with fixed-top*/}
      <Navbar expand="lg" className="bg-body-tertiary bg-white fixed-top" expanded={expanded}>
        <Container fluid>
          <Navbar.Brand as={Link} to={"/"}><img src={Logo} width="30"
            height="30" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* make the ul in center of navbar with mx-auto*/}
            <Nav className="mx-auto">
              <Nav.Link as={Link} to={"/"} className={url === "/" ? "active" : ""} onClick={() => setExpanded(false)}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/shop"} className={url === "/shop" ? "active" : ""} onClick={() => setExpanded(false)}>Shop</Nav.Link>
              <Nav.Link as={Link} to={"/about"} className={url === "/about" ? "active" : ""} onClick={() => setExpanded(false)}>About</Nav.Link>
              <Nav.Link as={Link} to={"/contact"} className={url === "/contact" ? "active" : ""} onClick={() => setExpanded(false)}>Contact</Nav.Link>
              <Nav.Link as={Link} to={"/faq"} className={url === "/faq" ? "active" : ""} onClick={() => setExpanded(false)}>FAQ</Nav.Link>
            </Nav>
            <Nav className='hide-on-resize gap-2'>
              <Nav.Link as={Link} to={existUser && "/account/myOrder"} className='register-login'>
                {/* if there is user show icon otherwise show register div */}
                {!existUser && <div><FaUnlock /> <p onClick={() => setShowRegisterModal(true)}>Login / Register</p></div>}
                {existUser && <FaUser />}
              </Nav.Link>
              <Nav.Link as={Link} to={"/search"}><FaMagnifyingGlass /></Nav.Link>
              <Nav.Link href="" className='icon-badge'>
                <FaCartShopping onClick={() => existUser ? setShowCartModal(true) : setShowRegisterModal(true)} />
                <span>{existUser ? cart.length :"0"}</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default TopMenu;