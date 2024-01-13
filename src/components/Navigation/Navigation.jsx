import FavouriteSVG from "/src/assets/icons/icon-favourite.svg?react";
import CartSVG from "/src/assets/icons/icon-cart.svg?react";
import style from "./Navigation.module.scss";

const Navigation = () => (
  <nav className={style.navigation}>
    <a href="/favourite" className={style.link}>
      <span className={style.linkText}>Избранное</span>
      <FavouriteSVG />
    </a>
    <a href="/cart" className={style.link}>
      <span className={style.linkText}>Корзина</span>
      <span>(0)</span>
      <CartSVG />
    </a>
  </nav>
);
export default Navigation;
