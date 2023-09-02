import './cartModal.css';
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import SingleProductInCart from './SingleProductInCart';
import { useContext, useEffect } from 'react';
import { OpenModalContext } from "../../context/OpenModalContext";

/*======================================*/
/*======================================*/
/*======================================*/

const CartModal = () => {

    const { handleCloseCartModal, setShowCartModal } = useContext(OpenModalContext);

    useEffect(() => {

        document.body.style.overflow = "hidden";
    }, []);

    return (
        <div className='cart-modal'>
            <div className="cart-modal-box">
                <div className="cart-title">
                    <h4 className='mb-0'>SHOPPING CART</h4>
                    {/* close cart modal */}
                    <FaXmark onClick={() => setShowCartModal(false)} />
                </div>
                <div className="cart-products-content">
                    <SingleProductInCart />
                    <SingleProductInCart />
                    <SingleProductInCart />
                    <SingleProductInCart />
                    <SingleProductInCart />
                    <SingleProductInCart />
                    <SingleProductInCart />
                    <SingleProductInCart />
                    <SingleProductInCart />
                    <SingleProductInCart />
                    <SingleProductInCart />
                </div>
                {/* cart poroducts content end */}

                <div className="cart-box-footer">
                    <div className="total-price">
                        <h4 className='mb-0'>Total Price</h4>
                        <span>$430</span>
                    </div>
                    <Link className='checkout'>Checkout</Link>
                    <Link>View cart</Link>
                </div>
                {/* cart box footer end */}
            </div>
        </div>
    )
}

export default CartModal;