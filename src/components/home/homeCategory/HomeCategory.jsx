import './homeCategory.css';
import Container from '../../../components/helpers/container/Container';
import { Link } from 'react-router-dom';
import { LiaArrowRightSolid } from "react-icons/lia";
import { AllProductsItems } from "../../../config/data";
import Chairs from "../../../assets/images/homeCategory/chairs.jpg";
import Decors from "../../../assets/images/homeCategory/decors.jpg";
import Lightings from "../../../assets/images/homeCategory/lightings.jpg";
import Sofas from "../../../assets/images/homeCategory/sofas.jpg";
import Tables from "../../../assets/images/homeCategory/tables.jpg";

/*======================================*/
/*======================================*/
/*======================================*/

const HomeCategory = () => {

    // in order to get the leng of every category daymamicly
    function filterEleLength(ele) {

        const cat = AllProductsItems.filter(d => (d.pCategory === ele)).length;

        return cat

    }

    return (
        <div className='home-category'>
            <Container>
                <div className="home-category-box">
                    <div className="left">
                        <img src={Chairs} alt="" />
                        <div className="box-desc">
                            <strong>
                                {/* put the name of product like [chairs] for example */}
                                {filterEleLength("chairs")}
                                {/* put the length of this product,if leng equal 1 display product otherwise display productssss */}
                                {filterEleLength("chairs") === 1 ? "product" : "products"}
                            </strong>
                            <h3><Link to="/shop/chairs">Chairs</Link></h3>
                            <Link to="/shop/chairs" className='shop-now'>Go Shopping<LiaArrowRightSolid /></Link>
                        </div>
                    </div>
                    {/* end left */}

                    <div className="right">
                        <div className="top-content">
                            <div className="left">
                                <img src={Lightings} alt="" />
                                <div className="box-desc">
                                    <strong>
                                        {filterEleLength("lighting")}
                                        {filterEleLength("lighting") === 1 ? "product" : "products"}
                                    </strong>
                                    <h3><Link to="/shop/lighting">Lighting</Link></h3>
                                    <Link to="/shop/lighting" className='shop-now'>Go Shopping<LiaArrowRightSolid /></Link>
                                </div>
                            </div>
                            <div className="right">
                                <img src={Decors} alt="" />
                                <div className="box-desc">
                                    <strong>
                                        {filterEleLength("decor")}
                                        {filterEleLength("decor") === 1 ? "product" : "products"}
                                    </strong>
                                    <h3><Link to="/shop/decor">Decor</Link></h3>
                                    <Link to="/shop/decor" className='shop-now'>Go Shopping<LiaArrowRightSolid /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="bottom-content">
                            <div className="left">
                                <img src={Sofas} alt="" />
                                <div className="box-desc">
                                    <strong>
                                        {filterEleLength("sofas")}
                                        {filterEleLength("sofas") === 1 ? "product" : "products"}
                                    </strong>
                                    <h3><Link to="/shop/sofas">Sofas</Link></h3>
                                    <Link to="/shop/sofas" className='shop-now'>Go Shopping<LiaArrowRightSolid /></Link>
                                </div>
                            </div>
                            <div className="right">
                                <img src={Tables} alt="" />
                                <div className="box-desc">
                                    <strong>
                                        {filterEleLength("tables")}
                                        {filterEleLength("tables") === 1 ? "product" : "products"}
                                    </strong>
                                    <h3><Link to="/shop/tables">Tables</Link></h3>
                                    <Link to="/shop/tables" className='shop-now'>Go Shopping<LiaArrowRightSolid /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end right */}
                </div>
                {/* end home category box */}
            </Container>
        </div>
    )
}

export default HomeCategory;