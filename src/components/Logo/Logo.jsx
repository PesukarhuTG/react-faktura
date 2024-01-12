import logo from "/src/assets/store-logo.svg";

const Logo = (props) =>
  props.className ? (
    <a className={props.className} href="/">
      <img
        className={props.imgClass}
        src={logo}
        alt="Логотип магазина мебели Фактура"
      />
    </a>
  ) : (
    <a href="/">
      <img src={logo} alt="Логотип магазина мебели Фактура" />
    </a>
  );

export default Logo;
