import styles from './dishes.module.css'

const Dish = ({ dish }) => {
    return (
      <figure className={styles.dishCard}>
        <img src={dish.image} alt={dish.title} />
        <p className={styles.badge}>SIGNATUR</p>
        <div className={styles.cardText}>
          <p className='kicker'>{dish.category}</p>
        <h3>{dish.title}</h3>
        <p>{dish.description}</p>
        <p className={styles.price}>{dish.price}</p>
        </div>
        
      </figure>
    );
}

export default Dish;