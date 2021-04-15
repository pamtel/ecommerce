import React from "react";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ViewModuleOutlinedIcon from "@material-ui/icons/ViewModuleOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import { NavLink } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
  
function MobileFooter(props) {
  const {bagCleared} = props;
  console.log(props);
  let cardProducts = localStorage.getItem("products");
  let itemArray = JSON.parse(cardProducts);
  if(bagCleared){
    itemArray = []
  }
  return (
    <div className="mobile-footer d-sm-none">
      <hr className="m-0"/>
      <div className="d-flex justify-content-between align-items-baseline px-3 text-center">
        <NavLink exact={true} activeClassName='is-active'  to="/" className="text-decoration-none mobile-active">
          <HomeOutlinedIcon className="mobile-footer-icon" />
          <p>Home</p>
        </NavLink>
        <NavLink activeClassName='is-active'  to="/category" className="text-decoration-none">
          <ViewModuleOutlinedIcon className="mobile-footer-icon" />
          <p>Categories</p>
        </NavLink>
        <NavLink activeClassName='is-active'  to="/bag" className="text-decoration-none">
        <Badge badgeContent={itemArray?.length > 0 ? itemArray?.length : 0} color="error">
          <LocalMallOutlinedIcon className="mobile-footer-icon" />
          </Badge>
          <p>Bag</p>
        </NavLink>
        <NavLink activeClassName='is-active'  to="/orders" className="text-decoration-none">
          <AssignmentOutlinedIcon className="mobile-footer-icon" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
}

export default MobileFooter;
