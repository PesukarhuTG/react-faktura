import FavouriteSVG from "/src/assets/icons/icon-favourite.svg?react";
import style from "./CardItem.module.scss";

const CardItem = () => (
  <article className={style.card}>
    <a className={style.linkImg} href="#">
      <img
        className={style.image}
        src="https://www.mebelbspb.ru/images/tovar/cover4296.jpg"
        alt="image"
      />
    </a>
    <div className={style.info}>
      <h3 className={style.title}>
        <a href="#" tabIndex="-1">
          Диван Норд
        </a>
      </h3>
      <span className={style.price}>80 640 ₽</span>
    </div>
    <button className={style.btn} type="button">
      В корзину
    </button>
    <button className={style.favourite} type="button">
      <FavouriteSVG />
    </button>
  </article>
);

export default CardItem;
