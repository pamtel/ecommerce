import React from 'react'
import MainLayout from '../../_layout/MainLayout'
import {  useParams } from 'react-router-dom'
import {itemData} from '../../itemData'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import chair from '../../../assests/img/chair.png'

function ItemDetails() {
    const { ItemId } = useParams()

    const singleItem = itemData.filter(i => i.id.toString() === ItemId)
    console.log(singleItem);
    return (
        <MainLayout>
        <div className="container d-flex">
            <ArrowBackIosIcon/>
            <p className="ps-4 fontWeight color-darkslategray">Furniture</p>
        </div>
        <hr className="mt-0"/>
        <div className="container d-flex pb-3">
            <img src={chair} alt="product"/>
            <div className="pt-3 ps-4">
                <h6>Norbury Scandinavian Wood Leg Ottoman</h6>
                <p>Sold as a peice, Wooden uphoistered ottoman lends  a laid-black appeal to your indoor space. Comes with soft padding for extra comfort and support. Solid Wooden and metal free ensures durable, long-lasting use. Great as a footrest or extra seat when entertaining guests </p>

                <div>
                    <p>UGX 118,400</p>
                    <p className="outdated-price">UGX 148,000</p>
                </div>

                <div className="d-flex ">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                </div>

                <div className="d-flex">
                    <button className="btn btn-outline-primary btn-lg me-4">Add to bag</button>
                    <button className="btn btn-warning btn-lg">Buy Now</button>
                </div>
            </div>
        </div>
        </MainLayout>
    )
}

export default ItemDetails
