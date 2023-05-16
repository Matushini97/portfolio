import s from "./ImageScroll.module.scss";

type ImageScrollPropsType = {
  img: string;
  url: string;
};

const ImageScroll = (props: ImageScrollPropsType) => {
  return (
    <div className={s.ImageContainer}>
      <a href={props.url} target="_blank">
        <img src={props.img} alt="site preview" />
      </a>
    </div>
  );
};

export default ImageScroll;
