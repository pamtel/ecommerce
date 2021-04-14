import React from "react";
import Button from "@material-ui/core/Button";
import footer1 from "../assests/img/footer1.png";
import footer2 from "../assests/img/footer2.png";
import footer3 from "../assests/img/footer3.png";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import MobileFooter from "./MobileFooter";
import { Link } from "react-router-dom";

function GlobalFooter() {
  return (
    <div className="footer ">
      <div className="footer-section text-white">
        <div className="d-flex justify-content-between align-items-center">
          <div className="footer-info">
            <div className="pb-2 d-flex justify-content-center">
              <img src={footer1} alt="footer" />
            </div>
            <p>Fast Delivery</p>
          </div>
          <div className="footer-info">
            <div className="pb-2 d-flex justify-content-center">
              <img src={footer2} alt="footer" />
            </div>
            <p>Buyer Protection</p>
          </div>
          <div className="footer-info">
            <div className="pb-2 d-flex justify-content-center">
              <img src={footer3} alt="footer" />
            </div>
            <p>Customer Support</p>
          </div>
        </div>
      </div>

      <footer
        className="main-footer d-lg-flex justify-content-lg-center"
        id="footer-desktop"
      >
        <div className="">
          <p>STORE DETAILS</p>
          <p className="target">Target</p>
          <p>Cham Towers, Plot 12 Nkruma Rd, Kampala, ug</p>
        </div>
      </footer>

      <div className="d-flex justify-content-between d-sm-block px-2 second-footer">
        <div className="d-flex justify-content-sm-center mb-4">
          <Button
            variant="contained"
            className="chat-button text-white px-4 py-2"
          >
            <i className="fa fa-whatsapp whatsapp-icon pe-2"></i>
            Chat with us
          </Button>
        </div>

        <Link to="/category" className="d-flex justify-content-center mb-4 d-sm-none rounded-3 text-decoration-none">
          <Button
            variant="contained"
            className="bg-darkslategray text-white px-4 py-2 categories"
            startIcon={<ViewModuleIcon className="footer-icon" />}
          >
            Categories
          </Button>
        </Link>
      </div>

      <div className="d-sm-none">
        <MobileFooter />
      </div>
    </div>
  );
}

export default GlobalFooter;
