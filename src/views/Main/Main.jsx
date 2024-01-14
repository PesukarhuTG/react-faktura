import Container from "../Container/Container";
import Catalog from "../../components/Catalog/Catalog";
import Goods from "../../components/Goods/Goods";
import style from "./Main.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categories/categoriesSlice";

const Main = () => {
  const dispatch = useDispatch();
  const { data: dataCategories, loading: loadingCategories } = useSelector(
    (state) => state.categories,
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loadingCategories) return <div>Загрузка...</div>;

  return (
    <main className={style.main}>
      <Container>
        <Catalog data={dataCategories} />
        <Goods />
      </Container>
    </main>
  );
};

export default Main;
