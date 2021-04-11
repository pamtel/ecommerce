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
            <div className="d-flex justify-content-between align-items-baseline px-3 py-2">
                <Link to="/" className="text-text-decoration-none">
                    <HomeOutlinedIcon className="mobile-footer-icon"/>
                </Link>
                <Link className="text-text-decoration-none">
                    <ViewModuleOutlinedIcon className="mobile-footer-icon"/>
                </Link>
                <Link className="text-text-decoration-none">
                    <LocalMallOutlinedIcon className="mobile-footer-icon"/>
                </Link>
                <Link className="text-text-decoration-none">
                    <AssignmentOutlinedIcon className="mobile-footer-icon"/>
                </Link>
            </div>
        </div>
    )
}

export default MobileFooter
