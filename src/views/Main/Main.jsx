import Container from "../Container/Container";
import Catalog from "../../components/Catalog/Catalog";
import Goods from "../../components/Goods/Goods";
import style from "./Main.module.scss";

const Main = () => (
  <main className={style.main}>
    <Container>
      <Catalog />
      <Goods />
    </Container>
  </main>
);
export default Main;
