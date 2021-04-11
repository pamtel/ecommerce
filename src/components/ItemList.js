import React, { useState } from 'react'
import { itemData } from './itemData'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import AddSharpIcon from '@material-ui/icons/AddSharp';
import { Link } from 'react-router-dom';
import Search from './Search';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

// List and Grid
const ListView = (props) =>{
    const { onSearch,  classes } = props;
    return(
    <div>
    {onSearch.map((data, index) => {
        return (
            <Link key={index} className="item-data" to={"/item-details/" + data.id}>
           <div  className="row pb-4">
           <div className="col-md-10 d-flex align-items-center">
               <div className="image pe-3">
                   <img src={data.image} alt="items" />
               </div>
               <div className="image-info">
                   <p className="color-darkslategray">{data.title}</p>
                   <p className="color-darkgray item-data">{data.price}</p>
                   <sup className="text-decoration-line-through color-darkgray">{data.outdated}</sup>
               </div>
           </div>

           <div className="col-md-2 d-flex align-items-center ">
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
);
}

const GridView = (props) =>{
    const { onSearch,  classes } = props;
    return(
    <div className="row">
    {onSearch.map((data, index) => {
        return (
            <Link key={index} className="item-data col-6 col-lg-12" to={"/item-details/" + data.id}>
           <div  className="row pb-4">
           <div className="col-lg-10 d-block d-lg-flex align-items-center">
               <div className="image me-3 bg-dark text-center">
                   <img src={data.image} alt="items"/>
               </div>
               <div className="image-info">
                   <p className="color-darkslategray">{data.title}</p>
                   <p className="color-darkgray item-data">{data.price}</p>
                   <sup className="text-decoration-line-through color-darkgray">{data.outdated}</sup>
               </div>
           </div>

           <div className="col-md-2 d-flex align-items-center ">
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
    );
}





function ItemList() {
    const [products, setProducts] = useState(itemData)
    const [input, setInput] = useState("");
    const [listView, setListView] = useState(true);

    const onSearch =  products.filter(result  => {
        return  result.title.toLowerCase().includes(input.toLocaleLowerCase())
    })  

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const toggleView = () => {
        setListView(!listView);
    }
 
    const classes = useStyles();
    return (
        <>
        <div className="desktop-itemlist">
            <Search onChange={handleChange} input={input}/>
            <div className="d-sm-flex align-items-baseline categories color-darkgray d-none">
                <p>Electronics</p>
                <button type="button" className="badge ms-2">12</button>
            </div>

                <div className="d-flex d-sm-none">
                    <button onClick={toggleView} className="btn btn-dark">
                        Toggle
                    </button>
                </div>

                { listView ? <ListView onSearch={onSearch} classes={classes} />  : !listView  ? <GridView onSearch={onSearch} classes={classes} /> : <p>Loading....</p> }

        </div>

        </>
    )
}

export default ItemList
