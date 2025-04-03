import api from "./api";

export const getContactos = async () => {
  try {
    return await api.get("contactos");
  } catch (error) {
    console.log(error.message);
  }
};
export const createContacto = async (data) => {
  try {
    return await api.post("contactos", data);
  } catch (error) {
    console.log(error.message);
  }
};



