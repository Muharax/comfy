import './homeCategory.css';
import Container from '../../components/helpers/Container';
import { LiaArrowRightSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import Chairs from "../../assets/images/homeCategory/chairs.jpg";
import Decors from "../../assets/images/homeCategory/decors.jpg";
import Lightings from "../../assets/images/homeCategory/lightings.jpg";
import Sofas from "../../assets/images/homeCategory/sofas.jpg";
import Tables from "../../assets/images/homeCategory/tables.jpg";

/*======================================*/
/*======================================*/
/*======================================*/

const HomeCategory = () => {
    return (
        <div className='home-category'>
            <Container>
                <div className="home-category-box">
                    <div className="left">
                        <img src={Chairs} alt="" />
                        <div className="box-desc">
                            <strong>8 products</strong>
                            <h3><Link to="/shop">Chairs</Link></h3>
                            <Link to="/shop" className='shop-now'>Go Shopping<LiaArrowRightSolid /></Link>
                        </div>
                    </div>
                    <div className="right">
                        <div className="top-content">
                            <div className="left">
                                <img src={Lightings} alt="" />
                                <div className="box-desc">
                                    <strong>8 products</strong>
                                    <h3><Link to="/shop">Lighting</Link></h3>
                                    <Link to="/shop" className='shop-now'>Go Shopping<LiaArrowRightSolid /></Link>
                                </div>
                            </div>
                            <div className="right">
                                <img src={Decors} alt="" />
                                <div className="box-desc">
                                    <strong>3 products</strong>
                                    <h3><Link to="/shop">Decor</Link></h3>
                                    <Link to="/shop" className='shop-now'>Go Shopping<LiaArrowRightSolid /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="bottom-content">
                            <div className="left">
                                <img src={Sofas} alt="" />
                                <div className="box-desc">
                                    <strong>3 products</strong>
                                    <h3><Link to="/shop">Sofas</Link></h3>
                                    <Link to="/shop" className='shop-now'>Go Shopping<LiaArrowRightSolid /></Link>
                                </div>
                            </div>
                            <div className="right">
                                <img src={Tables} alt="" />
                                <div className="box-desc">
                                    <strong>3 products</strong>
                                    <h3><Link to="/shop">Tables</Link></h3>
                                    <Link to="/shop" className='shop-now'>Go Shopping<LiaArrowRightSolid /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeCategory;