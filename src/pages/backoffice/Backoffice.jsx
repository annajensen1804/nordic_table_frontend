import { useState } from "react";
import styles from "./backoffice.module.css";
import DishesSection from "./components/DishesSection";
import { useLoaderData } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import { ToastContainer } from "react-toastify";
import DishForm from "./forms/DishForm";
import DishEditForm from "./forms/DishEditForm";
import ConfirmationForm from "./forms/ConfirmationForm";
import { useCrud } from "../../hooks/useCrud";
import Header from "../../components/header/Header";

const Backoffice = () => {
    const { remove } = useCrud();
  const dishes = useLoaderData();
  const [modal, setModal] = useState(null);
  const close = () => setModal(null);

  // Titler til modal vinduer
  const titles = {
    "dish-add": "Tilføj ret",
    "dish-edit": "Rediger ret",
    "confirm-delete": "Bekræft sletning",
  };

    const handleConfirmDelete = async () => {
      if (!modal?.item?._id) return;

      try {
        await remove("dish", modal.item._id);
        toast.success("Retten blev slettet!");
        close();
      } catch (error) {
        // Ошибка обработается внутри useCrud
      }
    };

  return (
    <article className={styles.backoffice}>
      
      <h1>BACKOFFICE</h1>
      <h2>Retter</h2>

      <DishesSection
        dishes={dishes}
        onAdd={() => setModal({ type: "dish-add" })}
        onEdit={(dish) => setModal({ type: "dish-edit", item: dish })}
        onDelete={(dish) =>
          setModal({
            type: "confirm-delete",
            message: `Er du sikker på, at du vil slette "${dish.title}"?`,
            item: dish,
          })
        }
      />

      <Modal
        isOpen={!!modal}
        onClose={close}
        /* Ternary condition */
        title={modal ? titles[modal.type] : ""}
      >
        {modal?.type?.startsWith("confirm-") && (
          <ConfirmationForm
            message={modal.message}
            onConfirm={handleConfirmDelete}
            onCancel={close}
          />
        )}

        {modal?.type === "dish-add" && <DishForm onClose={close} />}
        {modal?.type === "dish-edit" && (
          <DishEditForm dish={modal.item} onClose={close} />
        )}
      </Modal>

      <ToastContainer position="bottom-center" autoClose={3000} theme="dark" />
    </article>
  );
};;

export default Backoffice;