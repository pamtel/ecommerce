import React, { useState } from 'react'
import { itemData } from './itemData'
import { makeStyles } from '@material-ui/core/styles'
import Search from './Search';
import GridView from './GridView'
import ListView from './ListView'

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  
function CategoryItems() {
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
            <div className="d-sm-flex align-items-baseline categories color-darkgray d-none pt-3">
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

export default CategoryItems
