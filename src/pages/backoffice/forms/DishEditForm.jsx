import { useCrud } from "../../../hooks/useCrud";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../components/button/Button";
import { useState } from "react";
import ConfirmationForm from "./ConfirmationForm";
import { toast } from "react-toastify";

const DishEditForm = ({ dish, onClose }) => {
  const { update } = useCrud();

  // States for confirmation-modal
  const [showConfirm, setShowConfirm] = useState(false);
  const [pendingData, setPendingData] = useState(null);

  const schema = yup.object().shape({
    title: yup.string().required("Titel er påkrævet"),
    description: yup.string().required("Beskrivelse er påkrævet"),
    category: yup.string().required("Vælg en type"),
    price: yup
      .number()
      .typeError("Pris skal være et tal")
      .required("Pris er påkrævet"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    
    defaultValues: {
      title: dish.title,
      description: dish.description,
      category: dish.category,
      price: dish.price,
    },
  });

  const handlePreSubmit = (data) => {
    setPendingData(data); // Gemmer data fra input-felterne i modal
    setShowConfirm(true); // Viser bekræftelse-modal
  };

  // Når vi trykker på Ja-knappen
  const handleActualSubmit = async () => {
    if (!pendingData) return;

    const formData = new FormData();
    formData.append("id", dish._id);
    formData.append("title", pendingData.title);
    formData.append("description", pendingData.description);
    formData.append("category", pendingData.category);
    formData.append("price", pendingData.price);

    if (pendingData.image && pendingData.image[0]) {
      formData.append("file", pendingData.image[0]);
    }

    try {
      await update("dish", formData);
      /* toast.success("Retten blev opdateret!"); */
      setShowConfirm(false);
      onClose();
    } catch {
      // Fejl vises allerede som toast fra useCrud.
    }
  };

  // Viser bekræftelse-modal
  if (showConfirm) {
    return (
      <ConfirmationForm
        message={`Vil du gemme ændringerne for "${pendingData?.title}"?`}
        onConfirm={handleActualSubmit}
        onCancel={() => {
          setShowConfirm(false);
          setPendingData(null);
        }}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(handlePreSubmit)}>
      <div>
        <label htmlFor="title">Titel</label>
        <input id="title" {...register("title")} />
        {errors.title && <span className="error">{errors.title.message}</span>}
      </div>

      <div>
        <label htmlFor="description">Beskrivelse</label>
        <input id="description" {...register("description")} />
        {errors.description && (
          <span className="error">{errors.description.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="category">Type:</label>
        <select id="category" {...register("category")}>
          <option value="">Vælg</option>
          <option value="main">Hovedretter</option>
          <option value="starter">Forretter</option>
          <option value="dessert">Desserter</option>
        </select>
        {errors.category && (
          <span className="error">{errors.category.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="price">Pris</label>
        <input id="price" {...register("price")} />
        {errors.price && <span className="error">{errors.price.message}</span>}
      </div>

      <div>
        <label>Vælg billede</label>
        <input id="image" type="file" {...register("image")} />
      </div>

      <Button
        variant="add"
        type="submit"
        buttonText={isSubmitting ? "Gemmer..." : "Opdater ret"}
      />
    </form>
  );
};

export default DishEditForm;
