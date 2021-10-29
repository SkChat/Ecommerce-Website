import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, addToCart } from "../../redux/actions/ProductActions";
import currencyFormatter from "currency-formatter";
import "./Details.css";

function Details() {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { id } = useParams();
  const dispatch = useDispatch();
  const fetchProductDetail = async () => {
    const url = `https://fakestoreapi.com/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch(selectedProduct(data));
  };
  useEffect(() => {
    if (id && id !== "") fetchProductDetail();
  }, [id]); //want to run useEffect everytime product id changes

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt="" />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">
                    {currencyFormatter.format(price, { code: "INR" })}
                  </a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div
                  className="ui vertical animated button"
                  tabIndex="0"
                  onClick={() => dispatch(addToCart(product, 1))}
                >
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
