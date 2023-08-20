import { Link } from "react-router-dom";
import AddToCartBtn from "../addToCartButton/AddToCartBtn";

/*======================================*/
/*======================================*/
/*======================================*/

const SingleTrendingProduct = ({ data: { pId, pName, pInitialImage, pHoverImage, pPrice, pSalePrice, outOfStock } }) => {

    // make a variable that wil calculate daynmicly the sale price from main price 
    const netPriceAfterSale = (pPrice - (pPrice * (pSalePrice / 100))).toFixed(2);

    console.log(typeof (netPriceAfterSale));

    return (
        <div className="single">
            <div className="image-hover">
                <div className="image-hover-top">
                    {outOfStock && <span className="out-stock">out of stock</span>}
                    {pSalePrice && <span className="out-stock">-{pSalePrice}%</span>}
                    <Link to="/shop">
                        <img src={pInitialImage} alt="" />
                        <img src={pHoverImage} alt="" />
                    </Link>
                    {!outOfStock && <AddToCartBtn />}

                </div>
                <div className="single-desc">
                    <h4>
                        <Link className='my_link'>{pName}</Link>
                    </h4>
                    <div className="price">
                        {pSalePrice ? <><span>${netPriceAfterSale}</span><span className="lineTrough">${pPrice}</span></> : <span>${pPrice}</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleTrendingProduct;