import Container from "../../views/Container/Container";
import cn from "classnames";
import style from "./Goods.module.scss";
import CardItem from "../CardItem/CardItem";

const Goods = () => (
  <section className={style.goods}>
    <Container>
      <h2 className={cn(style.title, "visually-hidden")}>Список товаров</h2>

      <ul className={style.list}>
        {/* TO DO LIST OF GOODS DATA*/}
        <li>
          <CardItem />
        </li>
        <li>
          <CardItem />
        </li>
        <li>
          <CardItem />
        </li>
        <li>
          <CardItem />
        </li>
      </ul>
    </Container>
  </section>
);

export default Goods;
