import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/useAuthContext";
import Button from "../../components/button/Button";
import styles from "./login.module.css";

const Login = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email("Ugyldig email").required("Email er påkrævet"),
    password: yup.string().required("Adgangskode er påkrævet"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      await login(data);
      toast.success("Du er nu logget ind!");
      navigate("/backoffice");
    } catch (error) {
      toast.error(error.message || "Login mislykkedes");
    }
  };

  return (
    <article className={styles.container}>
      <div className={styles.intro}>
        <a href="/">← Tilbage til forsiden</a>
        <h1>Log ind</h1>
        <p>Adgang forbeholdt personale og administratorer</p>
      </div>

      <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="jensjensen@example.dk" {...register("email")} />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="password">Adgangskode</label>
          <input id="password" type="password" placeholder="********" {...register("password")} />
          {errors.password && (
            <span className={styles.error}>{errors.password.message}</span>
          )}
        </div>

        <Button
          type="submit"
          buttonText={isSubmitting ? "Logger ind..." : "Log ind"}
          variant="black"
        />
      </form>
    </article>
  );
};

export default Login;