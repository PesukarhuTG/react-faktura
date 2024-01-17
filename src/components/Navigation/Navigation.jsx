import FavouriteSVG from "/src/assets/icons/icon-favourite.svg?react";
import CartSVG from "/src/assets/icons/icon-cart.svg?react";
import style from "./Navigation.module.scss";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav className={style.navigation}>
    <Link to="/favourite" className={style.link}>
      <span className={style.linkText}>Избранное</span>
      <FavouriteSVG />
    </Link>
    <Link to="/cart" className={style.link}>
      <span className={style.linkText}>Корзина</span>
      <span>(0)</span>
      <CartSVG />
    </Link>
  </nav>
);
export default Navigation;
