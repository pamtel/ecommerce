import AddSharpIcon from '@material-ui/icons/AddSharp';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const ListView = (props) =>{
    const { onSearch,  classes } = props;
    return(
    <div>
    {onSearch && onSearch.map((data, index) => {
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

export default ListView