import style from "./Developers.module.scss";

const Developers = () => (
  <ul className={style.list}>
    <li className={style.item}>
      Дизайн:&nbsp;
      <a
        className={style.link}
        href="https://t.me/Mrshmallowww"
        target="_blank"
        rel="noreferrer">
        Anastasia&nbsp;Ilina
      </a>
    </li>
    <li className={style.item}>
      Разработка:&nbsp;
      <a
        className={style.link}
        href="https://github.com/PesukarhuTG"
        target="_blank"
        rel="noreferrer">
        Tatiana&nbsp;Fox
      </a>
    </li>
  </ul>
);

export default Developers;
