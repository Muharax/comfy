import { Link } from "react-router-dom";
import AddToCartBtn from "../addToCartButton/AddToCartBtn";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../allPagesPaths";

/*======================================*/
/*======================================*/
/*======================================*/


const SingleProductUi = ({ data }) => {

    const {
        cart,
        setCart,
        handleAddTocart,
        isDiseable,
        setIsDesable,
        isBtnEmptyCart,
        setIsBtnEmptyCart,
        handleIncreaseCounter,
        handleDecreaseCounter,

        handleDelteAllItems,
        isBodyHidden,
        setIsBodyHidden,
        total,

        showConfirmDelete,
        setShowConfirmDelete,
        handleShowConfirmDelete,
        handleCloseConfirmDelete,
        handleClickDelte,
        handleDelte } = useContext(CartContext);


        const {existUser} = useContext(AuthContext);



    // here we distructring the all ele from data
    const { pId, pName, pInitialImage, pHoverImage, pCategory, pBrand, pPrice, pSalePrice, outOfStock } = data;

    // make a variable that wil calculate daynmicly the sale price from main price 
    const netPriceAfterSale = (pPrice - (pPrice * (pSalePrice / 100))).toFixed(2);



    return (
        <div className="single">
            <div className="image-hover">
                <div className="image-hover-top">
                    {outOfStock && <span className="out-stock">out of stock</span>}
                    {pSalePrice && <span className="out-stock">-{pSalePrice}%</span>}
                    {/*  <Link to={existUser && `/product-details/${pId}`}> */}
                    <Link to={`/product-details/${pId}`}>
                        <img src={pInitialImage} alt="" />
                        <img src={pHoverImage} alt="" />
                    </Link>
                    {!outOfStock && <AddToCartBtn data={data} handleAddTocart={handleAddTocart} />}
                </div>
                <div className="single-desc">
                    <h4>
                        <Link to={`/product-details/${pId}`} className='my_link'>{pName}</Link>
                    </h4>
                    <div className="price">
                        {pSalePrice ? <><span>${netPriceAfterSale}</span><span className="lineTrough">${pPrice}</span></> : <span>${pPrice}</span>}
                    </div>
                    <div className="category-and-brand">
                        <span>{pCategory}, </span><span>{pBrand}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProductUi;