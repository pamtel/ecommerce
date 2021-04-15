import React from "react";
import HeaderLayout from "../../_layout/HeaderLayout";
import CheckOut from "./CheckOut";
import BagPayment from "./BagPayment";
import MobileFooter from "../../MobileFooter";
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function BagRoot() {
  return (
    <>
      <HeaderLayout>
      <Link to="/" className="container d-flex text-decoration-none me-3">
            <ArrowBackIosIcon className="color-darkslategray"/>
            <p className="ps-4 fontWeight color-darkslategray bag-payment">Bag</p>
        </Link>
        <hr className="m-0" />
        <div className="container mt-0 Bag-root">
          <div className="row">
            <div className="col-md-8 border-end fontWeight">
              <CheckOut />
            </div>

            <hr className="d-sm-none"/>

            <div className="col-md-4 ps-4">
              <BagPayment />
            </div>
          </div>
        </div>
      </HeaderLayout>
      <MobileFooter />
    </>
  );
}

export default BagRoot;
