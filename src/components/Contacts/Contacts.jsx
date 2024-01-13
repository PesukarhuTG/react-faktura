import style from "./Contacts.module.scss";
import cn from "classnames";
import CallSVG from "/src/assets/icons/icon-call.svg?react";
import VkontakteSVG from "/src/assets/icons/icon-vk.svg?react";
import YoutubeSVG from "/src/assets/icons/icon-youtube.svg?react";
import TelegramSVG from "/src/assets/icons/icon-tg.svg?react";

const Contacts = () => (
  <div className={style.contacts}>
    <a className={cn(style.phone, style.link)} href="tel:+79398391297">
      <CallSVG />
      <span>+7 (939) 839 12 97</span>
    </a>

    <ul className={style.list}>
      <li>
        <a className={style.link} href="#">
          <VkontakteSVG />
        </a>
      </li>

      <li>
        <a className={style.link} href="#">
          <YoutubeSVG />
        </a>
      </li>

      <li>
        <a className={style.link} href="#">
          <TelegramSVG />
        </a>
      </li>
    </ul>
  </div>
);

export default Contacts;
