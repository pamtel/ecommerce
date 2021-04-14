import React from "react";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ViewModuleOutlinedIcon from "@material-ui/icons/ViewModuleOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import { NavLink } from "react-router-dom";
  
function MobileFooter() {
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
          <LocalMallOutlinedIcon className="mobile-footer-icon" />
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
