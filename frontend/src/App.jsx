import React from "react";
import "../static/styles/global.css";

//? Importamos el componente Outlet de react-router-dom para generar el ruteo de la app
import { Outlet } from "react-router-dom";
import HeaderNavbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

//? Importamos el Toaster de react-hot-toast para poder usarlo en toda la app
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <main>
        <HeaderNavbar />

        {/* Outlet es el componente que se encarga de generar el ruteo de la app */}
        <div>
          <Outlet />
        </div>

        <Footer />
      </main>

      {/* El Toaster es el componente que se encarga de mostrar los mensajes de error, éxito, etc. */}
      <Toaster />
    </>
  );
};

export default App;
