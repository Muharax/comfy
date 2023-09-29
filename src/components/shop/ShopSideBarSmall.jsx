import Modal from 'react-bootstrap/Modal';
import { FaXmark } from "react-icons/fa6";

/*======================================*/
/*======================================*/
/*======================================*/

const ShopSideBarSmall = (props) => {

  const {
    showSmallSideBar,
    handleCloseShowSmallSideBar,
    price,
    handlePriceInput,
    min,
    max,
    brandList,
    categoryList
  } = props

  // const [showSmallSideBar, setShowSmallSideBar] = useState(false);

  // const handleShowSmallSideBar = () => setShowSmallSideBar(true);
  // const handleCloseShowSmallSideBar = () => setShowSmallSideBar(false);  

  return (
    <>
      <div className="shop-sidebar-small">
        <Modal
          show={showSmallSideBar}
          onHide={handleCloseShowSmallSideBar}
          className='small-sidebar-modal'
          backdrop="static"
        >
          <div className="top-heading-title d-flex align-items-center justify-content-between text-white p-3 bg-dark">
            <h3 className='mb-0'>Filters</h3>
            <span onClick={handleCloseShowSmallSideBar}>
              <FaXmark />
            </span>
          </div>
          <Modal.Body>
            <div className="right">
              <form action="">
                <div className="form-cat-filters">
                  <div className="cat-filter-box">
                    <h3 className='underline-heading'>Categories</h3>
                    <div className="cat-filter-single">
                      {/* 
                          we make id={`sm-${item}`} in order we have [2 form] with input radios
                          first form will display in big screen , and the second from will display in [small devices]
                          here we make sperate [label and input radio] in order to prevent the conflict between the
                          2 forms
                          here id={`sm-${item}`} and htmlFor={`sm-${item}`}  mean like this [id = sm-decor ,htmlFor= htmlFor ] for example
                        */}
                      <input type="radio" className="form-check-input" name="categories" id='sm-all-cat' defaultChecked />
                      <label htmlFor="sm-all-cat" className='main-cat-label'>All Categories</label>
                    </div>
                    {categoryList.map((item, i) => (
                      <div className="cat-filter-single" key={i}>
                        <input type="radio" className="form-check-input" name="categories" id={`sm-${item}`} />
                        <label htmlFor={`sm-${item}`}>{item}</label>
                      </div>
                    ))}
                  </div>
                  {/* end cat filter box */}

                  <div className="brands-filter-box">
                    <h3 className='underline-heading'>Brands</h3>
                    <div className="cat-filter-single">
                      <input type="radio" className="form-check-input" name="brands" id='sm-all-brands' defaultChecked />
                      <label htmlFor="sm-all-brands" className='main-cat-label'>All Brands</label>
                    </div>
                    {brandList.map((item, i) => (
                      <div className="cat-filter-single" key={i}>
                        <input type="radio" className="form-check-input" name="brands" id={`sm-${item}`} />
                        <label htmlFor={`sm-${item}`}>{item}</label>
                      </div>
                    ))}
                  </div>
                  {/* end brands filter bod*/}

                  <div className="brands-filter-box">
                    <h3 className='underline-heading'>Price</h3>
                    <input
                      type="range"
                      defaultValue={max}
                      onChange={handlePriceInput}
                      min={min}
                      max={max}
                    />
                    <div className="range-price-value">
                      <span>{min}$</span>
                      <span>{price}$</span>
                      <span>{max}$</span>
                    </div>
                  </div>
                  {/* end price filter bod*/}

                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  )
}

export default ShopSideBarSmall;