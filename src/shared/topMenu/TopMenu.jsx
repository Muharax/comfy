import './topMenu.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../assets/images/main-logo.png";
import { Link, useLocation } from 'react-router-dom';
import { FaUserLarge, FaMagnifyingGlass, FaCartShopping, FaUnlock } from "react-icons/fa6";
import { useEffect, useState } from 'react';

/*======================================*/
/*======================================*/
/*======================================*/

const TopMenu = () => {

  const [url, setUrl] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation("/");
  const existUser = true;

  // give active class for link depend on location
  useEffect(() => {

    setUrl(location.pathname);

  }, [location]);

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
              <Nav.Link href="">About</Nav.Link>
              <Nav.Link href="">Contact</Nav.Link>
              <Nav.Link href="">FAQ</Nav.Link>
            </Nav>
            <Nav className='hide-on-resize'>
              <Nav.Link href="https://www.google.com/" className='register-login'>
                {/* if there is user show icon otherwise show register div */}
                {existUser ? <div><FaUnlock /> <p>Login / Register</p></div> : <FaUserLarge />}
              </Nav.Link>
              <Nav.Link href=""><FaMagnifyingGlass /></Nav.Link>
              <Nav.Link href="" className='icon-badge'>
                <FaCartShopping />
                <span>2</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default TopMenu;