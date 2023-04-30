import s from './Navbar.module.scss'

const Navbar = () => {
    return (
        <header className={s.mainHeader}>
            <a href="#" className={s.logo}>Ilya.dev</a>
            <nav className={s.navWrapper}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    );
};

export default Navbar;