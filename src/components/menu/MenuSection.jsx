import MenuPunkt from './MenuPunkt';
import styles from './menuSection.module.css';
import { useLoaderData } from "react-router-dom";
import starterImg from "../../assets/appetizers.png"
import mainCoursesImg from "../../assets/mainCourses.png";
import dessertsImg from "../../assets/desserts.png"

const MenuSection = () => {

    const dishes = useLoaderData();

    const starters = dishes?.filter((dish) => dish.category === "starter");
    const mainCourses = dishes?.filter((dish) => dish.category === "main");
    const desserts = dishes?.filter((dish) => dish.category === "dessert");

    return (
      <section className={styles.container}>
        <div className={styles.menuBlock}>
          <div className={styles.title}>
            <img src={starterImg} alt="forreter"></img>
            <h2>Forretter</h2>
          </div>
          <ul>
            {starters?.map((dish) => (
              <MenuPunkt key={dish._id} dish={dish} />
            ))}
          </ul>
        </div>

        <div className={styles.menuBlock}>
          <div className={styles.title}>
            <img src={mainCoursesImg} alt="forreter"></img>
            <h2>Hovedretter</h2>
          </div>
          <ul>
            {mainCourses?.map((dish) => (
              <MenuPunkt key={dish._id} dish={dish} />
            ))}
          </ul>
        </div>

        <div className={styles.menuBlock}>
          <div className={styles.title}>
            <img src={dessertsImg} alt="forreter"></img>
            <h2>Desserter</h2>
          </div>
          <ul>
            {desserts?.map((dish) => (
              <MenuPunkt key={dish._id} dish={dish} />
            ))}
          </ul>
        </div>
      </section>
    );
}

export default MenuSection;