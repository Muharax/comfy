import productimg from "../../assets/images/top trending/zunkelSchwarz-o.jpg";
import { FaSquareMinus, FaSquarePlus, FaRegTrashCan } from "react-icons/fa6";

/*======================================*/
/*======================================*/
/*======================================*/

const SingleProductInCart = () => {
    return (
        <div className="cart-single-product">
                <div className="left">
                    <img src={productimg} alt="" />
                </div>
                <div className="right">
                    <h3>Amp Pendant Light Large</h3>
                    <div className="top-content">
                        <h4 className='mb-0 d-flex align-items-center'>color : <span></span></h4>
                        <div className="cart-counter d-flex align-items-center">
                            <FaSquareMinus />
                            <span>2</span>
                            <FaSquarePlus />
                        </div>
                    </div>
                    <div className="middle-content">
                        <span>$150</span>
                        <h4 className='mb-0'>stock : <span>6</span></h4>
                    </div>
                    <FaRegTrashCan style={{ cursor: "pointer" }} />
                </div>
            </div>
    )
}

export default SingleProductInCart;