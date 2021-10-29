import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product/Product";
import { setProducts } from "./../../redux/actions/ProductActions";
import { useParams } from "react-router";

function Products() {
  const { id } = useParams();
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const url = `https://fakestoreapi.com/products/category/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch(setProducts(data));
  };
  useEffect(() => {
    fetchProducts();
  }, [id]);
  return (
    <div>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
