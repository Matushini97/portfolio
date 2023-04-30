import s from "./ClipboardButton.module.scss";
import copyIcon from "../../../../public/copy.png";
import doneIcon from "../../../../public/done.png";
import {useState} from "react";

function ClipboardButton(props) {

  const [icon, setIcon] = useState<string>(copyIcon)

  function copyToClipboard() {
    navigator.clipboard.writeText(props.text);
    setIcon(doneIcon)
    setTimeout(() => {
      setIcon(copyIcon)
    }, 1500)
  }

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