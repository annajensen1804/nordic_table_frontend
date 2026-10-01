import Button from "../../../components/button/Button";
import styles from "./form.module.css";

const ConfirmationForm = ({ message, onConfirm, onCancel }) => {
    return (
      <div className={styles.confirmModal}>
        <p>{message}</p>
        <Button
          type="button"
          onClick={onConfirm}
          variant="edit"
          buttonText="Ja"
        />
        <Button
          type="button"
          onClick={onCancel}
          variant="delete"
          buttonText="Nej"
        />
      </div>
    );
}

export default ConfirmationForm;