import s from "./AboutMe.module.scss";
import aboutMe from "src/assets/abou-me-pic.jpg";

const AboutMe = () => {
  return (
    <section className={s.aboutMeSection} id='about'>
      <div className={s.aboutMeWrapper}>
        <div className={`${s.imgWrapper}`}>
          <img src={aboutMe} alt="Photo by Rahul Chakraborty on Unsplash" />
          <div className={s.loaderWrapper}></div>
          <div className={s.loaderBlue}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`${s.titleWrapper}`}>
          <h3>About me</h3>
          <h2>Dedicated Front-end Developer based in Hrodno, Belarus 📍</h2>
          <p>
            Hi there! I'm a front-end developer with experience in React, Redux,
            SCSS, and Tailwind. I'm passionate about building dynamic and
            responsive user interfaces, and love the challenge of solving
            complex problems with clean, efficient code. Let's build something
            great together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
