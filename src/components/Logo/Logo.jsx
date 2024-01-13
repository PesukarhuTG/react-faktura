import logo from "/src/assets/store-logo.svg";
import cn from "classnames";
import style from "./Logo.module.scss";

const Logo = (props) =>
  props.className ? (
    <a className={cn(props.className, style.linkLogoCommon)} href="/">
      <img
        className={style.img}
        src={logo}
        alt="Логотип магазина мебели Фактура"
      />
    </a>
  ) : (
    <a href="/" className={style.linkLogoCommon}>
      <img
        className={style.img}
        src={logo}
        alt="Логотип магазина мебели Фактура"
      />
    </a>
  );

export default Logo;
