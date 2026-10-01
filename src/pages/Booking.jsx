import BookingPageSection from "../components/bookingPageSection/BookingPageSection";
import Header from "../components/header/Header";

const Booking = () => {
    return (
      <article>
        <Header
          kicker="— RESERVATIONER"
          title="Book dit bord"
          leadtext="Vi glæder os til at modtage dig. Book dit bord nedenfor, og vi sørger for resten."
        />
        <BookingPageSection />
      </article>
    );
}

export default Booking;