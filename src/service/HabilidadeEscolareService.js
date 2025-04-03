import api from "./api";

export const getHabilidadeEscolares = async () => {
  try {
    return await api.get("/habilidadeescolares");
  } catch (error) {
    console.log(error.message);
  }
};




