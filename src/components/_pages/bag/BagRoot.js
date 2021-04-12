import React from 'react'
import HeaderLayout from '../../_layout/HeaderLayout';
import CheckOut from './CheckOut';
import AngrySmiley from './AngrySmiley';
import BagPayment from './BagPayment';
import OrderConfirmed from './OrderConfirmed';

function BagRoot() {
    // const classes = useStyles();
    return (
        <>
        <HeaderLayout>
        <hr className="mb-0"/>
            <div>
                <AngrySmiley />
            </div>

            <div className="container mt-0 Bag-root">
                <div className="row">
                    <div className="col-md-8 border-end fontWeight">
                        <CheckOut />
                    </div>
                    <div className="col-md-4 ps-4">
                        <BagPayment />
                    </div>
                </div>
            </div>

            {/* <div>
                <OrderConfirmed />
            </div> */}
            </HeaderLayout>
        </>
    )
}

export default BagRoot
