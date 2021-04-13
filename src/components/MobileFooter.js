import React from 'react'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ViewModuleOutlinedIcon from '@material-ui/icons/ViewModuleOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import { Link } from 'react-router-dom';

function MobileFooter() {
    return (
        <div className="mobile-footer">
            <hr/>
            <div className="d-flex justify-content-between align-items-baseline px-3 text-center">
                <Link to="/" className="text-decoration-none mobile-active">
                    <HomeOutlinedIcon className="mobile-footer-icon"/>
                    <p>Home</p>
                </Link>
                <Link to="/category" className="text-decoration-none">
                    <ViewModuleOutlinedIcon className="mobile-footer-icon"/>
                    <p>Categories</p>
                </Link>
                <Link to="/bag" className="text-decoration-none">
                    <LocalMallOutlinedIcon className="mobile-footer-icon"/>
                    <p>Bag</p>
                </Link>
                <Link to="/orders" className="text-decoration-none">
                    <AssignmentOutlinedIcon className="mobile-footer-icon"/>
                    <p>Orders</p>
                </Link>
            </div>
        </div>
    )
}

export default MobileFooter
