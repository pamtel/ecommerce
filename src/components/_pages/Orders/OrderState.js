import React from "react";
import MobileFooter from "../../MobileFooter";
import pending from "../../../assests/img/pending.png";
import accepted from "../../../assests/img/accepted.png";
import snipped from "../../../assests/img/snipped.png";
import delivered from "../../../assests/img/delivered.png";
import cancelled from "../../../assests/img/cancelled.png";
import rejected from "../../../assests/img/rejected.png";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export const orderData = [
  {
    name: "John-271e",
    time: "just now",
    items: "3 items",
    price: "UGX 12,700",
    status: pending,
  },
  {
    name: "John-472f",
    time: "55 mins ago",
    items: "4 items",
    price: "UGX 195,000",
    status: accepted,
  },
  {
    name: "John-571f",
    time: "2 days ago",
    items: "1 item",
    price: "UGX 16,000",
    status: snipped,
  },
  {
    name: "John-762r",
    time: "08 Nov",
    items: "1 item",
    price: "UGX 65,000",
    status: delivered,
  },
  {
    name: "John-972d",
    time: "27 Oct",
    items: "8 items",
    price: "UGX 67,400",
    status: cancelled,
  },
  {
    name: "John-232a",
    time: "03 Dec 2019",
    items: "8 items",
    price: "UGX 234,400",
    status: rejected,
  },
];

function OrderState() {
  return (
    <>
      <div className="orderState container">
      <Link to="/" className="container d-flex text-decoration-none me-3">
        <ArrowBackIosIcon className="color-darkslategray" />
        <p className="ps-4 fontWeight color-darkslategray bag-payment">Orders</p>
      </Link>
        {orderData.map((status, index) => {
          return (
            <div
              key={index}
              className="all-orders px-3 fontWeight color-darkgray"
            >
              <div className="d-flex justify-content-between">
                <h6 className="fontWeight color-darkslategray">
                  {status.name}
                </h6>
                <p className="status">{status.time}</p>
              </div>
              <p className="">{status.items}</p>
              <div className="d-flex justify-content-between align-items-center">
                <p className="">{status.price}</p>
                <img
                  src={status.status}
                  alt="status"
                  className="img-thumbnail mb-3"
                />
              </div>
            </div>
          );
        })}
      </div>
      <MobileFooter />
    </>
  );
}

export default OrderState;
