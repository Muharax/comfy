import './bottomSearch.css';
import { Link } from 'react-router-dom';
import { FaUser, FaShop, FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";
import { OpenModalContext } from "../../context/OpenModalContext";
import { useContext } from 'react';

/*======================================*/
/*======================================*/
/*======================================*/

const BottomSearch = () => {

    const { existUser, setShowCartModal, showCartModal, setShowRegisterModal } = useContext(OpenModalContext);

    return (
        <div className='bottom-search'>
            <div className="search">
                <ul className='ul-custom'>
                    <li>
                        <Link to={existUser && "/account"} className='my_link'>
                            <FaUser onClick={() => setShowRegisterModal(true)} />
                        </Link>
                    </li>
                    <li><Link to="/shop" className='my_link'><FaShop /></Link></li>
                    <li><Link to="/search" className='my_link'><FaMagnifyingGlass /></Link></li>
                    <li>
                        <Link className='my_link icon-badge'>
                            <FaCartShopping onClick={() => existUser ? setShowCartModal(true) : setShowRegisterModal(true)} /><span>2</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BottomSearch;