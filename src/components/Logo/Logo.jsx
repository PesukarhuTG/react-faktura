import logo from "/src/assets/store-logo.svg";
import cn from "classnames";
import style from "./Logo.module.scss";
import { Link } from "react-router-dom";

const Logo = (props) =>
  props.className ? (
    <Link className={cn(props.className, style.linkLogoCommon)} to="/">
      <img
        className={style.img}
        src={logo}
        alt="Логотип магазина мебели Фактура"
      />
    </Link>
  ) : (
    <Link to="/" className={style.linkLogoCommon}>
      <img
        className={style.img}
        src={logo}
        alt="Логотип магазина мебели Фактура"
      />
    </Link>
  );

export default Logo;
