import { useMutation } from "react-query";
import api from "../../static/js/axios";

const resetPassword = async (email) => {
  try {
    const { data } = await api.post("auth/users/reset_password/", { email });
    return data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(Object.values(error.response.data).join(" "));
    } else {
      throw new Error('Error al intentar restablecer la contraseña');
    }
  }
};

export const useResetPassword = () => {
  return useMutation(resetPassword);
};