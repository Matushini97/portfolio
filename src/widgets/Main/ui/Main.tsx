import s from "./Main.module.scss";
import { Contact } from "../../Contact";
import { AboutMe } from "../../AboutMe";
import { Content } from "../../Content";

const Main = () => {
  return (
    <main className={s.mainWrapper}>
      <Content />
      <AboutMe />
      <Contact />
    </main>
  );
};

export default Main;
