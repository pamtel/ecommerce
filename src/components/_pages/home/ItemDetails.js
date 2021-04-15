import React, { useState } from 'react'
import MainLayout from '../../_layout/MainLayout'
import {  useParams } from 'react-router-dom'
import {itemData} from '../../itemData'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import SliderOne from '../../SliderOne';
import { Link } from 'react-router-dom';
// import Snackbar from '@material-ui/core/Snackbar';

   // Our rules
//   const  AddToBag = (singleProduct) =>{
//     //   const {singleProduct} = props;
//       console.log(singleProduct)
//     // localStorage.setItem('cardProducts',  newItemString); 
// }



const addToLocalStorage = (product) =>{ 
    let cardProducts =  localStorage.getItem('products')
    if(cardProducts){
      let itemArray = JSON.parse(cardProducts);
      let itemExist =  itemArray.filter((item) => item.id === product.id);
  
    if(itemExist.length > 0){
    //   this.snackBarShow('Product exists in cart');
    alert('Exits...')
    }else{
      itemArray.push(product)
      let newItemString = JSON.stringify(itemArray);
      localStorage.setItem('products',  newItemString)
    //   this.snackBarShow('Product added to cart');
    alert('Product added again')
    }
  
    }else{
        // first time
      let newItem = [product];
      let newItemString = JSON.stringify(newItem);
      localStorage.setItem('products',  newItemString);
    //   this.snackBarShow('Product added to cart');
    alert('Product added')
    }
  
    // this.updateProductsCount();
    // this.getProductsFromLocalStorage();
  }

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
                    <Link to='/bag' className="text-decoration-none">
                        <Button onClick={ () => addToLocalStorage(data) } variant="outlined" className="me-4 border-royal-blue border-3 px-3 px-sm-5 py-2 color-royal-blue fontWeight">
                             Add to bag
                        </Button>
                    </Link>
    
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
