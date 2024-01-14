import FavouriteSVG from "/src/assets/icons/icon-favourite.svg?react";
import style from "./CardItem.module.scss";
import { API_URL } from "../../const";

const CardItem = ({ id, name, images, price }) => (
  <article className={style.card}>
    <a className={style.linkImg} href={`/product/${id}`}>
      <img className={style.image} src={`${API_URL}/${images[0]}`} alt={name} />
    </a>
    <div className={style.info}>
      <h3 className={style.title}>
        <a href={`/product/${id}`} tabIndex="-1">
          {name}
        </a>
      </h3>
      <span className={style.price}>{`${price.toLocaleString()}\u00A0₽`}</span>
    </div>
    <button className={style.btn} data-id={id} type="button">
      В корзину
    </button>
    <button
      className={style.favourite}
      data-id={id}
      type="button"
      aria-label="добавление в избранное">
      <FavouriteSVG />
    </button>
  </article>
);

export default CardItem;
