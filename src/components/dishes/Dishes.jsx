import styles from "./dishes.module.css";
import Dish from './Dish'
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const Dishes = ({ dishes }) => {
    const navigate = useNavigate();
  
return (
  <section className={styles.container}>
    <div className={styles.intro}>
      <p className="kicker">UDVALGTE RETTER</p>
      <h2 className="title" style={{ color: "#1A1A1A" }}>
        Vores signaturretter
      </h2>
      <p className={`${styles.leadText} gold`}>
        Hver af vores signaturretter er omhyggeligt sammensat af sæsonens bedste
        nordiske råvarer.
      </p>
    </div>

    <div className={styles.dishesContainer}>
      {dishes?.map((dish) => (
        <Dish key={dish._id} dish={dish} />
      ))}
    </div>

    <Button
      variant="transparentBlack"
      buttonText="Se hele menuen"
      onClick={() => navigate("/menu")}
    />
  </section>
);
};

export default Dishes;
