import BookingForm from '../forms/bookingForm/BookingForm';
import styles from './bookingPageSec.module.css'

const BookingPageSection = () => {
    return (
      <section className={styles.container}>
        <div className={styles.intro}>
            <p className="kicker">GÆSTFRIHED</p>
        <h2>Velkomst fra højre ben</h2>
        <p className={styles.leadText}>
          Vi ønsker at give dig og dine gæster den bedst mulige oplevelse. Her
          er hvad du skal vide inden dit besøg.
        </p>
        <div className={styles.card}>
          <h3>Bordstørrelse</h3>
          <p>
            Vi tager imod selskaber fra 1 til 12 personer. Kontakt os direkte
            for større selskaber.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Åbningstider</h3>
          <p>
            Tirsdag-torsdag kl. 17-22. Fredag-lørdag kl. 17-23. Søndag kl.
            12-20. Mandag lukket.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Kontakt</h3>
          <p>
            Ring på +45 12 34 56 78 eller skriv til info@nordictable.dk ved
            spørgsmål.
          </p>
        </div>
        </div>

        <BookingForm />
      </section>
    );
}

export default BookingPageSection;;