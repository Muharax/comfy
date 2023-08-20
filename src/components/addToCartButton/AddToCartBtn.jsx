import './addToCartBtn.css';
import { useEffect, useState } from 'react';
import { FaCartShopping, FaPlus } from "react-icons/fa6";
import { Spinner } from 'react-bootstrap';

/*======================================*/
/*======================================*/
/*======================================*/

const AddToCartBtn = () => {

  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [isSpinnerShow, setIsSpinnerShow] = useState(false);
  const [newTextBtn, setNewTextBtn] = useState(false);

  useEffect(() => {

    let timer;

    if (isBtnClicked) {

      setIsSpinnerShow(true);

      timer = setTimeout(() => {

        setNewTextBtn(true)

      }, 500);

    }

    return () => clearTimeout(timer);

  }, [isBtnClicked])


  const handleAddToCart = () => {
    setIsBtnClicked(true);
  }

  return (
    <div className='add-to-cart-button'>
      <button onClick={handleAddToCart}>
        {!isBtnClicked && <span><FaPlus />add to cart</span>}
        {isBtnClicked & isSpinnerShow & !newTextBtn ? <Spinner animation="border" /> : ""}
        {isBtnClicked & isSpinnerShow & newTextBtn ? <span><FaCartShopping /> in cart</span> : ""}
      </button>
    </div>
  )
}

export default AddToCartBtn;