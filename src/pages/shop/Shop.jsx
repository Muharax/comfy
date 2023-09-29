import './shop.css';
import Container from '../../components/helpers/container/Container';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderCover from '../../components/shared/header cover/HeaderCover';
import AllShopProducts from "../../components/shop/allShopProducts";
import ShopSideBar from '../../components/shop/ShopSideBar';
import { AllProductsItems } from "../../config/data";

/*======================================*/
/*======================================*/
/*======================================*/

const Shop = () => {
  // until now i don't using [context]
  const [products, setProducts] = useState(AllProductsItems);

  const min = Math.min(...products.map(item => item.pPrice));

  const max = Math.max(...products.map(item => item.pPrice));

  const [price, setPrice] = useState("");

  const { pathname } = useLocation();

  const getSingleCategory = pathname?.split("/")[2];

  const getArrayOfSameCategory = products.filter(cat => cat.pCategory === getSingleCategory);

  // get the filter price when change input range slider
  const filterPriceByRange = products.filter(el => el.pPrice >= min && el.pPrice <= Number(price));

  // after get the filter product [with range price input] ,make the filter when move the range slider input
  const handlePriceInput = (e) => {
    setPrice(e.target.value);
  }

  // this for the open close the sidebar in small devices
  const [showSmallSideBar, setShowSmallSideBar] = useState(false);

  const handleShowSmallSideBar = () => {
    setShowSmallSideBar(true);
  }

  const handleCloseShowSmallSideBar = () => {
    setShowSmallSideBar(false);
  }

  /*=========================*/

  return (
    <div className='shop'>
      <HeaderCover headingContent="Shop" />
      <Container>
        <div className="shop-box d-flex gap-4">
          <AllShopProducts
            products={products}
            setProducts={setProducts}
            filterPriceByRange={filterPriceByRange}
            handleShowSmallSideBar={handleShowSmallSideBar}
            getSingleCategory={getSingleCategory}
            getArrayOfSameCategory={getArrayOfSameCategory}
          />

          <ShopSideBar
            products={products}
            setProducts={setProducts}
            price={price}
            setPrice={setPrice}
            handlePriceInput={handlePriceInput}
            min={min}
            max={max}
            showSmallSideBar={showSmallSideBar}
            setShowSmallSideBar={setShowSmallSideBar}
            handleShowSmallSideBar={handleShowSmallSideBar}
            handleCloseShowSmallSideBar={handleCloseShowSmallSideBar}
            getSingleCategory={getSingleCategory}
            getArrayOfSameCategory={getArrayOfSameCategory}
          />

        </div>
        {/* end shop box */}
      </Container>
    </div>
  )
}

export default Shop;