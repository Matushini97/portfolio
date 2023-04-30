import s from "./Contact.module.scss";
import { ContactWidget } from "../../ContactWidget";

const Contact = () => {
  return (
    <section className={s.contactWrapper}>
      <div className={s.titleWrapper}>
        <h3>Contact</h3>
        <h2>Don't be shy! Hit me up! 👇</h2>
      </div>
      <ContactWidget src="mail" titleInfo="Mail" info="matushin.97@gmail.com"/>
    </section>
  );
};

export default Contact;
