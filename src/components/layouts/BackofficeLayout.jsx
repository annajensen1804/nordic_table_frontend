import { Outlet, ScrollRestoration } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackofficeNavigation from "../navigation/BackofficeNavigation";

/* import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer"; */

const BackofficeLayout = () => {
  return (
    <div className="app backoffice-theme">
      <BackofficeNavigation />
      <div className="main">
        <Outlet />
        <ScrollRestoration />
      </div>
      
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </div>
  );
};

export default BackofficeLayout;
