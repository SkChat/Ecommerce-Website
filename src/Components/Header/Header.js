import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";
import { useSelector } from "react-redux";

function Header() {
  const { totalQuantities } = useSelector((state) => state.cartProduct);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const url = "https://fakestoreapi.com/products/categories";
    const response = await fetch(url);
    const data = await response.json();
    setCategories(data);
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div>
      <nav className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="https://www.360webdesigns.com/wp-content/uploads/2016/07/Services_ECommerce_v2-01.png"
            alt=""
          />
        </Link>
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <Link to="/cart" className="header__link">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLine header__basketCount">
                {totalQuantities}
              </span>
            </div>
          </Link>
        </div>
      </nav>
      <div className="header__bottom">
        {categories.map((category) => {
          return (
            <Link to={`/checkout/${category}`} className="header__link">
              <div className="header_bottom_text">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
