/*
this is the list of sindgle product of producsts that use already chose,the data will display inside the acccount page 
inside [view oreder accordion]
*/
const UserProductSingle = ({ data: { pName, pInitialImage, pBrand, pPrice } }) => {
    return (
        <div className="user-product-single d-flex justify-content-between">
            <div className="left d-flex gap-4">
                <img src={pInitialImage} alt="" />
                <div>
                    <h5 className='text-capitalize'>{pName}</h5>
                    <p className='text-capitalize'>{pBrand} <span className='pr-color'></span></p>
                    <p>Qty <span>2</span></p>
                </div>
            </div>
            <div className="right">
                <span className='price-boxed'>${pPrice}</span>
            </div>
        </div>
    )
}

export default UserProductSingle;