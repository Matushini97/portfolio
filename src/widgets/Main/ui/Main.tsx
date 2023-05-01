import s from "./Main.module.scss";
import { Contact } from "../../Contact";
import { AboutMe } from "../../AboutMe";

const Main = () => {
  return (
    <main className={s.mainWrapper}>
      <AboutMe />
      <Contact />
    </main>
  );
};

export default Main;
