import s from "./Footer.module.scss";
import { useSelector } from "react-redux";

const Footer = () => {
  const socials = useSelector((state) => state.socials.socials);
  return (
    <footer className={s.footerWrapper}>
      <div className={s.infoWrapper}>
        <div className={s.mainSection}>
          <h2>Copyright © 2023. All rights are reserved</h2>
        </div>
        <div className={s.iconWrapper}>
          {socials.map((social, index) => {
            return (
              <a key={index} href={social.link} target="_blank">
                <img
                  src={social.iconWhite}
                  alt={social.link}
                  // className={s.icon}
                  className="icon"
                />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
