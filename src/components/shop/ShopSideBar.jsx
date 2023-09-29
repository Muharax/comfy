import { useEffect } from "react";
import { AllProductsItems } from "../../config/data";
import ShopSideBarSmall from "./ShopSideBarSmall";

/*======================================*/
/*======================================*/
/*======================================*/

const ShopSideBar = (props) => {
    const {
        products,
        setProducts,
        price,
        setPrice,
        handlePriceInput,
        getSingleCategory,
        min,
        max,
        showSmallSideBar,
        handleCloseShowSmallSideBar } = props;

    useEffect(() => {

        //by default make the products sorting by it id
        setProducts([...products.sort((a, b) => { return a.pId - b.pId })]);

        // by default show all products when open shop page
        setPrice(max)

    }, []);

    /*
     - get all [unique product brand] ,in order to draw the input radio ui
     - get all [unique product categroy] ,in order to draw input radio ui
     note:not using [products] just use the [the main array (AllProductsItems)]
    to avoid the category or brand sort with when sort the price
    */
    const brandList = [...new Set(AllProductsItems.map(item => item.pBrand))];

    const categoryList = [...new Set(AllProductsItems.map(item => item.pCategory))];

    // get the percentage value,in order to fill the bg color of input range slider daynamicly based percentage
    let percentage = (price - min) * 100 / (max - min);

    const sliderStyle = {

        // make the background size daynamic based on input value
        backgroundSize: percentage + '%'

    };

    return (
        <>
            <div className="right">
                <form action="">
                    <div className="form-cat-filters">
                        <div className="cat-filter-box">
                            <h3 className='underline-heading'>Categories</h3>
                            <div className="cat-filter-single">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="categories"
                                    id='all-cat'
                                    defaultChecked
                                />
                                <label htmlFor="all-cat" className='main-cat-label'>All Categories</label>
                            </div>
                            {categoryList.map((item, i) => (
                                <div className="cat-filter-single" key={i}>
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        name="categories"
                                        id={item}
                                        defaultChecked={getSingleCategory && getSingleCategory === item ? true : false}
                                    />
                                    <label htmlFor={item}>{item}</label>
                                </div>
                            ))}
                        </div>
                        {/* end cat filter box */}

                        <div className="brands-filter-box">
                            <h3 className='underline-heading'>Brands</h3>
                            <div className="cat-filter-single">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="brands"
                                    id='all-brands'
                                    defaultChecked
                                />
                                <label htmlFor="all-brands" className='main-cat-label'>All Brands</label>
                            </div>
                            {brandList.map((item, i) => (
                                <div className="cat-filter-single" key={i}>
                                    <input type="radio" className="form-check-input" name="brands" id={item} />
                                    <label htmlFor={item}>{item}</label>
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
                                style={sliderStyle}
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

            {/* this samll sidebar it will show when resize the window */}
            <ShopSideBarSmall
                products={products}
                setProducts={setProducts}
                price={price}
                setPrice={setPrice}
                handlePriceInput={handlePriceInput}
                min={min}
                max={max}
                showSmallSideBar={showSmallSideBar}
                handleCloseShowSmallSideBar={handleCloseShowSmallSideBar}
                brandList={brandList}
                categoryList={categoryList}
                percentage={percentage}
                sliderStyle={sliderStyle}
            />
        </>
    )
}

export default ShopSideBar;