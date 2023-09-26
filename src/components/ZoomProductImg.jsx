import { useContext, useEffect, useState } from "react";
import { OpenModalContext } from "../allPagesPaths";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";

/*======================================*/
/*======================================*/
/*======================================*/

const ZoomProductImg = (props) => {

    const {
        getSingleProductToDrawDetails,
        currentImageURL,
        setcurrentImageURL,
        active,
        setActive,
        itemsEls, id ,isMobile} = props;

    const { openProductSlider, handleOpenSlider } = useContext(OpenModalContext);

    // const [isMobile, setIsMobile] = useState(false);

    // useEffect(() => {

    //     if (window.innerWidth < 575.98) {

    //         setIsMobile(true);

    //     } else {

    //         setIsMobile(false);

    //     }

    // }, []);

    /*
    if the pImgArray have [1 img] make the img [width and height]  equal 50% 
    otherwise divide the full [width and height] and divide on the number of imgs inside every product
    */
    let divWidth = getSingleProductToDrawDetails.pImgArray.length === 1 ? '50%' : 100 / getSingleProductToDrawDetails.pImgArray.length + "%";
    let divHeight = getSingleProductToDrawDetails.pImgArray.length === 1 ? '50%' : 100 / getSingleProductToDrawDetails.pImgArray.length + "%";

    return (
        <div className="left d-flex gap-3 justify-content-between">
            <div className="imgs-beside">
                {/* draw the img based on number of imgs for every single product */}
                {getSingleProductToDrawDetails.pImgArray.map((x, i) =>
                (
                    <div
                        key={i}
                        id={i}
                        className={active === i ? " active" : ""}
                        // if is mobile , [put daynamic width] and height,otherwise [put static] width and height
                        style={{ width: isMobile ? divWidth : "120px", height: isMobile ? divHeight : "120px" }}
                    >
                        <img
                            src={x}
                            alt=""
                            id={i}
                            className='my-img'
                            onClick={e => {
                                setcurrentImageURL(e.target.src);
                                setActive(i)
                            }}
                            ref={(element) => itemsEls.current.push(element)}
                        />
                    </div>
                ))}
            </div>
            <div className="master-img">
                <img src={currentImageURL} alt="" />
                <span onClick={handleOpenSlider}><FaMagnifyingGlassPlus /></span>
            </div>
        </div>
    )
}

export default ZoomProductImg;