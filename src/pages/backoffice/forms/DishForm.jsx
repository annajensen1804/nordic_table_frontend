import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useCrud } from "../../../hooks/useCrud";
import Button from "../../../components/button/Button"
import 'react-toastify/dist/ReactToastify.css';

const DishForm = ({ onClose }) => {
  const { create } = useCrud();

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
  formState: {errors, isSubmitting},
} = useForm({resolver: yupResolver(schema)})

const onSubmit = async (data) => {
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("category", data.category);
  formData.append("price", data.price);
  
  if (data.file && data.file[0]) {
    formData.append("file", data.file[0]);
  }

  try {
    await create("dish", formData);
    onClose();
  } catch (error) {
    console.error("Fejl ved oprettelse af ret:", error);
  }
}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        {errors.price && (
          <span className="error">{errors.price.message}</span>
        )}
      </div>

      <div>
        <label>Vælg billede</label>
        <input id="image" type="file" {...register("image")} />
      </div>

      <Button
        variant="add"
        type="submit"
        buttonText={isSubmitting ? "Gemmer..." : "Tilføj ret"}
      />
    </form>
  );
};

export default DishForm;
