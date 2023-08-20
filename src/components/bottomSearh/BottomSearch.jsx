import './bottomSearch.css';
import { Link } from 'react-router-dom';
import { FaUserLarge, FaShop, FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";

/*======================================*/
/*======================================*/
/*======================================*/

const BottomSearch = () => {
    return (
        <div className='bottom-search'>
            <div className="search">
                <ul className='ul-custom'>
                    <li><Link to="" className='my_link'><FaUserLarge /></Link></li>
                    <li><Link to="" className='my_link'><FaShop /></Link></li>
                    <li><Link to="" className='my_link'><FaMagnifyingGlass /></Link></li>
                    <li><Link to="" className='my_link icon-badge'><FaCartShopping /><span>2</span></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default BottomSearch;