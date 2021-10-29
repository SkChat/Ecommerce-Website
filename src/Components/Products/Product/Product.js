import React from "react";
import { Link } from "react-router-dom";
import currencyFormatter from "currency-formatter";

function Product({ product }) {
  return (
    <div className="col-3" key={product.id}>
      <div className="product">
        <div className="product__img">
          <Link to={`/details/${product.id}`}>
            <img src={product.image} alt="" />
          </Link>
        </div>
        <div className="product__name">{product.title}</div>
        <div className="row">
          <div className="col-6">
            <div className="product__price">
              <span className="actualPrice">
                {currencyFormatter.format(product.price, {
                  code: "INR",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
