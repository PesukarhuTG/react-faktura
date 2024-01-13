import Container from "../Container/Container";
import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";
import SearchForm from "../../components/SearchForm/SearchForm";
import style from "./Header.module.scss";

const Header = () => (
  <header className={style.header}>
    <Container className={style.container}>
      <Logo className={style.linkLogoHeader} />
      <SearchForm />
      <Navigation />
    </Container>
  </header>
);
export default Header;
