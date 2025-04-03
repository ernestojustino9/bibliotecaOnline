import api from "./api";

export const getMunicipios = async () => {
  try {
    return await api.get("/municipios");
  } catch (error) {
    console.log(error.message);
  }
};


export const getMunicipiosProvincia = async (id) => {
  try {
    return await api.get("/municipios?provinciaId=" + id);
  } catch (error) {
    console.log(error.message);
  }
};



