import s from "./PortfolioItem.module.scss";
import { ImageScroll } from "../../ImageScroll";

type PortfolioItemPropsType = {
  title: string;
  info: string;
  url: string;
  img: string;
  stack: string[];
  codeSource: string;
};

const PortfolioItem = (props: PortfolioItemPropsType) => {
  return (
    <div className={s.ItemWrapper}>
      <div className={s.InfoWrapper}>
        <h2>{props.title}</h2>
        <h3>{props.info}</h3>
        <div className={s.stackWrapper}>
          {props.stack.map((el) => {
            return <div className={s.stackItem}>{el}</div>;
          })}
        </div>
        <div className={s.linkWrapper}>
          <a href={props.codeSource}>
            <h3>Code</h3>
          </a>
          <a href={props.url}>
            <h3>Live Demo</h3>
          </a>
        </div>
      </div>
      <div className={s.ImageWrapper}>
        <ImageScroll img={props.img} url={props.url} />
      </div>
    </div>
  );
};

export default PortfolioItem;
