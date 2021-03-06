import React, { useState } from "react";

function BagPayment(props) {
  const {clearBag} = props;

  const [digit, setDigit] = useState(1);


  const increaseDigit = () => {
    setDigit(digit + 1);
  };
  const decreaseDigit = () => {
    if (digit <= 0) {
      setDigit(0);
    } else {
      setDigit(digit - 1);
    }
  };

  const clearLocalStorage = () => {
    clearBag()
    localStorage.clear()
    setDigit([])
  }

  let cardProducts = localStorage.getItem("products");
  let itemArray = JSON.parse(cardProducts);

  return (
    <div className="B-payment">
      <div className="d-flex justify-content-between my-4">
        <div className="d-flex align-items-baseline bag-payment">
          <p className="fontWeight bag-payment color-darkslategray">Bag</p>
          <button type="button" className="badge ms-2">
            {itemArray?.length > 0 ? itemArray?.length : 0}
          </button>
        </div>

        <div>
          <p className="text-decoration-underline fontWeight" onClick={clearLocalStorage} style={{cursor: "pointer"}}>Clear Bag</p>
        </div>
      </div>


      {itemArray && itemArray.map((i) => {
        return (
          <div key={i?.id} className="fontWeight">
            <div className="line-height">
              <h6 className="color-darkslategray">{i?.title}</h6>
              <p>Per piece</p>
            </div>
            <div className="d-flex  justify-content-between pb-4 pt-2">
              <div className="line-height">
                <p className="color-darkslategray">UGX {i?.price}</p>
                <sup className="text-decoration-line-through">
                  UGX {i?.outdated}
                </sup>
              </div>
              <div className="d-flex border-skyblue rounded pb-0 counter color-darkslategray item-details">
                <span
                  onClick={decreaseDigit}
                  className="px-2 color-skyblue bg-lavender fontWeight"
                >
                  -
                </span>
                <span className="px-2 fontWeight">{digit}</span>
                <span
                  onClick={increaseDigit}
                  className="px-2 color-skyblue bg-lavender fontWeight"
                >
                  +
                </span>
              </div>
            </div>
          </div>
        );
      })}

      <hr />

      <div className="subtotal fontWeight">
        <div className="d-flex justify-content-between">
          <p>Subtotal</p>
          <p>UGX 12,700</p>
        </div>

        <div className="d-flex justify-content-between">
          <p>Delivery</p>
          <p className="mediumseagreen">Free</p>
        </div>
      </div>

      <div className="subtotal fontWeight">
        <div className="d-flex justify-content-between">
          <p>Total</p>
          <p>UGX 12,700</p>
        </div>
        <sup>inclusive of all taxes</sup>
      </div>

      <p className="mediumseagreen">
        You are about to save UGX 27,400 on this order
      </p>
    </div>
  );
}

export default BagPayment;
