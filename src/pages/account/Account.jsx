import './account.css';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { OpenModalContext } from '../../context/OpenModalContext';
import OrderAcoordion from '../../components/OrderAcoordion';
import FormAccount from '../../components/FormAccount';
import FormUpdatePass from '../../components/FormUpdatePass';

/*======================================*/
/*======================================*/
/*======================================*/

const Account = () => {

  // this is my varible for testing
  const therIsProduct = true;

  const location = useLocation();
  const navigate = useNavigate();

  const getLinkPath = location.pathname.split("/")[2];


  const { existUser, setExitstUser } = useContext(AuthContext);

  const { setShowRegisterModal } = useContext(OpenModalContext);

  let getUserEmail = localStorage.getItem('user') !== null && (JSON.parse(localStorage.getItem("user"))).r_email;

  let getUserName = localStorage.getItem('user') !== null && (JSON.parse(localStorage.getItem("user"))).r_username;

  const handleLogout = (e) => { 

    setExitstUser(false);

    navigate("/", { replace: true });

    setShowRegisterModal(false);

  }

  return (
    <div className='account-main'>
      <div className="account-main-box">
        <div className="account-user-info">
          <div>
            <h2>Account</h2>
            <p><span className='text-capitalize'>{getUserName}</span> ,<span>{getUserEmail}</span></p>
          </div>
          <button onClick={handleLogout}>logout</button>
        </div>
        <div className="account-tabs">

          <ul className="account-link-lists list-unstyled m-0 d-flex">
            <li><Link to="/account/myOrder" className={getLinkPath === "myOrder" ? "active" : ""}>My Order</Link></li>
            <li><Link to="/account/accountInfo" className={getLinkPath === "accountInfo" ? "active" : ""}>Account info</Link></li>
            <li><Link to="/account/changePassword" className={getLinkPath === "changePassword" ? "active" : ""}>Change password</Link></li>
          </ul>
          <Routes>
            <Route path="myOrder" element={<OrderAcoordion />} />
            <Route path="accountInfo" element={<FormAccount />} />
            <Route path="changePassword" element={<FormUpdatePass />} />
          </Routes>
        </div>
        {/* end account tabs */}
      </div>
    </div>
  )
}

export default Account;