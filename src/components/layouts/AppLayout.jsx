import { Outlet, ScrollRestoration } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer"; */

const AppLayout = () => {
  return (
    <div className="app">

      {/* <Navigation /> */}
      <div className="main">
        <Outlet />
        <ScrollRestoration />
      </div>
      {/* <Footer /> */}
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

export default AppLayout;
