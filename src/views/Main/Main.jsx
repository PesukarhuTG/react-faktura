import Goods from "../../components/Goods/Goods";
import Container from "../Container/Container";
import style from "./Main.module.scss";

const Main = () => (
  <main className={style.main}>
    <Container>
      <Goods />
    </Container>
  </main>
);
export default Main;
