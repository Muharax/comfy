import { useState } from 'react'
import UserProductSingle from './UserProductSingle';
import { AllProductsItems } from "../../src/config/data";

/*======================================*/
/*======================================*/
/*======================================*/

const OrderAcoordion = () => {

    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const handleToggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
    }

    {/* {!therIsProduct ? <h5 style={{ fontSize: "17px", color: "#999", fontWeight: "300" }}>No orders yet.</h5> : <OrderAcoordion />} */ }

    return (

        <div className="tab-single">
            <h2 className='tab-title'>Order History</h2>
            <div className="order-history">

                <div className="panel-group">
                    <div className="panel panel-default">
                        <div className="panel-heading d-flex align-items-center justify-content-between">
                            <div className='left'>
                                <span className='user-id-products'>#64E408E5B31</span>
                                <p className='mb-0'><span>2023-08-22 01:01</span> - <span>To be delivered in 5 days</span></p>
                            </div>
                            <h4 className="right panel-title mb-0" onClick={handleToggleAccordion}>
                                <span>View Order</span>
                            </h4>
                        </div>
                        <div className={isAccordionOpen ? "panel-collapse" : "panel-collapse panel-close"}>
                            <ul className="list-unstyled p-0 m-0" >
                                {AllProductsItems?.map((d, i) => (
                                    <li key={i}>
                                        <UserProductSingle data={d} />
                                    </li>
                                ))}
                            </ul>
                            <div className="panel-footer d-flex align-items-center justify-content-between">Total Price <span className='price-boxed'>$272</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderAcoordion;