import FavouriteSVG from "/src/assets/icons/icon-favourite.svg?react";
import style from "./CardItem.module.scss";
import { API_URL } from "../../const";
import { Link } from "react-router-dom";

const CardItem = ({ id, name, images: [image], price }) => (
  <article className={style.card}>
    <Link className={style.linkImg} to={`/product/${id}`}>
      <img className={style.image} src={`${API_URL}/${image}`} alt={name} />
    </Link>
    <div className={style.info}>
      <h3 className={style.title}>
        <Link to={`/product/${id}`} tabIndex="-1">
          {name}
        </Link>
      </h3>
      <span className={style.price}>{price.toLocaleString()}&nbsp;₽</span>
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
