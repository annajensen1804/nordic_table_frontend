import styles from './header.module.css';
import headerImg from "../../assets/headerbg.png";
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../button/Button';

const Header = ({ kicker, title, leadtext, showButtons = false, onClick }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const navigate = useNavigate();

  return (
    <header className={isHome ? styles.largeHeader : styles.header}>
      <img src={headerImg} alt="Banner" className={styles.image} />
      <div className={styles.headerContent}>
        <p className={styles.kicker}>{kicker}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.leadtext}>{leadtext}</p>

        {showButtons && (
          <div className={styles.buttons}>
            <Button
              buttonText="BOOK BORD"
              variant="default"
              onClick={() => navigate("/booking")}
            />
            <Button
              buttonText="SE MENUEN"
              variant="transparent"
              onClick={() => navigate("/menu")}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;