import React, { useState } from 'react'
import { itemData } from './itemData'
import { makeStyles } from '@material-ui/core/styles'
import Search from './Search';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import AddSharpIcon from '@material-ui/icons/AddSharp';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  
function ItemList() {
    const [products, setProducts] = useState(itemData)
    const [input, setInput] = useState("");
    

    const onSearch =  products.filter(result  => {
        return result.title.toLowerCase().includes(input.toLowerCase())
    })  

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    
 
    const classes = useStyles();
    return (
        <>
        <div className="desktop-itemlist">
            <Search handleChange={handleChange} input={input}/>

            <div className="d-sm-flex align-items-baseline categories color-darkgray d-none pt-3">
                <p>Electronics</p>
                <button type="button" className="badge ms-2">12</button>
            </div>

            <div className="d-sm-none d-flex justify-content-between py-3">
                <h6 className="color-darkgray">TOP SELLERS (6)</h6>
                <p className="color-royal-blue fontWeight">View All</p>
            </div>

        <div>
        {onSearch && onSearch.map((data, index) => {
        return (
            <Link key={index} className="item-data" to={"/item-details/" + data.id}>
           <div  className="row pb-4">
           <div className="col-10 row align-items-center">
               <div className="image pe-3 col-6">
                   <img src={data.image} alt="items" />
               </div>
               <div className="image-info col-6">
                   <p className="color-darkslategray">{data.title}</p>
                   <p className="color-darkgray item-data">{data.price}</p>
                   <sup className="text-decoration-line-through color-darkgray">{data.outdated}</sup>
               </div>
           </div>

           <div className="col-2 d-flex align-items-center ">
           <Button 
           variant="outlined" 
           size="small" 
           color="primary" 
           className={classes.margin} 
           startIcon={<AddSharpIcon />}>
               ADD
           </Button>
           </div>
       </div>
       </Link>
        )
    })}
   
</div>
</div>

        </>
    )
}

export default ItemList
