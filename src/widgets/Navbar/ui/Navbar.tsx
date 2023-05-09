import s from './Navbar.module.scss'
import {Link} from 'react-scroll'
const Navbar = () => {
    return (
        <header className={s.mainHeader}>
            <Link to="home" spy={true} smooth={true} offset={50} duration={500} className={s.logo}>Ilya.dev</Link>
            <nav className={s.navWrapper}>
                <Link to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
                <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
                <Link to="projets" spy={true} smooth={true} offset={50} duration={500}>Projects</Link>
                <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
            </nav>
        </header>
    );
};

export default Navbar;