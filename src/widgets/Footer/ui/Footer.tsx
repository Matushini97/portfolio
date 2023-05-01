import s from "./Footer.module.scss";
import github from "../../../assets/github-icon.svg";
import linkedin from "../../../assets/linkedin-icon.svg";
import tg from "../../../assets/tg-icon.svg"

const Footer = () => {
  return (
    <footer className={s.footerWrapper}>
      <div className={s.infoWrapper}>
        <div className={s.mainSection}>
          <h2>Copyright © 2023. All rights are reserved</h2>
        </div>
        <div className={s.iconWrapper}>
          <a href="https://github.com/Matushini97" target="_blank">
            <img src={github} alt="github" className={s.icon} />
          </a>
          <a href="https://www.linkedin.com/in/ilya-matsiushyn-165602229/" target="_blank">
            <img src={linkedin} alt="linkedin" className={s.icon} />
          </a>
          <a href="https://t.me/Matushini" target="_blank">
            <img src={tg} alt="tg" className={s.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
