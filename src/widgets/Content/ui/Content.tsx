import s from "./Content.module.scss";
import avatar from 'src/assets/ava.jpg'

const Content = () => {
    return (
        <section className={s.contentSection}>
            <div className={s.upperWrapper}>
                <div className={s.infoWrapper}>
                    <h1>Front-End React Developer👋</h1>
                    <h2>Hi, I'm Ilya Matsiushyn. A passionate Front-end React Developer based in Hrodno, Belarus. 📍</h2>
                    <div className={s.iconWrapper}>
                        {/*<img src={github} alt="github" className={s.icon}/>*/}
                        {/*<img src={linkedin} alt="linkedin" className={s.icon}/>*/}
                        {/*<img src={tg} alt="tg" className={s.icon}/>*/}
                    </div>
                </div>
                <div className={s.photoWrapper}>
                    <img src={avatar} alt="avatar"/>
                </div>
            </div>
            <div className={s.stackWrapper}></div>
        </section>
    );
};

export default Content;
