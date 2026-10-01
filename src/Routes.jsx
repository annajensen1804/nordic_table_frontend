import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import Loading from "./components/loading/Loading";
import Home from "./pages/Home";
import ErrorElement from "./components/feedbackElements/ErrorElement";
import { menuLoader } from "./loaders/DataLoaders";
import Menu from "./pages/Menu";
import Booking from "./pages/Booking";


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AppLayout />} hydrateFallbackElement={<Loading />}>
        <Route
          index
          element={<Home />}
          loader={menuLoader}
          errorElement={<ErrorElement />}
        />

        <Route
          path="menu"
          element={<Menu />}
          loader={menuLoader}
          errorElement={<ErrorElement />}
        />

        <Route
          path="booking"
          element={<Booking />}
          errorElement={<ErrorElement />}
        />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Route>,
  ),
);

export default routes;