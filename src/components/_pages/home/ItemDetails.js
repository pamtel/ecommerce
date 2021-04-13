import React, { useState, useContext } from 'react'
import MainLayout from '../../_layout/MainLayout'
import {  useParams } from 'react-router-dom'
import {itemData} from '../../itemData'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import SliderOne from '../../SliderOne';
import { Link } from 'react-router-dom';
import { ProductContext } from "../../ProductProvider";

function ItemDetails() {
    const [products, setProducts, input, setInput, onSearch, handleChange, cart, setCart, getTotalCart] = useContext(ProductContext);

    const AddToBag = product => {
        let newCart = [...cart];
        let itemInCart = newCart.find(item => product.id === item.id);
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            itemInCart = {
                ...product,
                quantity: 1
            };
            newCart.push(itemInCart)
        }

        setCart(newCart)
    }

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
        <Link to="/" className="container d-flex text-decoration-none">
            <ArrowBackIosIcon className="color-darkslategray"/>
            <p className="ps-4 fontWeight color-darkslategray bag-payment">Products</p>
        </Link>
        
        <hr className="mt-0"/>
        <div className="container pb-3">
            {singleItem.map((data, index) => {
                return (
                    <div key={index} className="row">
                    <img src={data.image} alt="product" className="col-sm-5"/>
                    <div className="pt-3 ps-4 col-sm-7">
                        <div className="mb-4">
                            <h6 className="color-darkslategray fontWeight pb-2">{data.title}</h6>
                            <sup className="fontWeight color-darkgray info">{data.desc}</sup>
                        </div>
                
    
                    <div className="line-height mb-4 fontWeight">
                        <div className="d-flex align-items-center">
                            <p className="bag-payment pb-1 pe-4">{data.price}</p>
                            <p className="bg-indiared px-1 py-2 text-white rounded">-20%</p>
                        </div>
                        <sup className="outdated-price color-darkgray">{data.outdated}</sup>
                    </div>
    
                    <div className="border-skyblue rounded pb-0 pt-0 counter item-details">
                            <span onClick={decreaseDigit} className="px-2 py-sm-1 color-skyblue bg-lavender fontWeight">-</span>
                            <span  className="px-2 py-sm-1 fontWeight">{digit}</span>
                            <span onClick={increaseDigit} className="px-2 py-sm-1 color-skyblue bg-lavender fontWeight">+</span>
                        </div>
                        
                    <div className="d-flex justify-content-between justify-content-sm-start items-detail">
                        <Button onClick={ AddToBag } variant="outlined" className="me-4 border-royal-blue border-3 px-4 px-sm-5 py-2 color-royal-blue fontWeight">
                             Add to bag
                        </Button>
    
                        <Link to='/bag' className="text-decoration-none">
                            <Button variant="contained" className="me-4 bg-sandybrown border-3 px-5  py-2 color-royal-blue fontWeight">
                                Buy Now
                            </Button>
                        </Link>
                    </div>
                    </div>
                </div>
                )
            })}
           
        </div>

        <div className="container py-5 d-none d-sm-block">
            <h5 className="color-darkgray mb-3">RELATED PRODUCTS</h5>
            <SliderOne />
        </div>
        </MainLayout>
    )
}

export default ItemDetails
