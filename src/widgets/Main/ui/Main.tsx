import s from "./Main.module.scss";
import { Contact } from "../../Contact";
import { AboutMe } from "../../AboutMe";
import { Content } from "../../Content";
import { Portfolio } from "../../Portfolio";

const Main = () => {
  return (
    <main className={s.mainWrapper}>
      <Content />
      <AboutMe />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Main;
