import SearchSVG from "/src/assets/icons/icon-search.svg?react";
import style from "./SearchForm.module.scss";

const SearchForm = (props) => (
  <form className={props.className}>
    <input
      className={style.input}
      type="search"
      name="search"
      placeholder="Поиск"
    />
    <button className={style.btn} type="submit">
      <SearchSVG />
    </button>
  </form>
);
export default SearchForm;
