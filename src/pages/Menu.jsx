import Header from "../components/header/Header"
import MenuSection from "../components/menu/MenuSection";

const Menu = ({ dishes }) => {

    return (
      <article>
        <Header
          kicker="VORES MENU"
          title="Smagsoplevelser fra det nordiske køkken"
          leadtext="Alt på vores menu er tilberedt af sæsonens friskeste råvarer. Vi arbejder tæt med lokale producenter for at sikre den bedste kvalitet."
        /> 
        <MenuSection dishes={dishes} />
      </article>
    );
}

export default Menu;