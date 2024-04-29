import React from "react";
import ReactDOM from "react-dom/client";

//? Importamos el archivo de estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//? Importamos el archivo de JavaScript de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//? Importamos el sistema de rutas
import Router from "./router/Router.jsx";

//? Importamos los componentes de React Query para poder usarlos en toda la app 
import { QueryClientProvider } from "react-query";
import queryClient from "../api/queryClient.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>
);
