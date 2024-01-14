import Container from "../../views/Container/Container";
import cn from "classnames";
import style from "./Goods.module.scss";
import CardItem from "../CardItem/CardItem";

const Goods = ({ data: goodsList }) => (
  <section className={style.goods}>
    <Container>
      <h2 className={cn(style.title, "visually-hidden")}>Список товаров</h2>

      <ul className={style.list}>
        {goodsList.map((item) => (
          <li key={item.id}>
            <CardItem {...item} />
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default Goods;
