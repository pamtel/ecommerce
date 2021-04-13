import React, { useState, useRef, useEffect, useContext } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import Search from "../../Search";
import ViewModuleOutlinedIcon from "@material-ui/icons/ViewModuleOutlined";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import SwapVertIcon from "@material-ui/icons/SwapVert";
import GridView from "../../GridView";
import ListView from "../../ListView";
import { ProductContext } from "../../ProductProvider";
import MenuIcon from '@material-ui/icons/Menu';
import MobileFooter from "../../MobileFooter";

function SingleCategory() {
  const [, , input, , , handleChange] = useContext(ProductContext);

  const [listView, setListView] = useState(true);
  const toggleView = () => {
    setListView(!listView);
  };

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target))
      setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <div className=" pb-5 mb-5 pt-4">
        <Link to="/" className=" d-flex text-decoration-none">
          <ArrowBackIosIcon className="color-darkslategray ms-4 mt-1" />
          <p className="ps-4 fontWeight color-darkslategray bag-payment">
            Home
          </p>
        </Link>
        <hr className="mt-0" />
        <div className="container">
          <Search handleChange={handleChange} input={input} />
          <div className="px-3 py-2 d-flex justify-content-between">
            <div onClick={toggleView} >
              {listView ? (
                <div className="d-flex pt-1">
                  <ViewModuleOutlinedIcon />
                  <p>List View</p>
                </div>
              ) : (
                <div className="d-flex pt-1">
                  <MenuIcon />
                  <p>Grid View</p>
                </div>
              )}
            </div>

            <div className="pe-4">
              <Button
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                startIcon={<SwapVertIcon />}
              >
                Sort
              </Button>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem
                            onClick={handleClose}
                            className="color-royal-blue"
                          >
                            Relevance
                          </MenuItem>
                          <MenuItem onClick={handleClose}>Discount</MenuItem>
                          <MenuItem onClick={handleClose}>
                            Price - Low to High
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            Price - High to Low
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </div>

          {listView ? (
            <ListView />
          ) : !listView ? (
            <GridView />
          ) : (
            <p>Loading....</p>
          )}
        </div>
      </div>
      <MobileFooter />
    </>
  );
}

export default SingleCategory;
