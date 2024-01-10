import Container from "../Container/Container";
import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";
import SearchForm from "../../components/SearchForm/SearchForm";
import style from "./Header.module.scss";

const Header = () => (
  <header className={style.header}>
    <Container className={style.container}>
      <div className={style.logo}>
        <Logo />
      </div>
      <div className={style.search}>
        <SearchForm />
      </div>
      <div className={style.navigation}>
        <Navigation />
      </div>
    </Container>
  </header>
);
export default Header;
