import s from "./Content.module.scss";
import avatar from 'src/assets/ava.jpg'
import {RootState} from "store/store";
import {SocialsType} from "store/socialsSlice";
import {useSelector} from "react-redux";

const Content = () => {
    const socials = useSelector<RootState,SocialsType[] >((state) => state.socials.socials);
    return (
      <section className={s.contentSection}>
        <div className={s.upperWrapper}>
          <div className={s.infoWrapper}>
            <div className={s.textWrapper}>
              <h1>Front-End React Developer👋</h1>
              <h2>
                Hi, I'm Ilya Matsiushyn. A passionate Front-end React Developer
                based in Hrodno, Belarus. 📍
              </h2>
            </div>
            <div className={s.iconWrapper}>
              {socials.map((social, index: number) => {
                return (
                  <a key={index} href={social.link} target="_blank">
                    <img
                      src={social.iconBlack}
                      alt={social.link}
                      // className={s.icon}
                      className="icon black"
                    />
                  </a>
                );
              })}
            </div>
          </div>
          <div className={s.photoWrapper}>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
        <div className={s.stackWrapper}></div>
      </section>
    );
};

export default Content;
