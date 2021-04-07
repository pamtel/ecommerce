import React from 'react'
import { itemData } from './itemData'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import AddSharpIcon from '@material-ui/icons/AddSharp';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

function ItemList() {
    const classes = useStyles();
    return (
        <div>
            <div className="d-flex align-items-baseline categories color-darkgray">
                <p>Electronics</p>
                <button type="button" class="badge ms-2">12</button>
            </div>
             <div>
                 {itemData.map((data, index) => {
                     return (
                         <Link className="item-data" to={"/item-details/" + data.id}>
                        <div key={index} className="row pb-4">
                        <div className="col-md-10 d-flex align-items-center">
                            <div className="image pe-3">
                                <img src={data.image} alt="items"/>
                            </div>
                            <div className="image-info">
                                <p className="color-darkslategray">{data.title}</p>
                                <p className="color-darkgray item-data">{data.price}</p>
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
        </div>
    )
}

export default ItemList
