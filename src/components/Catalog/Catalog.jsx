import Container from "../../views/Container/Container";
import style from "./Catalog.module.scss";

const Catalog = () => (
  /* GET CATALOG LIST */
  <nav className={style.catalog}>
    <Container className={style.container}>
      <ul className={style.list}>
        <li>
          <a className={style.link} href="/catalog?slug=Диваны">
            Диваны
          </a>
        </li>
      </ul>
    </Container>
  </nav>
);

export default Catalog;
