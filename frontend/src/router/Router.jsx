import React from "react";
//? Importamos los componentes de React Router para generar el sistema de rutas de la app
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//? Importamos todas las views para poder usarlas en las rutas
import App from "../App.jsx";
import Home from "../Views/Home.jsx";
import About from "../Views/About.jsx";
import Register from "../Views/Register.jsx";
import Login from "../Views/Login.jsx";
import Tienda from "../Views/Tienda.jsx";
import ProductDetail from "../Views/ProductDetail.jsx";
import Cart from "../Views/Cart.jsx";
import NotFound404 from "../Views/NotFound404.jsx";
import ConfirmPayment from "../components/payments/ConfirmPayment.jsx";
import GemComponent from "../Views/Gemstones.jsx";
import PlantsComponent from "../Views/Plants.jsx";
import Contact from "../Views/Contact.jsx";
import Legal from "../Views/Legal.jsx";
import Privacy from "../Views/Privacidad.jsx";
import UserDashboard from "../Views/UserDashboard.jsx";
import ActivateUser from "../Views/ActivateUser.jsx";

//? Protector de rutas autenticadas
import { ProtectedRoute } from "./security/ProtectedRoute.jsx";

//? Protector de rutas no autenticadas
import { LoginGuard } from "./security/LoginGuard.jsx";
import PasswordReset from "../Views/PasswordReset.jsx";
import Reviews from "../Views/Reviews.jsx";

const Router = () => {
  //? Crear el sistema de rutas
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}>
          <Route index={true} element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/index" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/store" element={<Tienda />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/gems" element={<GemComponent />} />
          <Route path="/plants" element={<PlantsComponent />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          //? Rutas que solo pueden ser accedidas por usuarios no autenticados
          <Route
            path="/login"
            element={
              <LoginGuard>
                <Login />
              </LoginGuard>
            }
          />
          <Route
            path="/register"
            element={
              <LoginGuard>
                <Register />
              </LoginGuard>
            }
          />
          <Route
            path="/user-verification/:uid/:token/"
            element={
              <LoginGuard>
                <ActivateUser />
              </LoginGuard>
            }
          />
          <Route
            path="/password-reset/:uid/:token/"
            element={
              <LoginGuard>
                <PasswordReset />
              </LoginGuard>
            }
          />
          //? Rutas que solo pueden ser accedidas por usuarios autenticados
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pago-confirmado"
            element={
              <ProtectedRoute>
                <ConfirmPayment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          //? Ruta 404 (Not Found)
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
