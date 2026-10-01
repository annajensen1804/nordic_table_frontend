import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import styles from './bookingForm.module.css';
import { serverPath } from "../../../settings";
import Button from "../../button/Button";

const BookingForm = () => {

     const schema = yup.object().shape({
       name: yup.string().required("Navn er påkrævet"),
       email: yup
         .string()
         .email("Ugyldig emailadresse")
         .required("Email er påkrævet"),
       date: yup.string().required("Vælg venligst dato"),
       time: yup.string().required("Vælg venligst tidspunkt"),
       numberOfGuests: yup
         .number()
         .required("Skriv venligst antal gæster")
         .typeError("Skal være et tal")
         .min(1)
         .max(12, "Der kan være 12 gæster maksimum"),
     });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema),

        
     });


    const today = new Date().toISOString().split('T')[0];

    const onSubmit = async (formData) => {
        try {

            const localDateTime = new Date(`${formData.date}T${formData.time}`); // dato + tidspunkt
            const startAtISO = localDateTime.toISOString(); // local time

            // Vores data matcher data, som backend forventer at se
            const backendData = {
                name: formData.name,
                email: formData.email,
                startAt: startAtISO,
                numberOfGuests: Number(formData.numberOfGuests)
            }

          const response = await fetch(`${serverPath}/booking`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(backendData),
          });
    

          if (!response.ok) {
                  toast.error("Der skete en fejl...");
                } else {
                  Swal.fire({
                    icon: "success",
                    title: `Tak for din booking, ${formData.name}!`,
                    text: "Vi glæde os til at se dig!",
                  });
                  reset();
                }
              } catch (error) {
                console.error("Fejl:", error);
                toast.error("Der skete en fejl...");
              }
            };
          
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Din reservation</h3>

        <div>
          <label htmlFor="name">FULDE NAVN *</label>
          <input
            id="name"
            type="text"
            placeholder="Jens Jensen"
            {...register("name")}
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="email">EMAIL *</label>
          <input
            id="email"
            type="email"
            placeholder="jens@example.dk"
            {...register("email")}
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </div>

        <div className={styles.dateTime}>
          <div>
            <label htmlFor="date">DATO *</label>
            <input
              id="date"
              type="date"
              placeholder="dd-mm-åååå"
              min={today}
              {...register("date")}
            />
            {errors.date && (
              <span className={styles.error}>{errors.date.message}</span>
            )}
          </div>

          <div>
            <label htmlFor="time">TIDSPUNKT *</label>
            <input
              id="time"
              type="time"
              placeholder="Vælg tidspunkt"
              {...register("time")}
            />
            {errors.time && (
              <span className={styles.error}>{errors.time.message}</span>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="number">ANTAL GÆSTER *</label>
          <input
            id="numberOfGuests"
            type="number"
            placeholder="Vælg antal gæster"
            {...register("numberOfGuests")}
          />
          {errors.numberOfGuests && (
            <span className={styles.error}>
              {errors.numberOfGuests.message}
            </span>
          )}
        </div>

        <Button type="submit" buttonText="BOOK BORD" />
      </form>
    );
}

export default BookingForm;