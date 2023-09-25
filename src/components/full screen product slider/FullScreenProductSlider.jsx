import './fullScreenProdcuctSlider.css';
import { useRef } from 'react';
import { FaDownLeftAndUpRightToCenter } from "react-icons/fa6";
import Carousel from 'react-bootstrap/Carousel';
import im1 from "../../assets/images/top trending/single details product/product10A.jpg";
import im2 from "../../assets/images/top trending/single details product/product10B.jpg";
import im3 from "../../assets/images/top trending/single details product/product9A.jpg";
import { OpenModalContext } from '../../allPagesPaths';
import { useContext } from 'react';
import { useEffect } from 'react';

/*======================================*/
/*======================================*/
/*======================================*/

const FullScreenProductSlider = ({data}) => {
    const {pImgArray}= data;

console.log(pImgArray);


    const { openProductSlider, setOpenProductSlider, handleOpenSlider, handleCloseSlider } = useContext(OpenModalContext);

    const closeProductSlider = useRef();

    // close the product details slider
    // const handleCloseProductSlider = () => {
    //     closeProductSlider.current.style.display = "none";
    // }

   

    return (
        <div className='full-screen-product-slider' ref={closeProductSlider}>
            <span className='escape' onClick={handleCloseSlider}>
                <FaDownLeftAndUpRightToCenter />
            </span>
            <Carousel data-bs-theme="dark" className='pr-slider' fade data-bs-interval="5">

            {pImgArray.map((el,i)=>(
                 <Carousel.Item key={i}>
                 <img
                     className="d-block"
                     src={el}
                     alt="First slide"
                 />
             </Carousel.Item>
            ))}





                {/* <Carousel.Item>
                    <img
                        className="d-block"
                        src={im1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={im2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={im3}
                        alt="Third slide"
                    />
                </Carousel.Item> */}
            </Carousel>
        </div>
    )
}

export default FullScreenProductSlider;