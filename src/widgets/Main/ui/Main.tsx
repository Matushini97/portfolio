import s from "./Main.module.scss";
import { Contact } from "../../Contact";

const Main = () => {
  return (
    <main className={s.mainWrapper}>
      <Contact />
    </main>
  );
};

export default Main;