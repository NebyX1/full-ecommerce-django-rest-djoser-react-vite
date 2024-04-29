import { useMutation } from "react-query";
import api from "../../static/js/axios";

// Función para registrar un nuevo usuario
const registerUser = async (userData) => {
  try {
    const { data } = await api.post("auth/users/", userData);
    return data;
  } catch (error) {
    // Si hay un error de respuesta y contiene datos, lanza un error con esos datos
    if (error.response && error.response.data) {
      // Aquí personalizamos el mensaje de error
      const errorMessage = Object.values(error.response.data).join(" ");
      throw new Error(errorMessage);
    } else {
      // Si no hay una respuesta de error con datos, lanza un error genérico
      throw new Error('Hubo un problema al registrar al usuario.');
    }
  }
};

export const useRegister = () => {
  return useMutation(registerUser);
};
