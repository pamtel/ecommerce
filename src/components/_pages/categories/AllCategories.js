import React from 'react'
import AddSharpIcon from '@material-ui/icons/AddSharp';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import image1 from '../../../assests/img/item1.jpg';
import image2 from '../../../assests/img/item2.jpg';
import image4 from '../../../assests/img/item4.jpg';
import image5 from '../../../assests/img/item6.jpg';
import image3 from '../../../assests/img/item3.jpg';
import image6 from '../../../assests/img/item5.jpg';
import Search from '../../Search';
import MobileFooter from '../../MobileFooter';


export const categoriesData = [
    {
        id: 1,
        image: image1,
        title: "Fresh food",
        slug: "fresh-food"
    },
    {
        id: 2,
        image: image2,
        title: "Shoes",
        slug: "shoes"
    },
    {
        id: 3,
        image: image4,
        title: "Bags",
        slug: "bags"
    },
    {
        id: 4,
        image: image5,
        title: "Furnitures",
        slug: "furniture"
    },
    {
        id: 5,
        image: image3,
        title: "Home",
        slug: "home"
    },
    {
        id: 6,
        image: image6,
        title: "Electronics",
        slug: "electronics"
    },
]


function AllCategories() {
    return(
<>
    <div className="container allCategories">
    <Search />
    <h6 className="py-3 color-darkgray">ALL CATEGORIES</h6>
    <div className="row ">
    {categoriesData.map((data, index) => {
        return (
            <Link to="/category/singleCategory" key={index} className="item-data col-6 col-lg-12">
           <div  className="row pb-4">
           <div className="col-lg-10 d-block d-lg-flex align-items-center">
               <div className="image me-3 bg-dark text-center">
                   <img src={data.image} alt="items" className="img-thumbnail"/>
               </div>
               <div className="image-info">
                   <p className="color-darkslategray">{data.title}</p>
                   <p className="color-darkgray item-data">{data.price}</p>
                   <sup className="text-decoration-line-through color-darkgray">{data.outdated}</sup>
               </div>
           </div>

       </div>
       </Link>
        )
    })}
   
        </div>
    </div>
    <MobileFooter />
</>
    );
}

export default AllCategories
