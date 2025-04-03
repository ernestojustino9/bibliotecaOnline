import api from "./api";

export const getHabilidadeAcademicas = async () => {
  try {
    return await api.get("/habilidadeacademicas");
  } catch (error) {
    console.log(error.message);
  }
};




