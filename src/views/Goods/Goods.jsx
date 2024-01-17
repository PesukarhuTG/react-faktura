import Container from "../Container/Container";
import cn from "classnames";
import style from "./Goods.module.scss";
import CardItem from "../../components/CardItem/CardItem";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGoods } from "../../store/goods/goodsSlice";

const Goods = () => {
  const dispatch = useDispatch();

  const {
    data: goodsList,
    loading,
    error,
  } = useSelector((state) => state.goods);

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
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
};

export default Goods;
