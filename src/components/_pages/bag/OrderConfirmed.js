import React from 'react'
import Button from '@material-ui/core/Button';
import confirm from '../../../assests/img/confirm.png'

function OrderConfirmed() {
    return (
        <div className="container text-center my-5 pt-5 fontWeight">
            <div className="d-flex justify-content-center ms-5 ps-5 mb-5">
                <img src={confirm} alt="confirm" className="me-3"/>
            </div>
            <div className="line-height">
                <p className="bag-payment pb-1 color-darkslategray">Thank you!</p>
                <p className="bag-payment pb-2 color-darkslategray">Your order has been placed sucessfully</p>
                <p className="color-darkgray pb-4">You will recieve a confirmation message as soon as the order is accepted</p>
                <p className="color-darkgray pb-5">Order Number: John - 271e</p>
            </div>

            <div className="d-flex justify-content-center">
                    <Button variant="outlined" className="me-4 border-royal-blue border-3 px-5 py-2 color-royal-blue fontWeight">
                         Track Order
                    </Button>

                    <Button variant="contained" className="me-4 bg-sandybrown border-3 px-5 py-2 color-royal-blue fontWeight">
                        Continue Shopping
                    </Button>
                </div>
        </div>
    )
}

export default OrderConfirmed
