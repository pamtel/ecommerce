import React from 'react'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { NavLink } from 'react-router-dom';
import logo from '../assests/img/logo2.png'


function GlobalHeader() {
    return (
      <>
      <header position="static" className="global-haeader">
        <div className="container">
          <p>Store made with <span className="text-bold">soko</span></p>
        </div>
      </header>

      <nav className="py-3">
        <div className="container d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center navList">
                <img src={logo} alt="logo"/>
                <div className="inner-con">
                  <p className="title">Target</p>
                  <p className="sub-title">Cham Towers, Plot 12 Nkruma Rd, Kampala, ug</p>
                </div>
            </div>

              <div className="d-flex align-items-center navLink">
               
                <NavLink to="/bag" className="d-flex align-items-center navLink-item">
                <LocalMallOutlinedIcon /> 
                  <p className="mb-0 ps-2 ">Bag</p>
                </NavLink>

                  <NavLink to="/account" className="d-flex align-items-center ms-5 navLink-item">
                  <PersonOutlineOutlinedIcon /> 
                  <p className="mb-0 ps-2 ">Account</p>
                </NavLink>
              </div>
            </div>
      </nav>

    </>
        
    )
}
export default GlobalHeader