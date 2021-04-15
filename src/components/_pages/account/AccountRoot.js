import React from "react";
import Button from "@material-ui/core/Button";
import SpeakerNotesOutlinedIcon from "@material-ui/icons/SpeakerNotesOutlined";
import AddLocationOutlinedIcon from "@material-ui/icons/AddLocationOutlined";
import order1 from "../../../assests/img/order1.png";
import order2 from "../../../assests/img/order2.png";
import HeaderLayout from "../../_layout/HeaderLayout";
import delivered from "../../../assests/img/delivered.png";
import snipped from "../../../assests/img/snipped.png";
import { Link } from "react-router-dom";

function AccountRoot() {
  return (
    <HeaderLayout>
      <div className="container d-flex justify-content-between align-items-center mb-2">
        <div>
          <p className="fontWeight color-darkslategray phoneNunber">
            +91-8080021387
          </p>
        </div>

        <Button
          variant="outlined"
          size="medium"
          className="border-darkgray color-darkslategray fontWeight"
        >
          Log Out
        </Button>
      </div>
      <hr />

      <div className="container border round my-4 py-4 pt-0 pb-0 account-root">
        <div className="row fontWeight ">
          <div className="col-md-3 border-end py-4 details">
            <div className="d-flex ps-3 color-royal-blue">
              <SpeakerNotesOutlinedIcon />
              <p className="ps-2">My order</p>
            </div>
            <div className="d-flex ps-3 color-darkgray">
              <AddLocationOutlinedIcon />
              <p className="ps-2">
                <Link to="/address" className="item-data color-darkgray">
                  My addresses
                </Link>
              </p>
            </div>
          </div>

          <div className="col-md-9 py-4 ps-5 all-orders">
            <div className="d-flex justify-content-between">
              <p className="show">Showing all orders</p>
              <Button
                variant="outlined"
                size="medium"
                startIcon={<AddLocationOutlinedIcon />}
                className="border-darkgray color-darkslategray fontWeight me-5"
              >
                Filters
              </Button>
            </div>

            <div className="row gap-2 mt-3 grid-container">
              <div className="col-md-5 border rounded p-3">
                <div className="d-flex align-items-center">
                  <img src={order1} alt="orders" />
                  <p className="ps-2 mt-3 fontWeight color-darkslategray">
                    Target
                  </p>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="order">
                    <p>Order #1233341</p>
                    <p className="color-darkgray">3 items</p>
                  </div>

                  <div className="price">
                    <p className="float-end color-darkslategray">UGX 12,700</p>
                    <p className="color-darkgray">25/02/2021, 01:55 PM</p>
                  </div>
                </div>
                <img src={snipped} alt="snipped" className="ps-0 pt-2" />
              </div>

              <div className="col-md-5 border rounded p-3">
                <div className="d-flex align-items-center">
                  <img src={order2} alt="orders" />
                  <p className="ps-2 mt-3 fontWeight color-darkslategray">
                    Abhi's Juke Store
                  </p>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="order">
                    <p>Order #1213396</p>
                    <p className="color-darkgray">1 items</p>
                  </div>

                  <div className="price">
                    <p className="float-end">UGX 5,400</p>
                    <p className="color-darkgray">26/02/2021, 01:55 PM</p>
                  </div>
                </div>
                <img src={delivered} alt="delivered" className="ps-0 pt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
}

export default AccountRoot;
