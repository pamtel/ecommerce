import smiley from "../../../assests/img/smiley.png";

const BagSideBar = () => {
  return (
    <div id="bag-sidebar">
      <div className="d-flex align-items-baseline">
        <p>Bag</p>
        <button type="button" className="badge ms-2">
          0
        </button>
      </div>
      <div className="px-5 py-4">
        <img src={smiley} alt="smiley" />
      </div>
      <div className="bag-content">
        <p className="heading">It's empty here</p>
        <p className="text color-darkgray">
          Start shopping to add items to your bag
        </p>
      </div>
    </div>
  );
};

export default BagSideBar;
