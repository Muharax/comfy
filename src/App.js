// use HashRouter NOT BrouwserRouter,coz the project upload on github
import { HashRouter, Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {
  HomePage,
  Shop,
  About,
  Contact,
  Faq,
  Account,
  Search,
  TopMenu,
  FooterSection,
  BottomSearch,
  ScrollTop,
  OpenModalContext,
  ModalRegister,
  CartModal
} from "./allPagesPaths";
import { AuthContext } from "./context/AuthContext";
import AlertMsg from "./components/alertMsg/AlertMsg";

/*======================================*/
/*======================================*/
/*======================================*/

function App() {

  const { showCartModal } = useContext(OpenModalContext);
  const { isRegisterSubmit, existUser, isLoginSubmit, isContactFormSubmit, isSubmitBtnClicked, x, setX, isSubmitSpinnerShow, setIsSubmitSpinnerShow } = useContext(AuthContext);
  const [showBarIcon, setShowBarIcon] = useState(false);





  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 991) {
        //if the window less than 768,show the icon,otherwise hide it
        setShowBarIcon(true);
      } else {
        setShowBarIcon(false);
      }
    };

    window.addEventListener("resize", handleResize);

  }, []);

  return (
    <div className="App">
      <HashRouter>
        <TopMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/account/*" element={<Account />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <ScrollTop />
        <FooterSection />
        {!existUser && <ModalRegister />}
        {showCartModal && <CartModal />}
        {/* if showBarIcon is true that mean we resize the window,and show the BottomSearch comp */}
        {showBarIcon && <BottomSearch />}

        {/* show an alert success msg when registration is done */}
        {isRegisterSubmit && <AlertMsg contentMsg="Register submitted successfully!" />}
        {/* 
        1 - in case the login btn clicked , but email and password fields NOOOT MATCHING ,
          show [Email or Password not correct.Please try again.]

        2 - in case the login btn clicked and the field ARE MATHCHING ,show [Login successfully!]
        */}
        {isLoginSubmit && existUser ? <AlertMsg contentMsg="Login successfully!" /> : ""}
        {isLoginSubmit && !existUser ? <AlertMsg contentMsg="Email or Password not correct.Please try again." /> : ""}

        {/* show success msg when user fill the contact form successfuly */}
        {x && <AlertMsg contentMsg="Thanks for contacting us.we'll get back to you as soon as possible." />}

      </HashRouter>
    </div>
  );
}

export default App;
