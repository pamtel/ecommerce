import { useContext } from "react";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { ProductContext } from "../components/ProductProvider";


const GridView = () => {
  const [, , , , onSearch] = useContext(ProductContext);
  return (
    <div className="row">
      {onSearch.map((data, index) => {
        return (
          <Link
            key={index}
            className="item-data col-6 col-lg-12"
            to={"/item-details/" + data.id}
          >
            <div className="row pb-4">
              <div className="col-lg-10 d-block d-lg-flex align-items-center">
                <div className="image me-3 text-center">
                  <img src={data.image} alt="items" />
                </div>
                <div className="image-info">
                  <p className="color-darkslategray pt-2">{data.title}</p>
                  <p className="color-darkgray item-data">{data.price}</p>
                  <sup className="text-decoration-line-through color-darkgray">
                    {data.outdated}
                  </sup>
                </div>
              </div>

              <div className="col-md-2 d-flex align-items-center ">
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className="px-5 text-center"
                  startIcon={<AddSharpIcon />}
                >
                  ADD
                </Button>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default GridView;
