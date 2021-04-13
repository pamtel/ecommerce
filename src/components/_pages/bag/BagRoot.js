import React from 'react'
import HeaderLayout from '../../_layout/HeaderLayout';
import CheckOut from './CheckOut';
import BagPayment from './BagPayment';
import MobileFooter from '../../MobileFooter';

function BagRoot() {
    return (
        <>
        <HeaderLayout>
        <hr className="mb-0"/>
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
            </HeaderLayout>
            <MobileFooter />
        </>
    )
}

export default BagRoot
