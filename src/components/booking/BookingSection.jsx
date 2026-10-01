import Button from '../button/Button';
import styles from './bookingSection.module.css';
import { useNavigate } from "react-router-dom";

const BookingSection = () => {
    const navigate = useNavigate();
    return (
      <section className={styles.container}>
        <p className="kicker">RESERVATIONER</p>
        <h2 className={styles.title}>Book dit bord hos Nordic Table</h2>
        <p className={styles.text}>
          Vi åbner vores døre for dig og dine, og giver jer en aften I aldrig
          glemmer. Book dit bord i dag - det er nemt og hurtigt.
        </p>
        <Button
          buttonText="BOOK BORD NU"
          onClick={() => navigate("/booking")}
        />
      </section>
    );
}

export default BookingSection;