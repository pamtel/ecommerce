import { useContext } from "react";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { ProductContext } from "../components/ProductProvider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const ListView = () => {
  const classes = useStyles();
  const [, , , , onSearch] = useContext(ProductContext);
  return (
    <div>
      {onSearch &&
        onSearch.map((data, index) => {
          return (
            <Link
              key={index}
              className="item-data"
              to={"/item-details/" + data.id}
            >
              <div className="row pb-4">
                <div className="col-10 row align-items-center">
                  <div className="image pe-3 col-6">
                    <img src={data.image} alt="items" />
                  </div>
                  <div className="image-info col-5">
                    <p className="color-darkslategray">{data.title}</p>
                    <p className="color-darkgray item-data">{data.price}</p>
                    <sup className="text-decoration-line-through color-darkgray">
                      {data.outdated}
                    </sup>
                  </div>
                </div>

                <div className="col-1 d-flex align-items-center ">
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    className={classes.margin}
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

export default ListView;
