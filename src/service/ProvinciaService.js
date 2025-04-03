import api from "./api";

export const getProvincias = async () => {
  try {
    return await api.get("/provincias");
  } catch (error) {
    console.log(error.message);
  }
};



