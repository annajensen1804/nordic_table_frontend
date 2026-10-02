import styles from './about.module.css';
import AboutImg from "../../assets/restaurant.png";

const About = () => {
    return (
      <section className={styles.container}>
        <img src={AboutImg} alt="restaurant" />

        <div className={styles.content}>
          <p className="kicker">Om os</p>
          <h2 className="title" style={{ color: "#1A1A1A" }}>
            En restaurant båret af nærhed og nærvær
          </h2>
          <div className={styles.line}></div>
          <p
            className="leadtext"
            style={{ color: "#5F5F5F", fontSize: "13px" }}
          >
            Nordic Table er grundlagt med en klar overbevisning: god mad behøver
            ikke at være kompliceret. Vi laver mad af det, naturen giver os -
            det nordiske køkkens uforlignelige råvarer. Fra de friske
            fiskefarvande til skovens bær og urter - vores menu forandrer sig
            med årstidens rytme. Det giver gæsterne noget nyt at opdage, og det
            giver os glæden ved at lave mad med det bedste, vi kan få fat i.
          </p>

          <div className={styles.facts}>
            <div className={styles.factCard}>
              <p className={styles.number}>12</p>
              <p className={styles.words}>retter på menuen</p>
            </div>
            <div className={styles.factCard}>
              <p className={styles.number}>6</p>
              <p className={styles.words}>års erfaring</p>
            </div>
            <div className={styles.factCard}>
              <p className={styles.number}>100</p>
              <p className={styles.words}>% nordiske råvarer</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About;