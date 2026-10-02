import { useLoaderData } from "react-router-dom";
import Dishes from "../components/dishes/Dishes";
import Header from "../components/header/Header"
import BookingSection from "../components/booking/BookingSection";
import About from "../components/about/About";

const Home = () => {
  const dishes = useLoaderData();
  const signatureDishes = dishes?.filter(
    (dish) => dish.isSignature === true,
  );

    return (
      <article>
        <Header
          kicker="— VELKOMST"
          title="Smag det nordiske"
          leadtext="Nordic Table er et sted, hvor sæsonens bedste råvarer forvandles til uforglemmelige oplevelser. Ro, kvalitet og hygge i hvert eneste måltid."
          showButtons
        />

        <Dishes dishes={signatureDishes} />
        <About />

        <BookingSection />
      </article>
    );
}

export default Home;