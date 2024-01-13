import Logo from "../../components/Logo/Logo";
import Container from "../Container/Container";
import Contacts from "../../components/Contacts/Contacts";
import Developers from "../../components/Developers/Developers";
import Copyrights from "../../components/Copyrights/Copyrights";
import style from "./Footer.module.scss";

const Footer = () => (
  <footer className={style.footer}>
    <Container className={style.container}>
      <Logo className={style.linkLogo} />
      <Contacts />
      <Developers />
      <Copyrights />
    </Container>
  </footer>
);
export default Footer;
