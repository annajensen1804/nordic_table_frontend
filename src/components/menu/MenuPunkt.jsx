import styles from "./menuSection.module.css";

const MenuPunkt = ({ dish }) => {
  return (
    <li className={styles.punkt}>
      <div className={styles.punktLeft}>
        <h3>{dish.title}</h3>
        <p>{dish.description}</p>
      </div>
        <div className={styles.punktRight}>
            <p className={styles.price}>{dish.price} kr.</p>
        </div>
      
    </li>
  );
};

export default MenuPunkt;