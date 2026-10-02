import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import { toast } from "react-toastify";
import logo from "../../assets/logo/logoBlack.png";
import desktopLogo from "../../assets/logo/logoWhite.png"
import styles from './navigation.module.css'
import { useAuthContext } from "../../context/useAuthContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useAuthContext();
  const navigate = useNavigate();

  const closeMenu = () => setIsOpen(false);

  const handleLogout = () => {
      logout();
      closeMenu();
      toast.success("Du er nu logget ud");
      navigate("/");
    };
  

  return (
    <nav className={styles.navbar}>
      <Link to="/" onClick={closeMenu} className={styles["desktop-logo"]}>
        <img src={desktopLogo} alt="logo" />
      </Link>

      <div className={styles["burger-menu"]}>
        {isOpen && <img src={logo} alt="logo" className={styles.logo} />}
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={28}
          color="#CBA964"
        />
      </div>

      <ul
        className={
          isOpen ? `${styles["nav-links"]} ${styles.open}` : styles["nav-links"]
        }
      >
        <li>
          <NavLink onClick={closeMenu} to="/">
            Forside
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} to="/menu">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} to="/booking">
            Book bord
          </NavLink>
        </li>

        {isLoggedIn ? (
          <>
          <li>
            <NavLink onClick={closeMenu} to='/backoffice'>
                Backoffice
              </NavLink>
          </li>

          <li>
              <a onClick={handleLogout} style={{ cursor: "pointer" }}>
                Log ud
              </a>
            </li>
          </>
        ) : (
          <li>
              <NavLink onClick={closeMenu} to='/login'>
                Login
              </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
