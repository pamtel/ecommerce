import React, { useState } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom'
import Search from '../../Search';
import ViewModuleOutlinedIcon from '@material-ui/icons/ViewModuleOutlined';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import GridView from '../../GridView'
import ListView from '../../ListView'


function SingleCategory() {
  const [listView, setListView] = useState(true);
        const toggleView = () => {
          setListView(!listView);
      }

    const [open, setOpen] =useState(false);
    const anchorRef = React.useRef(null);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
      };
    
      const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) 
    
        setOpen(false);
      };
    
      function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
        }
      }
    
      // return focus to the button when we transitioned from !open -> open
      const prevOpen = React.useRef(open);
      React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
          anchorRef.current.focus();
        }
    
        prevOpen.current = open;
      }, [open]);
    return (
        <>
        <div className=" py-3">
         <Link to="/" className=" d-flex text-decoration-none">
            <ArrowBackIosIcon className="color-darkslategray ms-4 mt-1"/>
            <p className="ps-4 fontWeight color-darkslategray bag-payment">Home</p>
        </Link>
        <hr className="mt-0"/>
        <div className="container">
            <Search />
            <div className="px-3 py-2 d-flex justify-content-between">
                <div className="d-flex pt-1">
                    <ViewModuleOutlinedIcon/>
                    <p>List View</p>
                </div>

                <div className="pe-4">
                    <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    startIcon={<SwapVertIcon />}
                    >
                    Sort
                    </Button>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                <MenuItem onClick={handleClose} className="color-royal-blue">Relevance</MenuItem>
                                <MenuItem onClick={handleClose}>Discount</MenuItem>
                                <MenuItem onClick={handleClose}>Price - Low to High</MenuItem>
                                <MenuItem onClick={handleClose}>Price - High to Low</MenuItem>
                            </MenuList>
                            </ClickAwayListener>
                        </Paper>
                        </Grow>
                    )}
                    </Popper>
                </div>   
            </div>
            <div className="d-flex d-sm-none">
                    <button onClick={toggleView} className="btn btn-dark">
                        Toggle
                    </button>
                </div>

                { listView ? <ListView onSearch={onSearch} classes={classes} />  : !listView  ? <GridView onSearch={onSearch} classes={classes} /> : <p>Loading....</p> }
        </div>
        </div>
            
        </>
    )
}

export default SingleCategory
