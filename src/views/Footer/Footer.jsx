import Logo from "../../components/Logo/Logo";
import Container from "../Container/Container";
import Contacts from "../../components/Contacts/Contacts";
import Developers from "../../components/Developers/Developers";
import style from "./Footer.module.scss";

const Footer = () => (
  <footer className={style.footer}>
    <Container className={style.container}>
      <Logo className={style.linkLogoFooter} />
      <Contacts />
      <Developers />
      <p className={style.copyright}>&copy; Фактура, 2024</p>
    </Container>
  </footer>
);
export default Footer;
