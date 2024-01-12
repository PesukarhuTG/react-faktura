import style from "./Contacts.module.scss";
import cn from "classnames";

const Contacts = () => (
  <div className={style.contacts}>
    <a className={cn(style.phone, style.link)} href="tel:+79398391297">
      <span>+7 (939) 839 12 97</span>
    </a>

    <ul className={style.list}>
      <li>
        <a className={style.link} href="#">
          vk
        </a>
      </li>

      <li>
        <a className={style.link} href="#">
          yt
        </a>
      </li>

      <li>
        <a className={style.link} href="#">
          tg
        </a>
      </li>
    </ul>
  </div>
);

export default Contacts;
