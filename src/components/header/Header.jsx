import styles from './header.module.css';
import headerImg from "../../assets/headerbg.png";
import { useLocation } from 'react-router-dom';

const Header = ({ kicker, title, leadtext, buttonText, onClick }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className={isHome ? styles.largeHeader : styles.header}>
      <img src={headerImg} alt="Banner" className={styles.image} />
      <div className={styles.headerContent}>
        <p className={styles.kicker}>{kicker}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.leadtext}>{leadtext}</p>
        {buttonText && onClick && <button>BOOK</button>}
        {buttonText && onClick && <button>SE</button>}
      </div>
    </header>
  );
};

export default Header;