import s from "./ClipboardButton.module.scss";
import copyIcon from "src/assets/copy.svg";
import doneIcon from "src/assets/done.svg";
import {useState} from "react";

type ClipboardButtonPropsType = {
  text: string
}

function ClipboardButton(props: ClipboardButtonPropsType) {

  const [icon, setIcon] = useState<string>(copyIcon)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.text);
    setIcon(doneIcon)
    setTimeout(() => {
      setIcon(copyIcon)
    }, 1500)
    // alert('Ты нахуй суда нажал чорт?')
  };

  return (
    <img
      src={icon}
      alt="copy"
      onClick={copyToClipboard}
      className={s.clipboardButton}
    />
  );
}

export default ClipboardButton;