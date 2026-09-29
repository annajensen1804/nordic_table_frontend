import styles from './footer.module.css'
import logo from "../../assets/logo/logoWhite.png"
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.footerContent}>
          <div className={styles.blockOne}>
            <p className={styles.footerText}>
              Nordisk køkken med fokus pa sæsonens råvarer, enkelhed og hygge.
              Velkommen til bordet.
            </p>
            <div className={styles.some}>
              <FaFacebookF size={36} color="#5F5F5F" />
              <FaInstagram size={36} color="#5F5F5F" />
            </div>
          </div>

          <div className={styles.blockTwo}>
            <h4 className={styles.footerTitle}>ÅBNINGSTIDER</h4>
            <p className={styles.footerText}>Mandag Lukket</p>
            <p className={styles.footerText}>Tirsdag-torsdag 17-22</p>
            <p className={styles.footerText}>Frdag-lørdag 17-23</p>
            <p className={styles.footerText}>Søndag 17-20</p>
          </div>

          <div className={styles.blockThree}>
            <h4 className={styles.footerTitle}>HURTIGE LINKS</h4>
            <a className={styles.footerText}>Book bord</a> <br />
            <a className={styles.footerText}>Personale</a>
          </div>

          <div className={styles.blockFour}>
            <h4 className={styles.footerTitle}>KONTAKT OS</h4>
            <p className={styles.footerText}>Nordgade 12, 9000 Aalborg</p>
            <p className={styles.footerText}>+45 12 34 56 78</p>
            <p className={styles.footerText}>info@nordictable.dk</p>
          </div>
        </div>

        <p className={styles.copyright}>
          © 2026 Nordic Table. Alle rettigheder forbeholdes
        </p>
      </footer>
    );
}

export default Footer;