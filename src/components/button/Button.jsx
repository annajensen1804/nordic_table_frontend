import styles from './button.module.css'

const Button = ({
  buttonText,
  type = "button",
  onClick,
  variant = "default",
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant] || ""}`}
      onClick={onClick}
      type={type}
    >
      <span className={styles.buttonText}>{buttonText}</span>
    </button>
  );
};

export default Button;