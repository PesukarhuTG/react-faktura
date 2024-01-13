import logo from "/src/assets/store-logo.svg";
import style from "./Logo.module.scss";

const Logo = (props) =>
  props.className ? (
    <a className={props.className} href="/">
      <img
        className={style.img}
        src={logo}
        alt="Логотип магазина мебели Фактура"
      />
    </a>
  ) : (
    <a href="/">
      <img
        className={style.img}
        src={logo}
        alt="Логотип магазина мебели Фактура"
      />
    </a>
  );

export default Logo;
