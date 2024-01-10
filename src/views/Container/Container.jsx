import cn from "classnames";
import style from "./Container.module.scss";

const Container = (props) =>
  props.className ? (
    <div className={cn(style.container, props.className)}>{props.children}</div>
  ) : (
    <div className={style.container}>{props.children}</div>
  );

export default Container;
