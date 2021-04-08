import React, { useState } from 'react'
import MainLayout from '../../_layout/MainLayout'
import {  useParams } from 'react-router-dom'
import {itemData} from '../../itemData'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import chair from '../../../assests/img/chair.png'
import Button from '@material-ui/core/Button';
import SliderOne from '../../SliderOne';

function ItemDetails() {
    const { ItemId } = useParams()
    const [digit, setDigit] = useState(1);

    const increaseDigit = () => {
        setDigit(digit + 1);
    }
    const decreaseDigit = () => {
        if (digit <= 0) {
            setDigit(0); 
        } else {
            setDigit(digit - 1);
        }
    }

    const singleItem = itemData.filter(i => i.id.toString() === ItemId)
    console.log(singleItem);
    return (
        <MainLayout>
        <div className="container d-flex">
            <ArrowBackIosIcon/>
            <p className="ps-4 fontWeight color-darkslategray bag-payment">Furniture</p>
        </div>
        <hr className="mt-0"/>
        <div className="container d-flex pb-3">
            <img src={chair} alt="product"/>
            <div className="pt-3 ps-4">
                <div className="mb-4">
                    <h6 className="color-darkslategray fontWeight pb-2">Norbury Scandinavian Wood Leg Ottoman</h6>
                    <sup className="fontWeight color-darkgray info">Sold as a peice, Wooden uphoistered ottoman lends  a laid-black appeal to your indoor space.<br></br> Comes with soft padding for extra comfort and support. Solid Wooden and metal free ensures durable, long-lasting use. Great as a footrest or extra seat when entertaining guests </sup>
                </div>

                <div className="line-height mb-4 fontWeight">
                    <div className="d-flex align-items-center">
                        <p className="bag-payment pb-1 pe-4">UGX 118,400</p>
                        <p className="bg-indiared px-1 py-2 text-white rounded">-20%</p>
                    </div>
                    <sup className="outdated-price color-darkgray">UGX 148,000</sup>
                </div>

                <div className="border-skyblue rounded pb-0 pt-0 counter item-details">
                        <span onClick={decreaseDigit} className="px-2 color-skyblue bg-lavender fontWeight">-</span>
                        <span  className="px-2 fontWeight">{digit}</span>
                        <span onClick={increaseDigit} className="px-2 color-skyblue bg-lavender fontWeight">+</span>
                    </div>

                <div className="d-flex">
                    <Button variant="outlined" className="me-4 border-royal-blue border-3 px-5 py-2 color-royal-blue fontWeight">
                         Add to bag
                    </Button>

                    <Button variant="contained" className="me-4 bg-sandybrown border-3 px-5 py-2 color-royal-blue fontWeight">
                        Buy Now
                    </Button>
                </div>
            </div>
        </div>

        <div className="container py-5">
            <h5 className="color-darkgray mb-3">RELATED PRODUCTS</h5>
            <SliderOne />
        </div>
        </MainLayout>
    )
}

export default ItemDetails
