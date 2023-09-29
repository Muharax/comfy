import { LiaAngleDownSolid } from "react-icons/lia";
import { FaFilter } from "react-icons/fa6";
import SingleProductUi from '../../components/shared/SingleProductUi';

/*======================================*/
/*======================================*/
/*======================================*/

const AllShopProducts = ({
    products,
    setProducts,
    filterPriceByRange,
    handleShowSmallSideBar,
    getSingleCategory,
    getArrayOfSameCategory }) => {

    // Sort products by price
    function sortProductsByPrice(e) {
        if (e.target.value === 'Default') {
            // Sorting products by default id
            setProducts([...products.sort((a, b) => { return a.pId - b.pId })]);
        }

        if (e.target.value === 'lowToHigh') {
            // Sort products price from low to high
            setProducts([...products.sort((a, b) => { return Number(a.pPrice) - Number(b.pPrice) })]);
        }

        if (e.target.value === 'highToLow') {
            // Sort products price from high to low
            setProducts([...products.sort((a, b) => { return Number(b.pPrice) - Number(a.pPrice) })]);
        }
    }

    /*
    after get the sorting products by price [from low to high or high to low],
    make the filter when select option from select
    */
    const handleSelectChange = (e) => {
        sortProductsByPrice(e)
    }

    return (
        <div className="left">
            <div className="top-part">
                <p className="pages-number mb-0">
                    Showing page <span>1</span> of <span>2</span> pages
                </p>

                {/* this btn will show the sidebar section in small devices */}
                <button className="show-sidebar" onClick={handleShowSmallSideBar}><FaFilter /> Filters</button>

                <div className="select-box">
                    <select name="" id="start" onChange={handleSelectChange}>
                        <option value="Default" >Default</option>
                        <option value="lowToHigh">Price, Low to High</option>
                        <option value="highToLow" >Price, High to Low</option>
                    </select>
                    <LiaAngleDownSolid />
                </div>
                {/* select box end */}
            </div>
            <div className="all-shop-products-box">

                {
                    getSingleCategory ?
                        <>
                            {getArrayOfSameCategory?.map((ele, i) => (
                                <SingleProductUi data={ele} key={i} />
                            ))}
                        </>
                        :
                        <>
                            {filterPriceByRange.map((d, i) => (
                                <SingleProductUi data={d} key={i} />
                            ))}
                        </>
                }

                {/* {filterPriceByRange.map((d, i) => (
                    <SingleProductUi data={d} key={i} />
                ))}

                {
                    getArrayOfSameCategory?.map((ele,i)=>(
                        <SingleProductUi data={ele} key={i} />
                    ))
                } */}
            </div>
        </div>
    )
}

export default AllShopProducts;