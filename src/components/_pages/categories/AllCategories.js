import React from 'react'
import { Link } from 'react-router-dom';
import image1 from '../../../assests/img/category-watch1.jpg';
import image2 from '../../../assests/img/category-bag1.jpg';
import image4 from '../../../assests/img/Category-shoe2.jpg';
import image5 from '../../../assests/img/Bag.jpg';
import image3 from '../../../assests/img/Dress.jpg';
import image6 from '../../../assests/img/watch1.jpg';
import Search from '../../Search';
import MobileFooter from '../../MobileFooter';


export const categoriesData = [
    {
        id: 1,
        image: image1,
        title: "Wrist-Watch",
        slug: "Wrist-Watch"
    },
    {
        id: 2,
        image: image2,
        title: "Bags",
        slug: "Bags"
    },
    {
        id: 3,
        image: image4,
        title: "Shoes",
        slug: "Shoes"
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
        title: "Wears",
        slug: "Wears"
    },
    {
        id: 6,
        image: image6,
        title: "Gold-watch",
        slug: "Gold-watch"
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
               <div className="me-3 text-center rounded-3">
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
