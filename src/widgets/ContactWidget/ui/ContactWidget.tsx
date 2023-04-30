import s from "./ContactWidget.module.scss";
import mailIcon from "../../../../public/mail-icon.svg";
import { FC } from "react";
import { ClipboardButton } from "../../ClipboardButton";

type ContactWidget = {
  titleInfo: string;
  src: string;
  info: string;
};

const ContactWidget: FC<ContactWidget> = (props) => {
  const { titleInfo, src, info } = props;
  return (
    <div className={s.contactWidgetWrapper}>
      <div className={s.imgWrapper}>
        <img src={src === "mail" ? mailIcon : ""} alt={titleInfo} />
      </div>
      <div className={s.infoWrapper}>
        <h3>{titleInfo}</h3>
        <div className={s.copyWrapper}>
          <h3>{info}</h3>
          {src === "mail" && <ClipboardButton text={info} />}
        </div>
      </div>
    </div>
  );
};

export default ContactWidget;
