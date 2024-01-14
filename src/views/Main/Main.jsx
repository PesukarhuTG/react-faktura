import Container from "../Container/Container";
import Catalog from "../../components/Catalog/Catalog";
import Goods from "../../components/Goods/Goods";
import style from "./Main.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categoriesSlice";
import { fetchGoods } from "../../store/goods/goodsSlice";

const Main = () => {
  const dispatch = useDispatch();
  const { data: dataCategories, loading: loadingCategories } = useSelector(
    (state) => state.categories,
  );
  const { data: dataGoods, loading: loadingGoods } = useSelector(
    (state) => state.goods,
  );

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchGoods());
  }, [dispatch]);

  if (loadingCategories) return <div>Загрузка...</div>;
  if (loadingGoods) return <div>Загрузка...</div>;

  return (
    <main className={style.main}>
      <Container>
        <Catalog data={dataCategories} />
        <Goods data={dataGoods} />
      </Container>
    </main>
  );
};

export default Main;
